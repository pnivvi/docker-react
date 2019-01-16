import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hi baby 
          </p>
          <p>
            i love you so much 
          </p>
          <p>
            you are the best  
          </p>
          <a
            className="App-link"
            href="https://reactsjs.org"
            target="_blank"
            rel="noopener noreferrer"
           >
            
            Learn React
             
          </a>
        </header>
      </div>
    );
  }
}

export default App;
