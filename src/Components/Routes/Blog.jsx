import React from 'react';
import './blog.css';
import './page-layout.css';
import ComingSoon from '../Progress/ComingSoon.jsx';
import { Helmet } from 'react-helmet';

let Blog = () => {
    return (
        <div className="pages-layout">
            
            <Helmet>
                <title>BeingAwaisAli - Blog</title>
            </Helmet>

            <h3 className="page-heading">Blog</h3>
            <div className="pages-layout-inner">
                <h1 className="page-headings">Hey, This is my Blog page.</h1>
                {/* <p className="page-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas obcaecati nobis iste quos deserunt eum similique corrupti alias quidem. Repellendus dolorum qui necessitatibus cum, aliquam corporis sunt aspernatur distinctio?</p>
                <h2 className="page-headings">This is Heading 2.</h2>
                <p className="page-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error eaque, sequi odit itaque in dicta, excepturi eveniet adipisci obcaecati repellendus, vel illum minus voluptatum libero ipsa laboriosam ipsam et enim vero! Dolor, minus quibusdam!</p> */}
                <ComingSoon />
            </div>
        </div>
    )
}

export default Blog;