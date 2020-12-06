import React from 'react';
import './menubar.css';
import { Link } from "react-router-dom";

let MenuBar = () => {
    return (
        <div id="menulist-parent">
            <div id="menulist">
                <p className="menu-items">
                    <Link to="/">Home</Link>
                </p>
                <p className="menu-items">
                    <Link to="/profile">Profile</Link>
                </p>
                <p className="menu-items">
                    <Link to="/portfolio">Portfolio</Link>
                </p>
                <p className="menu-items">
                    <Link to="/tools">Tools</Link>
                </p>
                <p className="menu-items">
                    <Link to="/collaboration">Collaboration</Link>
                </p>
                <p className="menu-items">
                    <Link to="/blog">Blog</Link>
                </p>
                <p className="menu-items">
                    <Link to="/contact">Contact</Link>
                </p>
            </div>
        </div>
    )
}

export default MenuBar;