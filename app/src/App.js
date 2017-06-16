import React, { Component } from 'react';
import './App.css';
import profile_picture from './images/profile_picture.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <div>
            <img src={profile_picture}/>
          </div>
        </div>
        <div className="App-main">
        </div>
      </div>
    );
  }
}

export default App;
