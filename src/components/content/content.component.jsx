import React from 'react';

import "../content/content.style.css";

export const Content = ({picture, pictureText, pictureStyle, picturePos, header, text, handleChange}) => (
    <div className="content-box">
        {(typeof header)==="string" &&
            <h2 className="header-text">{header}</h2>
        }
        
        
            {(typeof picture)==="string" && picturePos === "left" &&
                <div className="body-content">
                    {/* <div className="picture" id={picture}/> */}
                    <img src={picture} alt={pictureText} id={pictureStyle}/>
                    <div className="body-text">    
                        {text}
                    </div>         
                </div>
            }
            {(typeof picture)==="string" && picturePos === "right" &&
                <div className="body-content">
                    {/* <div className="picture" id={picture}/> */}
                    <div className="body-text">    
                        {text}
                    </div>         
                    <img src={picture} alt={pictureText} id={pictureStyle}/>
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