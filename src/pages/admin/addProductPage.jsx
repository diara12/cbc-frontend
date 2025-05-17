export default function AddProductPage() {

    const [productId, setProductId] = useState('')
    const [name, setName] = useState('')
    const [altNames, setAltNames] = useState('')
    const [labelledPrice, setLabelledPrice] = useState('')
    const [images, setImages] = useState([])
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="text" placeholder="Alt Names" value={altNames} onChange={(e) => setAltNames(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="text" placeholder="Labelled Price" value={labelledPrice} onChange={(e) => setLabelledPrice(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="file" placeholder="Images" multiple value={images} onChange={(e) => setImages(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />
            <input type="text" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} className="border-2 border-gray-300 rounded p-2 m-2 w-[300px]" />

        </div>
    )
}