async function placeOrder() {
	const token = localStorage.getItem("token");
	if (!token) {
		toast.error("Please login to place order");
		return;
	}

	const orderInformation = {
		phone: phoneNumber,
		address: address,
		products: cart.map(item => ({
			productId: item.productId,
			quantity: item.qty
		}))
	};

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
	} catch (err) {
		console.error(err);
		toast.error("Error placing order");
	}
}
