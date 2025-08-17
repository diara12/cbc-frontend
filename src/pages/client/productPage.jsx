import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
                .then((res) => {
                    setProducts(res.data);
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    // 👉 group products by category
    const groupedProducts = products.reduce((groups, product) => {
        const category = product.category || "Other";
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});

    return (
        <div className="w-full h-full flex flex-col gap-10 p-4">
            {Object.keys(groupedProducts).map((category) => (
                <div key={category}>
                    {/* Category title */}
                    <h2 className="w-full text-2xl font-semibold text-white bg-accent px-6 py-2 rounded-full shadow-md mb-6 text-center inline-block">
                        {category}
                    </h2>

                    {/* Products inside this category */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        {groupedProducts[category].map((product) => (
                            <ProductCard
                                key={product.productId}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
