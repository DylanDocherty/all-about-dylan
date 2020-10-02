import React from 'react';
import { Content } from '../content/content.component.jsx';



export const Home=({props, handleChange})=>{
    return(
      <div>
        
        <div id="main-content">
  
        <Content id="about-me" picture="destinyVaporWaveBackGround" 
        header="Who is Dylan Docherty?"
        text="
        I am a 22 computer scientist and all around tech enthusiast.  
        I have a degree in Computer Science from the Univeristy of Windsor.  
        I enjoy learning new technologies and exploring things I don't understand.
        "/>     
        </div>
      </div>
    )
  }