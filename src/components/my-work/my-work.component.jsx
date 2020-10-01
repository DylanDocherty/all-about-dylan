import React from 'react';
import { Content } from '../content/content.component';



export const MyWork = ({props, handleChange}) => (
    <div>
        
    <div id="main-content">

    <Content id="about-me" picture="destinyVaporWaveBackGround" 
    header="Who is Dylan Docherty?"
    text="
    I have worked in a factory for 2 months called FlexxingGate.
    I have also worked on 3 video game projects. 
    Shown in the videos below.
    I have also designed some other websites:
    "/> 
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/V363XHUA-lA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
  </div>
);