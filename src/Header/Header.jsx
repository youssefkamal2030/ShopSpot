import React, { createContext, useContext, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { CartContext, UserContext, QueryContext } from "../AppProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { user, loginUser, logoutUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const { query, setQuery } = useContext(QueryContext); 

  const handleQueryChange = (event) => {
    setQuery(event.target.value); 
    navigate(`/SearchResults`);
  };

  const handleAuthentication = () => {
    if (user && user.loggedIn) {
      navigate('/Profile/AccountPage');
    } else {
      navigate('/login');
    }
  };
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="/images/logo.png"
          alt="Our Logo"
        />
      </Link>

      <div className="header__search">
        <input onClick={handleQueryChange} className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {user ? user.username : null}</span>
          <span className="header__optionLineTwo">{user ? 'Profile' : 'Sign In'}</span>
        </div>

        <Link to="/returns-orders">
          <div className="header__option">
            <span className="header__optionLineTwo">Orders history</span>
          </div>
        </Link>
        <Link to="/ProductListng/CategoryPage">
          <div className="header__option">
            <span className="header__optionLineOne">Categories</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {totalItems}
            </span>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Header;
