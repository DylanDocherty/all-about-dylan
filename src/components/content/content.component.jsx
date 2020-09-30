import React from 'react';

import "../content/content.style.css";

export const Content = ({picture, header, text, handleChange}) => (
    <div className="content-box">
        <h2 className="header-text">{header}</h2>
        <div className="body-content">
            <div className="picture" id={picture}/>
            <div className="body-text">    
                {text}
            </div> 
        </div>
        
    </div>
);