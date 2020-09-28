import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/navigation-bar/navigation-bar.component'
import { NavigationBar } from './components/navigation-bar/navigation-bar.component';
function App() {
  return (
    <div className="App">
      <NavigationBar props={["google.com","bungie.net"]}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
