import React from 'react';
import './section-components.css';
import { Link } from 'react-router-dom';

let linkStyle = {
    'textDecoration': 'none',
    'color': ''
}

let SectionComponent = (props) => {
    return (
        <div style={props.giveStyle} id="section-1">

            <div className="component-section-top">
            {
                props.componentTop
            }
            </div>

            <div className="component-section-lower">
                <Link to={props.linkTo} style={props.textColor} className="linkStyle"> 
                    <h4 className="componentTitle" style={props.titleStyle}>{props.title}</h4>
                </Link>
            </div>

        </div>
    )
}

export default SectionComponent;