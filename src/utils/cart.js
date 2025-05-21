export function getCart() {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    
    if (cart == null) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    } 
    return cart
}

export function removeFromCart(productId){
    let cart = getCart();

    const newCart = cart.filter(
        (item)=>{
            return item.productId !== productId;
        }
    )
}

export function addToCart(produuctId, qty){
    let cart = getCart();

    let index = cart.find((item) => {
        return item.productId === produuctId;
    });

    if(index == -1){
        cart[cart.length] = {
            productId : product.productId,
            name : product.name,
            image : product.images[0],
            price : product.price,
            labelledPrice : product.labelledPrice,
            qty : qty
        }
    }else{
        const newQty = cart[index].qty + qty;
        if(newQty<=0){
            removeFromCart(productId);
            return;
        }else{
            cart[index].qty = newQty;
        }

    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

