import React from "react";
import styles from './Menu.module.css'

const Menu = () =>{
    return(
        <div>
            <nav>
                <ul className={styles.menu}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#categories'>Categories</a></li>
                    <li><a href='#foodbybird'>Food by Bird</a></li>
                    <li><a href='#blog'>Blog</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;