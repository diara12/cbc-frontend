export function getCart() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    } 
    return cart
}

export function addToCart(produuctId, qty){
    let cart = getCart();
    let product = cart.find((item) => item.productId === produuctId);
    if (product) {
        product.qty += qty;
    } else {
        cart.push({ productId: produuctId, qty: qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}