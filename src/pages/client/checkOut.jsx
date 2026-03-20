import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

export default function CheckoutPage() {
	const location = useLocation();

	const [cart, setCart] = useState(location.state?.cart || []);

	// ✅ Added states
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	function getTotal() {
		let total = 0;
		cart.forEach((item) => {
			total += item.price * item.qty;
		});
		return total;
	}

	function removeFromCart(index) {
		const newCart = cart.filter((_, i) => i !== index);
		setCart(newCart);
	}

	function changeQty(index, qty) {
		const newQty = cart[index].qty + qty;
		if (newQty <= 0) {
			removeFromCart(index);
			return;
		} else {
			const newCart = [...cart];
			newCart[index].qty = newQty;
			setCart(newCart);
		}
	}

	async function placeOrder() {
	const token = localStorage.getItem("token");

    if (!token) {
        toast.error("Please login to place order");
        return;
    }

    if (cart.length === 0) {
        toast.error("Your cart is empty");
        return;
    }

    if (!name.trim() || !phoneNumber.trim() || !address.trim()) {
        toast.error("Please fill name, phone and address");
        return;
    }

    const orderInformation = {
        name: name.trim(),
        phone: phoneNumber.trim(),
        address: address.trim(),
        products: cart.map((item) => ({
            productId: item.productId,
            qty: Number(item.qty),
        })),
    };

    try {
        const res = await axios.post(
            import.meta.env.VITE_BACKEND_URL + "/api/orders",
            orderInformation,
            {
                headers: { Authorization: "Bearer " + token },
            }
        );

        toast.success("Order placed successfully");
        console.log("Order success:", res.data);
        setCart([]);
    } catch (err) {
        const status = err?.response?.status;
        const message =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            err?.message ||
            "Error placing order";

        console.log("Order Error Status:", status);
        console.log(JSON.stringify(err?.response?.data, null, 2));
        toast.error(message);
    }
}

	return (
		<div className="w-full min-h-[60vh] px-3 py-4 md:px-6 lg:px-10">
			<div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
				<div className="order-2 lg:order-1">
					{cart.length === 0 ? (
						<div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center shadow-lg">
							<h2 className="text-2xl font-bold text-secondary">
								Your cart is empty
							</h2>
							<p className="mt-2 text-gray-600">
								Your order may have been placed successfully. Add more products to continue shopping.
							</p>
							<Link
								to="/products"
								className="mt-5 rounded-lg bg-accent px-5 py-2 font-semibold text-white transition-all duration-300 hover:bg-secondary"
							>
								Browse Products
							</Link>
						</div>
					) : (
						<div className="flex flex-col gap-4">
							{cart.map((item, index) => (
								<div
									key={item.productId}
									className="relative flex w-full flex-col gap-3 rounded-2xl bg-primary p-4 shadow-xl sm:flex-row sm:items-center"
								>
									<img
										src={item.image}
										alt={item.name}
										className="h-[96px] w-[96px] rounded-2xl object-cover"
									/>

									<div className="min-w-0 flex-1">
										<h1 className="line-clamp-1 text-lg font-semibold text-secondary sm:text-xl">
											{item.name}
										</h1>
										<h1 className="text-sm font-semibold text-gray-600 sm:text-base">
											{item.productId}
										</h1>

										{item.labelledPrice > item.price ? (
											<div>
												<span className="mx-1 text-sm text-gray-500 line-through sm:text-base">
													{item.labelledPrice.toFixed(2)}
												</span>
												<span className="mx-1 text-sm font-bold text-accent sm:text-base">
													{item.price.toFixed(2)}
												</span>
											</div>
										) : (
											<span className="mx-1 text-sm font-bold text-accent sm:text-base">
												{item.price.toFixed(2)}
											</span>
										)}
									</div>

									<div className="flex items-center justify-between gap-3 sm:justify-end">
										<div className="flex w-[116px] items-center justify-between">
											<button
												className="rounded-xl bg-accent p-2 text-lg font-bold text-white hover:bg-secondary"
												onClick={() => changeQty(index, -1)}
											>
												<BiMinus />
											</button>

											<h1 className="text-lg font-semibold text-secondary sm:text-xl">
												{item.qty}
											</h1>

											<button
												className="rounded-xl bg-accent p-2 text-lg font-bold text-white hover:bg-secondary"
												onClick={() => changeQty(index, 1)}
											>
												<BiPlus />
											</button>
										</div>

										<div className="min-w-[120px] text-right">
											<h1 className="text-lg font-semibold text-secondary sm:text-xl">
												Rs. {(item.price * item.qty).toFixed(2)}
											</h1>
										</div>
									</div>

									<button
										className="absolute right-3 top-3 rounded-full p-2 text-red-600 hover:bg-red-600 hover:text-white"
										onClick={() => removeFromCart(index)}
									>
										<BiTrash />
									</button>
								</div>
							))}
						</div>
					)}
				</div>

				<div className="order-1 lg:order-2">
					<div className="rounded-xl bg-white p-4 shadow-2xl lg:sticky lg:top-5">
						<p className="text-2xl font-bold text-secondary">
							Total:
							<span className="mx-2 font-bold text-accent">{getTotal().toFixed(2)}</span>
						</p>

						<div className="mt-4 flex w-full flex-col gap-2">
							<input
								type="text"
								placeholder="Full Name"
								className="h-[40px] w-full rounded-lg border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-accent"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								type="email"
								placeholder="Email"
								className="h-[40px] w-full rounded-lg border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-accent"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<input
								type="text"
								placeholder="Phone Number"
								className="h-[40px] w-full rounded-lg border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-accent"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>

							<input
								type="text"
								placeholder="Address"
								className="h-[40px] w-full rounded-lg border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-accent"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>

						<button
							className="mt-5 w-full rounded-lg bg-accent px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-secondary"
							onClick={placeOrder}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}