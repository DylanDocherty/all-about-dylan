import React from 'react';
import { Content } from '../content/content.component.jsx';



export const Home=({props, handleChange})=>{
    return(
      <div>
        
        <div id="main-content">
  
        <Content id="about-me" 
        picture="https://avatars2.githubusercontent.com/u/33208705?s=460&u=6274729d4a65bdf000c64e4bcbe54704c43328a4&v=4"
        pictureText="A Photo Of Dylan"
        pictureStyle="profilePicture"
        picturePos="left"
        header="Dylan Docherty"
        text="
        I am a computer scientist and all around tech enthusiast.  
        I have a degree in Computer Science from the University of Windsor.  
        I enjoy learning new technologies and exploring things I don't understand.  
        When I code I strive to write efficient, maintainable and readable code.
        I love solving puzzles.
        "/>   
        <Content id="about-me"
        picture="https://github.com/DylanDocherty/all-about-dylan/blob/master/src/resources/selfie.png?raw=true"
        pictureText="My friends and I in Destiny 2"
        pictureStyle="picture"
        picturePos="right"
        
        text="During my free time I like to hangout with friends, play video games, board games, and fish.  Some of my favourite games include Outer Wilds, Destiny 2, Halo and Super Smash Bros.
        I also enjoy driving my car, and keeping it in mint condition."
        />
        </div>
      </div>
    )}