import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
	const location = useLocation();
	console.log(location.state?.cart);

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

		// ✅ Validate inputs
		if (!name || !email || !phoneNumber || !address) {
			toast.error("Please fill all fields");
			return;
		}

		const orderInformation = {
			name: name,
			email: email,
			phone: phoneNumber,
			address: address,
			products: cart.map((item) => ({
				productId: item.productId,
				qty: item.qty,
			})),
		};

		console.log("Sending order:", orderInformation);

		try {
			const res = await axios.post(
				import.meta.env.VITE_BACKEND_URL + "/api/orders",
				orderInformation,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);

			toast.success("Order placed successfully");
			console.log(res.data);

			// ✅ Optional: clear cart after order
			setCart([]);
		} catch (err) {
			console.log("Order Error:", err.response?.data || err.message);
			toast.error("Error placing order");
		}
	}

	return (
		<div className="w-full h-full flex flex-col items-center pt-4 relative">
			{/* Summary Box */}
			<div className="w-[400px] shadow-2xl absolute top-1 right-1 flex flex-col justify-center items-center p-4 gap-6 bg-white rounded-xl">
				<p className="text-2xl text-secondary font-bold">
					Total:
					<span className="text-accent font-bold mx-2">
						{getTotal().toFixed(2)}
					</span>
				</p>

				{/* ✅ Updated Inputs */}
				<div className="w-full flex flex-col gap-2">
					<input
						type="text"
						placeholder="Full Name"
						className="w-full h-[40px] px-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<input
						type="email"
						placeholder="Email"
						className="w-full h-[40px] px-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="text"
						placeholder="Phone Number"
						className="w-full h-[40px] px-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>

					<input
						type="text"
						placeholder="Address"
						className="w-full h-[40px] px-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>

				<button
					className="text-white bg-accent px-4 py-2 rounded-lg font-bold hover:bg-secondary transition-all duration-300"
					onClick={placeOrder}
				>
					Place Order
				</button>
			</div>

			{/* Cart Items */}
			{cart.map((item, index) => (
				<div
					key={item.productId}
					className="w-[600px] my-4 h-[100px] rounded-tl-3xl rounded-bl-3xl bg-primary shadow-2xl flex flex-row relative justify-center items-center"
				>
					<img
						src={item.image}
						className="w-[100px] h-[100px] object-cover rounded-3xl"
					/>

					<div className="w-[250px] h-full flex flex-col justify-center items-start pl-4">
						<h1 className="text-xl text-secondary font-semibold">
							{item.name}
						</h1>
						<h1 className="text-md text-gray-600 font-semibold">
							{item.productId}
						</h1>

						{item.labelledPrice > item.price ? (
							<div>
								<span className="text-md mx-1 text-gray-500 line-through">
									{item.labelledPrice.toFixed(2)}
								</span>
								<span className="text-md mx-1 font-bold text-accent">
									{item.price.toFixed(2)}
								</span>
							</div>
						) : (
							<span className="text-md mx-1 font-bold text-accent">
								{item.price.toFixed(2)}
							</span>
						)}
					</div>

					{/* Quantity Controls */}
					<div className="max-w-[100px] w-[100px] h-full flex flex-row justify-evenly items-center">
						<button
							className="text-white font-bold rounded-xl hover:bg-secondary p-2 text-xl bg-accent"
							onClick={() => changeQty(index, -1)}
						>
							<BiMinus />
						</button>

						<h1 className="text-xl text-secondary font-semibold">
							{item.qty}
						</h1>

						<button
							className="text-white font-bold rounded-xl hover:bg-secondary p-2 text-xl bg-accent"
							onClick={() => changeQty(index, 1)}
						>
							<BiPlus />
						</button>
					</div>

					{/* Item Total */}
					<div className="w-[200px] h-full flex flex-col justify-center items-end pr-4">
						<h1 className="text-2xl text-secondary font-semibold">
							Rs. {(item.price * item.qty).toFixed(2)}
						</h1>
					</div>

					{/* Remove Button */}
					<button
						className="absolute text-red-600 hover:bg-red-600 hover:text-white rounded-full p-2 right-[-35px]"
						onClick={() => removeFromCart(index)}
					>
						<BiTrash />
					</button>
				</div>
			))}
		</div>
	);
}