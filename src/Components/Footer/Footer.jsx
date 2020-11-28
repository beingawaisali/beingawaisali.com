import React from 'react';
import './footer.css';

let Footer = () => {
    return (
        <div id="footer-main">

            <div id="footer-top">
                <div className="footer-section">
                    <h5>USEFULL LINKS</h5>
                    <ul className="footer-links-parent">
                        <li className="footer-links">HOME</li>
                        <li className="footer-links">PROFILE</li>
                        <li className="footer-links">PORTFOLIO</li>
                        <li className="footer-links">BLOG</li>
                        <li className="footer-links">CONTACT</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>SERVICES</h5>
                    <ul>
                        <li className="footer-links">SERVICES</li>
                        <li className="footer-links">COLLABORATION</li>
                        <li className="footer-links">TUTORIALS</li>
                        <li className="footer-links">TOOLS</li>
                        <li className="footer-links">CURICULLUM VITEA</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>SOCIAL MEDIA</h5>
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
                            <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">LINKIEDIN</a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">YOUTUBE</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="footer-bottom">
                <span>COPYRIGHT © 2020 BEINGAWAISALI</span>
            </div>

        </div>
    )
}

export default Footer;