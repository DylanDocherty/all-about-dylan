import React from 'react';
import { Content } from './components/content/content.component';

import "../.css";


export const MyWork = ({props, handleChange}) => (
    <div>
        
    <div id="main-content">

    <Content id="about-me" picture="destinyVaporWaveBackGround" 
    header="Who is Dylan Docherty?"
    text="
    Hello my name is Dylan Docherty.  I am 22 years old.  
    I have a degree in Computer Science from the univeristy of windsor.
    I enjoy funk rock, video games and coding in my free time.
    "/> 
    <Content picture="groupSelfie" text="
    Hello my name is Dylan Docherty.  I am 22 years old.  
    I have a degree in Computer Science from the univeristy of windsor.
    I enjoy funk rock, video games and coding in my free time.
    "/> 
    
    
    </div>
  </div>
);