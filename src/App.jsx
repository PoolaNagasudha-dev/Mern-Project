import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage'; // ✅ Add CartPage
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ✅ Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Cart route added */}
        <Route
          path="*"
          element={<div className="p-6 text-center text-xl">404 - Page Not Found</div>}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
