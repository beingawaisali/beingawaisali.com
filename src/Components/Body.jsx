import React from 'react';
import './body.css';
import SectionComponent from './SectionComponent.jsx';

import profileImage from './Images/profile-image-1.jpg';

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


let component1 = {
    "backgroundColor": "#dadada",
    'color': '#222'
}
let component2 = {
    "backgroundColor": "#bfabaa"
}

let Body = () => {
    return (
        <div id="body-content">
            <SectionComponent 
                giveStyle={component1}
                componentTop={ <img src={profileImage} alt="Profile Picture" id="profile-picture"/> }
                title={ "Profile" }
            />
            <SectionComponent giveStyle={component2}/>
            <SectionComponent />
            <SectionComponent />
            <SectionComponent />
        </div>
    )
}

export default Body;