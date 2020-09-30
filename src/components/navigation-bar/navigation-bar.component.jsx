import React from 'react';

import "../navigation-bar/navigation-bar.style.css";

export const NavigationBar = ({props, handleChange}) => (
    <div className="navigation-bar">
        {   props.map(element=>(
        <a href={element} className="navigation-bar-link">
            {element}
        </a>))
        }
    </div>
);