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
    'backgroundColor': '#bfabaa'
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
            
            <SectionComponent 
                giveStyle={component1}
                componentTop={ <img src={profileImage} alt="Profile Picture" id="profile-picture"/> }
                title={ "PROFILE" }
            />

            <SectionComponent 
                giveStyle={component2}
                componentTop={ <div class="lds-heart"><div></div></div>}
                title="PORTFOLIO"
            />
            
            <SectionComponent
                giveStyle={component3}
                title="WELCOME I AM AWAIS ALI AND THIS IS MY ONLINE PORTFOLIO..."
                titleStyle={title1}
            />
            
            <SectionComponent 
                giveStyle={component4}
                componentTop={ <FontAwesomeIcon icon={faMouse} className="mouseIcon"/> }
                title="MY TOOLS"
            />

            <SectionComponent 
                giveStyle={component5}
                componentTop={ <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> }
                
                title="COLLABORATION"
            />

            {/* Tutorials */}

            <ImageSection
                menuName="TUTORIALS"
            />

            {/* Social Media */}

            <SocialMediaSection />

            {/* Services */}

            <SectionComponent
                giveStyle={component6}
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
            />

            <SectionComponent
                giveStyle={component7}
                componentTop={ <FontAwesomeIcon icon={faHeart} className="heartIcon"/> }
                title="BLOG"
            />

            <SectionComponent
                giveStyle={component4}
                componentTop={ <FontAwesomeIcon icon={faPaperPlane} className="mouseIcon"/> }
                title="CONTACT"
            />

            <SectionComponent
                giveStyle={component8}
                title="LET'S CONNECT AND MAKE SOMETHING AWESOME TOGETHER..."
                titleStyle={title2}
            />
            
        </div>
    )
}

export default Body;