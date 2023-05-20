import React from "react";
import './Menu.css'

const Menu = () =>{
    return(
        <div>
            <nav>
                <ul className="menu">
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a href='#categories'>Categories</a></li>
                    <li><a href='#foodbybird'>Food by Bird</a></li>
                    <li><a href='#blog'>Blog</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;