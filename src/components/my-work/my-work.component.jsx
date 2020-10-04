import React from 'react';
import { Content } from '../content/content.component';

import "../my-work/my-work.style.css"

export const MyWork = ({props, handleChange}) => (
        
    <div id="main-content">

    <Content id="my-work" 
    header="What work have I done?"
    text="
    I have worked as an App/Web Developer at Taplane for two years.  During my time there
    I learned a lot about working with others, how to ask for help, the agile 
    process, and general rules of development in a team.
    I have also worked on 7 video game projects throughout school. Shown in the videos below are some of those games(Audio warning some are loud).
    I have also designed some other websites, they link to my previous websites all the way back to 2015.
    Lastly, As I like learning new technologies I built some custom faces for a smart watch in 2015.
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

    </div>

    <div className="videos">
      <div className="videos-row">
        <iframe title="Copter Cove" width="960" height="540" src="https://www.youtube.com/embed/Ff8LSRZVNF4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <div className="row-text">
            This is the first game I worked on while I was at Taplane.
              I was tasked with building <a href="https://www.facebook.com/instantgames/play/2185388865115975/?context_type=SOLO&source=fb_gg_url">Copter Cove</a>, one of taplanes android/ios mobile games,
            in Typescript using Babylonjs as the 3d engine, and then integrate it with Facebook games.
            Through this project I learned a lot about building games and Babylonjs.
            I built 2 custom modules for Babylonjs and 4 shaders to better match the original game.
            A circle styled button with matching click detection.  
            As well as a progress ring that slowly disappears.
            The shaders mocked light so that we needed less real light sources and would match the original game better.
            I also talked with some of the creators of Babylonjs 
            and got the game featured in the community  hub of the <a href="https://www.babylonjs.com/community/">official Babylonjs website</a>

        </div>
      </div>
      <div className="videos-row">
        <iframe title="Mini Games" width="960" height="540" src="https://www.youtube.com/embed/V363XHUA-lA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <div className="row-text">
          This was my final summative project in 2nd year University.
            I designed a menu for all of the mini games I had created over the semester.
          My favourite of the mini games was the space shooter(3:20).
        </div>
      </div>
      <div className="videos-row">
        <iframe title="Flappy Bird" width="960" height="540" src="https://www.youtube.com/embed/EIj8nA8f9b8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <div className="row-text">
          With this game my team and I tried our hand at recreating a popular game at the time.
          With changing terrain, objacles, and coins to collect, it was my best game yet.
        </div>
      </div>
      <div className="videos-row">
        <iframe title="The Walking Goomba" width="960" height="540" src="https://www.youtube.com/embed/Pz0_LV9Nl2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <div className="row-text">
          This is the second game I helped create, built during my time in grade 11.  Using python and pygame my team
          and I created a top down mario zombie survival game.  With easter eggs and
          two different skins it was leagues ahead of my previous game.  
        </div>
      </div>
      <div className="videos-row">
        <iframe title="Mardadon Hunt" width="960" height="540" src="https://www.youtube.com/embed/FYBOPJRF7YQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" ></iframe>
        <div className="row-text">
          This was the first game I ever created.  In grade 10 I took computer programming, it changed my life forever.  
            Fascinated with writing code(or in this case drag and drop coding), I built my first ever game with the help of one of my best friends. 
        </div>
        
      </div>

      
    </div>
    
    </div>
);