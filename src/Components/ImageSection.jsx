import React from 'react';
import './section-components.css';
import Tutorials from './Routes/Tutorials';

let ImageSection = (props) => {
    return (
        <div className="image-section-parent">

            <div className="image-section">
                <h4 className="componentTitle" id="image-section-text">{props.menuName}</h4>
            </div>

        </div>
    )
}

export default ImageSection;