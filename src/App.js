import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/navigation-bar/navigation-bar.component';
import { Content } from './components/content/content.component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <div id="false-background"/> */}
      <NavigationBar props={["about-me", "my-work","bungie.net"]}/>
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
}

export default App;
