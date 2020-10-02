import React from 'react';
import { Content } from '../content/content.component.jsx';



export const Home=({props, handleChange})=>{
    return(
      <div>
        
        <div id="main-content">
  
        <Content id="about-me" picture="https://avatars2.githubusercontent.com/u/33208705?s=460&u=6274729d4a65bdf000c64e4bcbe54704c43328a4&v=4"
        pictureText="A Photo Of Dylan"
        pictureStyle="profilePicture"
        header="Who is Dylan Docherty?"
        text="
        I am a 22 year old computer scientist and all around tech enthusiast.  
        I have a 4 year degree in Computer Science from the University of Windsor, with a 72% cumulative average.  
        I enjoy learning new technologies and exploring things I don't understand.  
        When I code I strive to write efficient, maintainable and readable code.
        I love solving puzzles.
        "/>   
        </div>
      </div>
    )}