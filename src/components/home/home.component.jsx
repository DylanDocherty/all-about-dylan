import React from 'react';
import { Content } from '../content/content.component.jsx';



export const Home=({props, handleChange})=>{
    return(
      <div>
        
        <div id="main-content">
  
        <Content id="about-me" picture="profilePicture" 
        header="Who is Dylan Docherty?"
        text="
        I am a 22 year old computer scientist and all around tech enthusiast.  
        I have a 4 year degree in Computer Science from the Univeristy of Windsor.  
        I enjoy learning new technologies and exploring things I don't understand.  
        When I code I strive to write efficient, maintainable and readable code.
        I love solving puzzles.
        "/>   
        </div>
      </div>
    )}