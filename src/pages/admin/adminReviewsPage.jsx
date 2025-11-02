import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/reviews")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch reviews");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">

      {loading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <div className="overflow-x-auto">
            <table className="w-full text-center border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[var(--color-accent)] text-white">
              <tr>
                <th className="py-3 px-2">Product</th>
                <th className="py-3 px-2">Reviewer</th>
                <th className="py-3 px-2">Rating</th>
                <th className="py-3 px-2">Comment</th>
                <th className="py-3 px-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {review.productId || "Unknown"} <br />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{review.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-yellow-500">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{review.comment}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
