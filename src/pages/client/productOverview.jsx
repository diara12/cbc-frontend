import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ImageSkider from "../../components/ImageSkider"; // or ImageSlider if that's correct
import Loading from "../../components/loading";

export default function ProductOverviewPage() {
    const params = useParams();
    const productId = params.id;
    const [status, setStatus] = useState("loading");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
            .then((response) => {
                setProduct(response.data);
                setStatus("success");
            })
            .catch((error) => {
                setStatus("error");
                toast.error("Error fetching product data");
            });
    }, [productId]);

    return (
        <>
            {status === "success" && product && (
                <div className="w-full h-full flex">
                    <div className="w-[50%]  h-full">
                        <ImageSkider images={product.images} />
                    </div>
                    <div className="w-[50%] flex justify-center items-center h-full">
                        <div className="w-[500px] h-[600px] flex flex-col items-center">
                            <h1 className="w-full text-center text-4xl text-secondary font-semibold">
                                {product.name}
                                {product.altNames && product.altNames.map((altName, index) => (
                                    <span key={index} className="text-2xl text-grey-600">{" | " + altName}</span>
                                ))}
                            </h1>
                            <h1 className="w-full text-center my-2 text-md text-gray-600 font-semibold">{product.productId}</h1>
                            <p className="w-full text-center my-2 text-md text-gray-600 font-semibold">{product.description}</p>
                            {product.labelledPrice > product.price ? (
                                <div>
                                    <span className="text-4xl mx-4 text-gray-500 line-through">{product.labelledPrice.toFixed(2)}</span>
                                    <span className="text-red-600 font-bold text-accent">{product.price.toFixed(2)}</span>
                                </div>
                            ) : (
                                <span className="text-red-600 font-bold text-accent">{product.price.toFixed(2)}</span>
                            )}
                            <div className="w-full flex justify-center items-center mx-4">
                                {/* Add content here if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {status === "loading" && <Loading />}
        </>
    );
}