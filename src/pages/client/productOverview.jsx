import { useParams } from "react-router-dom"

export default function ProductOverviewPage() {
    const params = useParams() //this hook will give the parameters in the url
    const productId = params.id
    const [status, setStatus] = useState("loading")
    const [product, setProduct] = useState(null)
    
    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then(
                (response)=>{
                    console.log(response.data)
                    setProduct(response.data)
                    setStatus("success")
                }
            ).catch(
                (error)=>{
                    console.log(error)
                    setStatus("error")
                    toast.error("Error fetching product data")
                }
            )
        }
        
    ,[])
    return(
        <div  className="bg-primary">
            <h1>Overview</h1>
        </div>
    )
}