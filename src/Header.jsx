import React, { useContext, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart/CartContext"; 

function Header() {
  const { cart } = useContext(CartContext);
  const [user, setUser] = useState(null); 

  const handleAuthentication = () => {
    if (user) {
      setUser(null); 
    } else {
      window.location.href = "/login"; 
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="/images/logo.png"
          alt="Our Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>

        <Link to="/returns-orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/prime">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
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
  );
}

export default Header;
