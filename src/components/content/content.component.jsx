import React from 'react';

import "../content/content.style.css";

export const Content = ({picture, header, text, handleChange}) => (
    <div className="content-box">
        <h2 className="header-text">{header}</h2>
        
            {(typeof picture)==="string" &&
                <div className="body-content">
                    <div className="picture" id={picture}/>
                    <div className="body-text">    
                        {text}
                    </div>         
                </div>
            }
            {(typeof picture)=== "undefined" &&
                <div className="body-content">
                    <div className="body-text-100">    
                            {text}
                    </div> 
                </div>
            }
    </div>
);