import React from 'react';
import './menubar.css';
import { Link } from "react-router-dom";

let MenuBar = (props) => {

    let style = {
        'color': 'black'
    }

    return (
        <div id="menulist-parent">
            <div id="menulist">
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/" style={style}>Home</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/profile" style={style}>Profile</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/portfolio" style={style}>Portfolio</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/tools" style={style}>Tools</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/collaboration" style={style}>Collaboration</Link>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    {/* <Link to="/blog" style={style}>Blog</Link> */}
                    <a href="http://blogs.beingawaisali.com/" target="_blank" rel="noopener" style={style}>Blogs</a>
                </p>
                <p className="menu-items" onClick={props.hideMenuOnClick}>
                    <Link to="/contact" style={style}>Contact</Link>
                </p>
            </div>
        </div>
    )
}

export default MenuBar;