import React from 'react';
import { Content } from '../content/content.component';

import "../my-work/my-work.style.css"

export const MyWork = ({props, handleChange}) => (
        
    <div id="main-content">

    <Content id="my-work" 
    header="What work have I done?"
    headerPos="center"
    text="
    I have worked as an App/Web Developer at Taplane for two years.  During my time there
    I learned a lot about working with others, how to ask for help, the agile 
    process, and general rules of development in a team.
    I have also worked on seven video game projects throughout high school and university. Shown in the videos below are some of those games.
    I have also designed some other websites, they link to my previous websites all the way back to 2015.
    As I enjoy tinkering, below you will find older websites I don't maintain that serve as archives for older work.
    (Audio warning some of the videos are loud)
    "/> 
    <div id="small-links">
      <div id="websites">
        Previous Websites:
        <a href="http://uwindsor.icampus21.com/wordpress/ddocherty/about-me/">University Year 2</a>
        <a href="https://sites.google.com/site/dylandochertygr12/">Grade 12</a>
      </div>
      <div id="github">
        Github:
        <a href="https://github.com/DylanDocherty">Dylan Docherty</a>
      </div>
    </div>
    

    <div id="chequeChain">
      <img src="https://raw.githubusercontent.com/DylanDocherty/all-about-dylan/master/src/resources/chequeChainScreenShot.PNG" alt="A screenshot of our cheque chain website"/>
      <div className="row-text">
        This is a screenshot of my final research project from university.  
        My team and I designed and implemented, front-end cheque input,
         hashed and salted login, a back-end check validation server and stored it using blockchain technology.
         This project was ended early due to the Covid-19 pandemic.
      </div>
    </div>

    <div className="videos">
      <div className="videos-row">
        <div className="video-container">
          <iframe title="Copter Cove" src="https://www.youtube.com/embed/Ff8LSRZVNF4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        </div>
        <div className="row-text">
            This is the first game I worked on while I was at Taplane.
              I was tasked with building <a href="https://www.facebook.com/instantgames/play/2185388865115975/?context_type=SOLO&source=fb_gg_url">Copter Cove</a>,
               one of Taplane's Android/iOS mobile games,
            in Typescript using Babylon.js as the 3D engine, and then integrate it with Facebook Games.
            Through this project I learned a lot about building games and Babylonjs.
            I built two custom modules for Babylonjs 
            A circle styled button with matching click detection.  
            As well as a progress ring that slowly disappears.
            A circle styled button with matching click detection.  
            As well as a progress ring that slowly disappears.
            I also built four shaders to better match the original game
            the shaders mocked light so that we needed less real light sources and would match the original game better.
            I was also active in the Babylon.js forums, even messaging with some of the creators of Babylon.js.
            I also got the game featured in the community  hub of the <a href="https://www.babylonjs.com/community/">official Babylonjs website</a>.

        </div>
      </div>
      <div className="videos-row">
        <div className="video-container">
          <iframe title="Mini Games" src="https://www.youtube.com/embed/V363XHUA-lA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        </div>
        <div className="row-text">
          This was my final summative project in second year university.
            I designed a menu for all of the mini games I had created over the semester.
          My favourite of the mini games was the space shooter(featured at: 3:20).
        </div>
      </div>
      <div className="videos-row">
        <div className="video-container">
          <iframe title="Flappy Bird" src="https://www.youtube.com/embed/EIj8nA8f9b8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        </div>
        <div className="row-text">
          With this game my team and I tried our hand at recreating a past popular game.
          With changing terrain, objacles, and coins to collect, it made a great experience.
        </div>
      </div>
      <div className="videos-row">
        <div className="video-container">
            <iframe title="The Walking Goomba" src="https://www.youtube.com/embed/Pz0_LV9Nl2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        </div>
        <div className="row-text">
          This is the second game I helped create, built during my time in grade 11.  Using python and pygame my team
          and I created a top down mario zombie survival game.  With easter eggs and
          two different skins it was one of the best in class.  
        </div>
      </div>
      <div className="videos-row">
        <div className="video-container">
          <iframe title="Mardadon Hunt" src="https://www.youtube.com/embed/FYBOPJRF7YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        </div>
        <div className="row-text">
          This was the first game I ever created.  In grade 10 I took computer programming, it changed my life forever.  
            Fascinated with writing code (or in this case drag and drop coding), I built my first ever game with the help of one of my best friends. 
        </div>
        </div>
      </div>
    </div>
);