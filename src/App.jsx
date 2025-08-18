import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import CartPage from './pages/client/cart'
import CheckoutPage from './pages/client/checkOut'
import ProductPage from './pages/client/productPage'
import SearchProductsPage from './pages/client/searchProducts'
import ProductOverviewPage from './pages/client/productOverview'
import AboutPage from './pages/client/about'
import Footer from './components/footer'
import ContactPage from './pages/contact'

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";
  const hideHeaderFooter2 = location.pathname === "/register";

  return (
    <div>
      <Toaster position='top-right'/>
      {!hideHeaderFooter && !hideHeaderFooter2 && <Header />}
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/forget" element={<ForgetPasswordPage/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
        <Route path="/testing" element={<TestPage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/overview/:id" element={<ProductOverviewPage />} />
        <Route path="/search" element={<SearchProductsPage />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      {!hideHeaderFooter && !hideHeaderFooter2 && <Footer />}
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId="37337765557-5qck0erqtvg70n7fuldt6t82ovtvgrfo.apps.googleusercontent.com">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App