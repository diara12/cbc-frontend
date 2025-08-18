import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { GrGoogle } from "react-icons/gr"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const googleLogin  = useGoogleLogin({
        onSuccess: (response)=>{
            const accessToken = response.access_token
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login/google", {
                accessToken: accessToken
            }).then((response)=>{
                toast.success("Login Successful")
                const token = response.data.token
                localStorage.setItem("token", token)
                if(response.data.role === "admin"){
                    navigate("/admin/")
                }
                else{
                    navigate("/")
                }
            })
        }
    })

    async function handleLogin(){
        try{
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login" , {
                email:email,
                password:password
            })
            toast.success("Login Successful")
            localStorage.setItem("token",response.data.token)

            if(response.data.role === "admin"){
                navigate("/admin/")
            }else{
                navigate("/")
            }
        }catch(e){
            toast.error(e.response?.data?.message || "Login failed")
        }
    }

    return(
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex  justify-evenly items-center">
          
          {/* Left side with logo */}
          <div className="w-[50%] h-full flex justify-center items-center">
            <img src="/login_pic.png" alt="Brand Logo" className="max-h-[80vh] w-auto ml-150" />
          </div>

          {/* Right side login form */}
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[500px] h-[500px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                
                <input 
                    placeholder="Enter your email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    className="w-[300px] h-[50px] px-4 border border-[#e0b0b0] rounded-[20px] my-[20px] focus:outline-none focus:ring-2 focus:ring-[#e0b0b0]" 
                />
                
                <input 
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    className="w-[300px] h-[50px] px-4 border border-[#e0b0b0] rounded-[20px] mb-[20px] focus:outline-none focus:ring-2 focus:ring-[#e0b0b0]" 
                />
                
                <button 
                    onClick={handleLogin}  
                    className="w-[300px] cursor-pointer h-[50px] bg-[#e0b0b0] rounded-[20px] my-[20px] text-[20px] font-bold text-white hover:bg-[#d89a9a] transition"
                >
                    Login
                </button>
                
                <button 
                    onClick={googleLogin} 
                    className="w-[300px] cursor-pointer h-[50px] flex justify-center items-center gap-3 bg-[#e0b0b0] rounded-[20px] my-[20px] text-[20px] font-bold text-white hover:bg-[#d89a9a] transition" 
                >
                    <GrGoogle className="text-xl text-white" />
                    <span>Login with Google</span>
                </button>
            </div>
          </div>
        </div>
    )
}
