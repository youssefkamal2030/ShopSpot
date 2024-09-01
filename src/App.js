import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Header from './Header';
import Login from './Login';
import Slider from './Slider';
import ProductDetails from './ProductDetails/ProductDetails';
import { CartProvider } from './CartContext';
import Cart from './Cart';
function App() {
  return (
    <div className="app">
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Home />
                </>
              }
            />
          </Routes>
       
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
