import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="header">
          <li>
            <img src="images/Logo.png" alt="" className="logo" />
          </li>
          <li className="search-bar">
            <input type="text" placeholder="Search" className="search-box"/>
            <button className="search-icon">
              <SearchIcon sx={{ width:"14px", height:"15px", padding:"1px 0px"}} />
            </button>
          </li>
          <li className="login-signup">
            <a href="#login&signup" alt="">
              <AccountCircleIcon />
            </a>
          </li>
          <li className="shopping-cart-icon">
            <a href="#shoppingcarticon" alt="">
              <ShoppingCartIcon sx={{ color: "red" }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
