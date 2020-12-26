import React from 'react';
import './progress.css';
import { Link } from 'react-router-dom';

let ComingSoon = () => {
    return (
        <div className="coming-soon-parent">
            <div className="progress-child">
                <h2 className="progress-heading-2">COMING SOON</h2>
                <p className="progress-text">THIS PAGE IS UNDER CONSTRUCTION</p>
                <Link to="/">
                    <button className="progress-homepage">HOMEPAGE</button>
                </Link>
            </div>
        </div>
    )
}

export default ComingSoon;