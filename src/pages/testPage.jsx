import { useState } from "react"

export default function TestPage() {

    const [count,setCount] = useState(0) 
    //a - variable
    //b - setter function
    // 2 things done by the setters
        //1.the variable related to the setter will change
        //2.the export function will run again after count changes except the hooks(useEffect)
    
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[450px] h-[250px] shadow flex justify-center items-center">
                <button onClick={
                    ()=>{
                        setCount(count-1) 
                    }
                } className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    -
                </button>
                <span className="text-[30px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex justify-center items-center">
                    {count}
                </span>
                <button onClick={
                    ()=>{
                        setCount(count+1)
                    }
                } className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">
                    +
                </button>
            </div>

        </div>
    )
}