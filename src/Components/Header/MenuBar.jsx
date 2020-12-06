import React from 'react';
import './menubar.css';
import { Link } from "react-router-dom";

let MenuBar = (props) => {
    return (
        <div id="menulist-parent">
            <div id="menulist">
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/">Home</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/profile">Profile</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/portfolio">Portfolio</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/tools">Tools</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/collaboration">Collaboration</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/blog">Blog</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/contact">Contact</Link>
                </p>
            </div>
        </div>
    )
}

export default MenuBar;