import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import myCV from '../Files/Awais Ali.pdf';

let Footer = () => {
    return (
        <div id="footer-main">

            <div id="footer-top">
                
                <div className="footer-section">
                    <h4 className="footer-section-heading">USEFULL LINKS</h4>
                    <ul className="footer-links-parent">
                        <li className="footer-links">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/profile">PROFILE</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5 className="footer-section-heading">SERVICES</h5>
                    <ul>
                        <li className="footer-links">
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="collaboration">COLLABORATION</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="tutorials">TUTORIALS</Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/tools">TOOLS</Link>
                        </li>
                        <li className="footer-links">
                            <a href={myCV} download className="cv">CURICULLUM VITAE</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h6 className="footer-section-heading">SOCIAL MEDIA</h6>
                    <ul>
                        <li className="footer-links">
                            <a href="https://github.com/beingawaisali" rel="nofollow noreffer noopener" target="_blank">GITHUB</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://web.facebook.com/beingawaisali.page" rel="nofollow noreffer noopener" target="_blank">FACEBOOK</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.instagram.com/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">INSTAGRAM</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://twitter.com/beingawaisali" rel="nofollow noreffer noopener" target="_blank">TWITTER</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">LINKEDIN</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.youtube.com/channel/UCd5MrYwaqO_a_C28Bby-pPg/videos?view_as=subscriber" rel="nofollow noreffer noopener" target="_blank">YOUTUBE</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div id="footer-bottom">
                <span>COPYRIGHT © 2020-2021 BEINGAWAISALI</span>
            </div>

        </div>
    )
}

export default Footer;