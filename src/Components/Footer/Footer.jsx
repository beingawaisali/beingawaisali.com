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
                            <Link to="/">
                                <i class="footer-icons-1 fas fa-home"></i> HOME
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/profile">
                                <i class="footer-icons-1 fas fa-user"></i> PROFILE
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/portfolio">
                                <i class="footer-icons-1 fas fa-project-diagram"></i> PORTFOLIO
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/blog">
                            <i class="footer-icons-1 fas fa-blog"></i> BLOG
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/contact">
                                <i class="footer-icons-1 fas fa-phone-alt"></i> CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5 className="footer-section-heading">SERVICES</h5>
                    <ul>
                        <li className="footer-links">
                            <Link to="/services">
                                <i class="footer-icons fas fa-archive"></i> SERVICES
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="collaboration">
                                <i class="footer-icons fas fa-user-friends"></i> COLLABORATION
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="tutorials">
                                <i class="footer-icons fas fa-laptop-code"></i> TUTORIALS
                            </Link>
                        </li>
                        <li className="footer-links">
                            <Link to="/tools">
                                <i class="footer-icons fas fa-tools"></i> TOOLS
                            </Link>
                        </li>
                        <li className="footer-links">
                            <a href={myCV} download className="cv">
                                <i class="footer-icons fas fa-book"></i> CURICULLUM VITAE
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h6 className="footer-section-heading">SOCIAL MEDIA</h6>
                    <ul>
                        <li className="footer-links">
                            <a href="https://github.com/beingawaisali" rel="nofollow noreffer noopener" target="_blank">
                            <i class="footer-icons fab fa-github"></i> GITHUB
                            </a>
                        </li>
                        <li className="footer-links">
                            <a href="https://web.facebook.com/beingawaisali.page" rel="nofollow noreffer noopener" target="_blank">
                                <i class="footer-icons fab fa-facebook"></i> FACEBOOK
                            </a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.instagram.com/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">
                                <i class="footer-icons fab fa-instagram"></i> INSTAGRAM
                            </a>
                        </li>
                        <li className="footer-links">
                            <a href="https://twitter.com/beingawaisali" rel="nofollow noreffer noopener" target="_blank">
                            <i class="footer-icons fab fa-twitter"></i> TWITTER
                            </a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noreffer noopener" target="_blank">
                                <i class="footer-icons fab fa-linkedin-in"></i> LINKEDIN
                            </a>
                        </li>
                        <li className="footer-links">
                            <a href="https://www.youtube.com/channel/UCd5MrYwaqO_a_C28Bby-pPg/videos?view_as=subscriber" rel="nofollow noreffer noopener" target="_blank">
                                <i class="footer-icons fab fa-youtube"></i> YOUTUBE
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div id="footer-bottom">
                <span>COPYRIGHT © 2021 BEINGAWAISALI</span>
            </div>

        </div>
    )
}

export default Footer;