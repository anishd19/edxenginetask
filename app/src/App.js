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
        </div>
        <div className="App-main">
        </div>
      </div>
    );
  }
}

export default App;
