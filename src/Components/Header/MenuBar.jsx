import React from 'react';
import './menubar.css';


let MenuBar = () => {
    return (
        <div id="menulist-parent">
            <div id="menulist">
                <p className="menu-items">Home</p>
                <p className="menu-items">Profile</p>
                <p className="menu-items">Portfolio</p>
                <p className="menu-items">Products</p>
                <p className="menu-items">Collaboration</p>
                <p className="menu-items">Blog</p>
                <p className="menu-items">Contact</p>
            </div>
        </div>
    )
}

export default MenuBar;