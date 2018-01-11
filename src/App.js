import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import dataStructure from './DataStructure.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          header
        </header>
        <div className="landing-image">
          <img src="./src/assets/1.jpg" alt="landing"/>
        </div>
        <div className="landing-process oneOf3">
          process1
          </div>
        <div className="landing-process twoOf3">
          process2
          </div>
        <div className="landing-process threeOf3">
          process3
          </div>
        <div className="landing-projects oneOf3">
          project 1
          </div>
        <div className="landing-projects twoOf3">
          project 2
          </div>
        <div className="landing-projects threeOf3">
          project 3
          </div>
        <div className="landing-projects oneOf3">
          project 4
          </div>
        <div className="landing-projects twoOf3">
          project 5
          </div>
        <div className="landing-projects threeOf3">
          project 6
          </div>
        <footer className="footer">
          footer
        </footer>
      </div>
    )
  }
}

export default App;
