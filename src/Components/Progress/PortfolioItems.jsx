import React from 'react';
import '../Routes/portfolio.css';

let PortfolioItems = (props) => {
    return (
        <div className="portfolio-item">
            <div className="portfolio-item-image-div">
                <img src={props.portfolioImage} className="portfolio-item-image" />
                <div className="shadow-over-images"></div>
            </div>
            <a href={props.projectLink} target="_blank" rel={props.isDofollow}>
                <h3>{props.portfolioItemName}</h3>
            </a>
        </div>
    )
}

export default PortfolioItems;