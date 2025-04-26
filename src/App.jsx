import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <div className='w-full h-screen bg-red-100 flex flex-col justify-center items-center'> 
      <div className =' relative w-[650px] h-[650px] bg-red-900 flex flex-col justify-center items-center'>
        <div className ='w-[600px] h-[600px] bg-amber-100 flex flex-col justify-center items-center'>
          <div className='w-[100px] h-[100px] bg-blue-600 absolute top-[0px] left-[0px]'></div>   {/* fixed will cause that div to move where are we want*/}
          <div className='w-[100px] h-[100px] bg-yellow-600'></div>
          <div className='w-[100px] h-[100px] bg-green-600'></div>
          <div className='w-[100px] h-[100px] bg-purple-600'></div>
        </div>
      </div>
      
    </div>
  )
}

export default App
