import React, { Component } from 'react';
import './App.css';
import profile_picture from './images/profile_picture.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <div className="image">
            <img src={profile_picture}/>
            <h3>Sarangarajan Vijayraghavan Iyengar</h3>
            <p>sarang@edxengine.com</p>
            <p>+91 9876543210</p>
          </div>
          <div className="resume">
            <h3>Sidebar Resume</h3>
            <div className="box">
              <div className="element">
                <div className="circle"></div>
                <div className="value">Summary</div>
              </div>
              <div className="element">
                <div className="circle"></div>
                <div className="value">Education</div>
              </div>
              <div className="element">
                <div className="circle"></div>
                <div className="value">Projects</div>
              </div>
              <div className="element">
                <div className="circle"></div>
                <div className="value">Extra curricular activities</div>
              </div>
              <div className="element">
                <div className="circle"></div>
                <div className="value">EdXengine leaderboard scores</div>
              </div>
              <div className="element">
                <div className="circle"></div>
                <div className="value">Verified skill set</div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-main">
        </div>
      </div>
    );
  }
}

export default App;
