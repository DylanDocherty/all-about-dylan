import React from 'react';
import { Content } from '../content/content.component';

import "../my-work/my-work.style.css"

export const MyWork = ({props, handleChange}) => (
    <div>
        
    <div id="main-content">

    <Content id="my-work" picture="" 
    header="What work have I done?"
    text="
    I have worked in a factory for 2 months called FlexxingGate.
    I have also worked on 3 video game projects. 
    Shown in the videos below.
    I have also designed some other websites:
    "/> 
    <a href="https://sites.google.com/site/dylandochertygr12/">My grade 12 website, a google site from 2016.  This website links to website from grade 11 and 10.</a>

    <div className="videos">
      <div className="videos-row">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V363XHUA-lA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EIj8nA8f9b8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
      </div>
      <div className="videos-row">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pz0_LV9Nl2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FYBOPJRF7YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
      </div>
    </div>
    
    </div>
  </div>
);