import "./productCard.css";

export default function ProductCard(props){
    return(
        <div className="card">
            <img className="productImage" src="https://picsum.photos/id/1/200/300"/>
            <h1>Gaming Laptop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Price: $999</p>
            <button className="addToCart">Add to Cart</button>
            <button className="buyNow">Buy Now</button>
        </div>
    )
}