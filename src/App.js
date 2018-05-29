import React, { Component } from 'react';
import TrickList from './TrickList';
import AddTrick from './AddTrick';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TrickTrack</h1>
        </header>
        <div className="container">
          <div className="col-sm">

            <div className="card-grid">
              <TrickList />
              <AddTrick />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
