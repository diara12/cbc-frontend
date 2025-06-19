
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from './pages/client/forgetPassword'


function App() {
 

  return (
    <GoogleOAuthProvider clientId="37337765557-5qck0erqtvg70n7fuldt6t82ovtvgrfo.apps.googleusercontent.com">
    <BrowserRouter>
      <div >
        <Toaster position='top-right'/>
        {/* <Header/> */}
        <Routes path="/*">
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/forget" element={<ForgetPasswordPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="/testing" element={<TestPage/>}/>
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
   </GoogleOAuthProvider>
  )
}

export default App

//https://wjeicergssfvccmntyen.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZWljZXJnc3NmdmNjbW50eWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MjM0MzgsImV4cCI6MjA2MjE5OTQzOH0.S4GlBCY9NiWso6--uykND-1MEz56gMa7rnoWHM9UdDQ