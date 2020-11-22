import React from 'react';
import './body.css';
import SectionComponent from './SectionComponent.jsx';

// Images
import profileImage from './Images/profile-image-1.jpg';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMouse } from '@fortawesome/free-solid-svg-icons';

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
    Brown2 : #bfabaa;
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
                componentTop={ <FontAwesomeIcon icon={faHeart} className="heartIcon"/> }
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
                title="My Tools"
            />
            {/* Add Other Menus */}
            <SectionComponent />

            <SectionComponent />

            <SectionComponent />

            <SectionComponent />

            <SectionComponent />

            <SectionComponent />
        
        </div>
    )
}

export default Body;