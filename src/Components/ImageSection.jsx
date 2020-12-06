import React from 'react';
import './section-components.css';
import Tutorials from './Routes/Tutorials';
import { Link } from 'react-router-dom';

let ImageSection = (props) => {
    return (
        <div className="image-section-parent">

            <div className="image-section">
                <Link to={props.linkTo} className="linkStyle" style={{fontSize: '1em'}}>
                    <h4 className="componentTitle" id="image-section-text"  style={{fontSize: '1.5em'}}>{props.menuName}</h4>
                </Link>
            </div>

        </div>
    )
}

export default ImageSection;