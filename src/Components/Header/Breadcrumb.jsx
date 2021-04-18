import React from 'react';
import './breadcrumb.css';
import {Link} from 'react-router-dom'

let Breadcrumb = () => {

    let style = {
        "textDecoration": "none"
    }

    return (
        <div id="breadcrumb">
            <span>
                <Link to="/" style={style}>Beingawaisali >> </Link>
            </span>
        </div>
    )

}

export default Breadcrumb;