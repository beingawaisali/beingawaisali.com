import React from 'react';
import './progress.css';
import { Link } from 'react-router-dom';

let NotFound = () => {
    return (
        <div className="progress-parent">

            <div className="progress-child">
                <h2 className="progress-heading-2">404</h2>
                <h3 className="progress-heading-3">PAGE NOT FOUND</h3>
                <p className="progress-text">THIS PAGE MIGHT BE REMOVED OR THE ADDRESS IS INCORRECT.</p>
                <Link to="/">
                    <button className="progress-homepage">HOMEPAGE</button>
                </Link>
            </div>

        </div>
    )
}

export default NotFound;