import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import ProductCard from './components/productCard';
import LoginPage from './pages/login';
import SignUp from './pages/signup';
import HomePage from './pages/home';
import AdminPage from './pages/adminPage';

function App() {
  

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes path="/*">
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
