import React from 'react';
import './social-media-section.css';
import { Link } from 'react-router-dom';

let SocialMediaSection = (props) => {

    return (
        <div id="social-media-section-parent">
            <Link to={props.linkTo} className="linkStyle" style={{color: '#e62e3e'}}>
                <h4 className="componentTitle">SOCIAL MEDIA</h4>
            </Link>
            <div className="social-media-section-container">
                    <a href="https://github.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-media-section-icons fab fa-github"></i>
                    </a>
                    <a href="https://facebook.com/beingawaisali.page" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-media-section-icons fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/beingawaisali/" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-media-section-icons fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-media-section-icons fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-media-section-icons fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCd5MrYwaqO_a_C28Bby-pPg/videos?view_as=subscriber" rel="nofollow" target="_blank">
                        <i className="social-media-section-icons fab fa-youtube"></i>
                    </a>
            </div>
        </div>
    )

}

export default SocialMediaSection;