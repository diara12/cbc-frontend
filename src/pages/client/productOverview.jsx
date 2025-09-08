import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";
import Loading from "../../components/loading";
import { addToCart, getCart } from "../../utils/cart";

export default function ProductOverviewPage() {
  const params = useParams();
  const productId = params.id;
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  // fetch product
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((response) => {
        setProduct(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        toast.error("Error fetching product details");
      });
  }, [productId]);

  // fetch reviews
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + productId)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, [productId]);

  // submit review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + productId, newReview)
      .then((res) => {
        setReviews([res.data, ...reviews]);
        setNewReview({ name: "", rating: 5, comment: "" });
        toast.success("Review submitted!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error submitting review");
      });
  };

  // render stars (plain text)
  const renderStars = (count) => {
    return (
      <span className="text-yellow-500 text-lg">
        {"★".repeat(count) + "☆".repeat(5 - count)}
      </span>
    );
  };

  return (
    <>
      {status === "success" && (
        <div className="w-full h-full flex flex-col md:flex-row md:max-h-full md:overflow-y-scroll pt-4">
          {/* Title (mobile) */}
          <h1 className="w-full md:hidden block my-8 text-center text-4xl text-secondary font-semibold">
            {product.name}
            {product.altNames.map((altName, index) => (
              <span key={index} className="text-4xl text-gray-600">
                {" | " + altName}
              </span>
            ))}
          </h1>

          {/* Images */}
          <div className="w-full md:w-[50%] md:h-full flex justify-center">
            <ImageSlider images={product.images} />
          </div>

          {/* Details */}
          <div className="w-full md:w-[50%] flex justify-center md:h-full">
            <div className="w-full md:w-[500px] md:h-[600px] flex flex-col items-center">
              <h1 className="w-full hidden md:block text-center text-4xl text-secondary font-semibold">
                {product.name}
                {product.altNames.map((altName, index) => (
                  <span key={index} className="text-4xl text-gray-600">
                    {" | " + altName}
                  </span>
                ))}
              </h1>

              <h1 className="w-full text-center my-2 text-md text-gray-600 font-semibold">
                {product.productId}
              </h1>

              <p className="w-full text-center my-2 text-md text-gray-600 font-medium">
                {product.description}
              </p>

              {/* price */}
              {product.labelledPrice > product.price ? (
                <div className="mt-2">
                  <span className="text-3xl mx-2 text-gray-500 line-through">
                    {product.labelledPrice.toFixed(2)}
                  </span>
                  <span className="text-3xl mx-2 font-bold text-accent">
                    {product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl mx-2 font-bold text-accent">
                  {product.price.toFixed(2)}
                </span>
              )}

              {/* actions */}
              <div className="w-full flex flex-col md:flex-row gap-3 justify-center items-center mt-6">
                <button
                  className="w-[200px] h-[50px] bg-accent text-white rounded-xl hover:bg-accent/80 transition"
                  onClick={() => {
                    addToCart(product, 1);
                    toast.success("Added to cart!");
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="w-[200px] h-[50px] bg-accent text-white rounded-xl hover:bg-accent/80 transition"
                  onClick={() => {
                    navigate("/checkout", {
                      state: {
                        cart: [
                          {
                            productId: product.productId,
                            name: product.name,
                            image: product.images[0],
                            price: product.price,
                            labelledPrice: product.labelledPrice,
                            qty: 1,
                          },
                        ],
                      },
                    });
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews */}
      {status === "success" && (
        <div className="w-full mt-12 border-t pt-8 px-6 md:px-20 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>

          {/* list */}
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review, i) => (
                <div key={i} className="p-4 bg-white rounded-lg shadow flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          )}

          {/* form */}
          <form
            onSubmit={handleReviewSubmit}
            className="mt-8 p-6 bg-white rounded-lg shadow space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">Write a Review</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-accent focus:outline-none"
              required
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-accent focus:outline-none"
            >
              <option value={5}>★★★★★ (5)</option>
              <option value={4}>★★★★☆ (4)</option>
              <option value={3}>★★★☆☆ (3)</option>
              <option value={2}>★★☆☆☆ (2)</option>
              <option value={1}>★☆☆☆☆ (1)</option>
            </select>
            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-accent focus:outline-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}

      {status === "loading" && <Loading />}
    </>
  );
}
