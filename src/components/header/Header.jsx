import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className={styles.header}>
          <li>
            <a href="App.js" alt=''><img src="images/Logo.png" alt="" className={styles.logo} /></a>
          </li>
          <li className={styles["search-bar"]}>
            <input type="text" placeholder="Search" className={styles["search-box"]}/>
            <button className={styles["search-icon"]}>
              <SearchIcon sx={{ width:"35px", height:"15px", padding:"1px 0px"}} />
            </button>
          </li>
          <li className={styles["login-signup"]}>
            <a href="#login&signup" alt="">
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </a>
          </li>
          <li className={styles["shopping-cart-icon"]}>
            <a href="#shoppingcarticon" alt="">
              <ShoppingCartIcon sx={{ fontSize: 40 }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
