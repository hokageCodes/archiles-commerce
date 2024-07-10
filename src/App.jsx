import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/product-listing/ProductPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/product-listing' element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
