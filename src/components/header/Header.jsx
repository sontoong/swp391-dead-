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
            <img src="images/Logo.png" alt="" className={styles.logo} />
          </li>
          <li className={styles["search-bar"]}>
            <input type="text" placeholder="Search" className={styles["search-box"]}/>
            <button className={styles["search-icon"]}>
              <SearchIcon sx={{ width:"14px", height:"15px", padding:"1px 0px"}} />
            </button>
          </li>
          <li className={styles["login-signup"]}>
            <a href="#login&signup" alt="">
              <AccountCircleIcon />
            </a>
          </li>
          <li className={styles["shopping-cart-icon"]}>
            <a href="#shoppingcarticon" alt="">
              <ShoppingCartIcon sx={{ color: "white" }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
