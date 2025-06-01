import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/adminPage'
import RegisterPage from './pages/register'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <BrowserRouter>
      <div >
        <Toaster position='top-right'/>
        {/* <Header/> */}
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>   
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/testing' element={<TestPage/>}/>
          <Route path='/*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App

//https://wjeicergssfvccmntyen.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZWljZXJnc3NmdmNjbW50eWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjM0MzgsImV4cCI6MjA2MjE5OTQzOH0.S4GlBCY9NiWso6--uykND-1MEz56gMa7rnoWHM9UdDQ