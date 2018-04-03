import React, { Component } from 'react';
import VistaSupervisor from './components/VistaSupervisor';
import './App.css';
import Supervisora from './data/Supervisora';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Supervisora />
      </div>
    );
  }
}

export default App;
