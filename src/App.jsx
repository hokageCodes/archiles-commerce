import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/product-listing/ProductPage';
import Cart from './pages/cart/Cartpage';
import CheckoutPage from './pages/checkout/CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-listing' element={<ProductPage />} />
        <Route path='/cart' element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
