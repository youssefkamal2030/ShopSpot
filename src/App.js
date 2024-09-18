import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Header from './Header/Header';
import Login from './login/Login';
import Slider from './ProductListng/Slider';
import ProductDetails from './ProductDetails/ProductDetails';
import Cart from './Cart/Cart';
import Checkout from './CheckOut/Checkout';
import RegistrationForm from './login/RegistrationForm';
import CategoryPage from './ProductListng/CategoryPage';
import Footer from './footer/Footer';
import AccountPage from './ProfilePage/AccountPage'
import { AppProvider } from './AppProvider';
import AddAddressPage from './ProfilePage/AddAddressPage';
import CardInputForm from './ProfilePage/CardInputform';
import InstallmentPage from './ProfilePage/InstallmentPage';
import SearchResults from './SearchResults';
function App() {
  return (

    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
}
function AppRoutes() {
  const location = useLocation();
  const routesWithoutHeader = ['/login', '/login/RegistrationForm'];
  const showHeader = !routesWithoutHeader.includes(location.pathname);

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/ProductListng/CategoryPage" element={<CategoryPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Profile/AccountPage" element={<AccountPage />} />
        <Route path="/Profile/AddAddressPage" element={<AddAddressPage />} />
        <Route path="/Profile/CardInputform" element={<CardInputForm />} />
        
        <Route path="/Profile/InstallmentPage" element={<InstallmentPage />} />
        <Route path="/SearchResults" element={<SearchResults />} />
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
      <Footer />

    </div>
  );
}

export default App;
