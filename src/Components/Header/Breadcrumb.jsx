import React from 'react';
import './breadcrumb.css';
import {Link} from 'react-router-dom';

let Breadcrumb = (props) => {

    let style = {
        "textDecoration": "none"
    }

    return (
        <div id="breadcrumb">
            <span>
                <Link to="/" style={style}>Beingawaisali >> </Link>
            </span>
            <span>
                {props.pageName}
            </span>
        </div>
    )

}

export default Breadcrumb;