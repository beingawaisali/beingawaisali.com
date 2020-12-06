import React from 'react';
import './body.css';
import SectionComponent from './SectionComponent.jsx';
import ImageSection from './ImageSection.jsx';
import SocialMediaSection from './SocialMediaSection.jsx';


// Images
import profileImage from './Images/profile-image-1.jpg';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Route, Switch, Link } from "react-router-dom";

// Routes

import Blog from './Routes/Blog.jsx';
import Collaborate from './Routes/Collaborate.jsx';
import Contact from './Routes/Contact.jsx';
import Portfolio from './Routes/Portfolio.jsx';
import Profile from './Routes/Profile.jsx';
import Services from './Routes/Services.jsx';
import SocialMedia from './Routes/SocialMedia.jsx';
import Tools from './Routes/Tools.jsx';
import Tutorials from './Routes/Tutorials.jsx';

/* 
    Colors
    Grey : #b3d4fc;
    Sky : #f3f2ef;
    Brown: #bfabaa;
    DBrown: #413231;
    Red: #e62e3e;
    DRed: #a61e2d;
    Dred2: #9f1d29;
    Pink: #ea7884;
    Text: #222;
    Headings: #a5142d;
*/


let component1 = {
    'backgroundColor': '#dadada',
    'color': '#222'
}
let component2 = {
    'backgroundColor': '#bfabaa',
    'color': '#413231'
}
let component3 = {
    'backgroundColor': '#e62e3e',
    'color': '#a61e2d',
}
let title1 = {
    'maxWidth': '430px',
    'padding': '10px'
}
let component4 = {
    'backgroundColor': '#413231',
    'color': '#bfabaa',
}
let component5 = {
    'backgroundColor': '#b3d4fc',
    'color': '#222'
}
let component6 = {
    'backgroundColor': '#e62e3e',
    'color': '#a61e2d'
}
let component7 = {
    'backgroundColor': '#bfabaa',
    'color': '#413231'
}
let title2 = {
    'maxWidth': '430px',
    'padding': '10px',
}
let component8 = {
    'backgroundColor': '#a61e2d',
    'color': '#e62e3e'
}

let Body = () => {
    return (
        <div id="body-content">

            <Switch>

                {/* Homepage */}

                <Route exact path="/">

                    <SectionComponent
                        giveStyle={component1}
                        textColor={component1}
                        componentTop={<img src={profileImage} alt="Profile Picture" id="profile-picture" />}
                        title={"PROFILE"}
                        linkTo="/profile"
                    />

                    <SectionComponent
                        giveStyle={component2}
                        textColor={component2}
                        componentTop={<div class="lds-heart"><div></div></div>}
                        title="PORTFOLIO"
                        linkTo="/portfolio"
                    />


                    <SectionComponent
                        giveStyle={component3}
                        textColor={component3}
                        title="WELCOME I AM AWAIS ALI AND THIS IS MY ONLINE PORTFOLIO..."
                        titleStyle={title1}
                    />

                    <SectionComponent
                        giveStyle={component4}
                        textColor={component4}
                        componentTop={<FontAwesomeIcon icon={faMouse} className="mouseIcon" />}
                        title="MY TOOLS"
                        linkTo="/tools"
                    />

                    <SectionComponent
                        giveStyle={component5}
                        textColor={component5}
                        componentTop={<div className="lds-grid">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>}
                        title="COLLABORATION"
                        linkTo="/collaboration"
                    />

                    {/* Tutorials */}

                    <ImageSection
                        menuName="TUTORIALS"
                        linkTo="tutorials"
                    />

                    {/* Social Media */}

                    <SocialMediaSection linkTo="/social-media" />
                    {/* Services */}

                    <SectionComponent
                        giveStyle={component6}
                        textColor={component6}
                        componentTop={
                            <div>
                                <div className="svg-wrapper">
                                    <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                                        <rect id="shape" height="40" width="150" />
                                        <div id="text">
                                            <span className="spot"></span>
                                        </div>
                                    </svg>
                                </div>
                                <h4 id="heading-connect">Connect</h4>
                            </div>
                        }
                        title="SERVICES"
                        linkTo="/services"
                    />

                    <SectionComponent
                        giveStyle={component7}
                        textColor={component7}
                        componentTop={<FontAwesomeIcon icon={faHeart} className="heartIcon" />}
                        title="BLOG"
                        linkTo="/blog"
                    />

                    <SectionComponent
                        giveStyle={component4}
                        textColor={component4}
                        componentTop={<FontAwesomeIcon icon={faPaperPlane} className="mouseIcon" />}
                        title="CONTACT"
                        linkTo="/contact"
                    />


                    <SectionComponent
                        giveStyle={component8}
                        textColor={component8}
                        title="LET'S CONNECT AND MAKE SOMETHING AWESOME TOGETHER..."
                        titleStyle={title2}
                    />

                </Route>



                {/* Profile */}

                <Route path="/profile">
                    <Profile />
                </Route>

                {/* Blog */}
                <Route path="/blog">
                    <Blog />
                </Route>

                {/* Collaboration */}
                <Route path="/collaboration">
                    <Collaborate />
                </Route>

                {/* Contact */}
                <Route path="/contact">
                    <Contact />
                </Route>

                {/* Services */}
                <Route path="/services">
                    <Services />
                </Route>

                {/* Social Media */}
                <Route path="/social-media">
                    <SocialMedia />
                </Route>

                {/* Tools */}
                <Route path="/tools">
                    <Tools />
                </Route>

                {/* Portfolio */}
                <Route path="/portfolio">
                    <Portfolio />
                </Route>

                {/* Tutorials */}
                <Route path="/tutorials">
                    <Tutorials />
                </Route>


            </Switch>

        </div>
    )
}

export default Body;