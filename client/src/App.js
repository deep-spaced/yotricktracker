import React, { Component } from 'react';
import TrickList from './TrickList';
import yologo from './yoyo-svgrepo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: []
    };

    this.loadTricks();
  }

  updateCompletion = (key) => {
    let trick = this.state.tricks.find(function(tr) {
      return tr.key === key;
    });
    let idx = this.state.tricks.indexOf(trick);
    trick.done = !trick.done;
    this.setState((prevState) => {
      prevState.tricks.splice(idx, 1, trick);
      this.saveTricks(prevState.tricks);
      return { tricks: prevState.tricks };
    });
  }

  updateDifficulty = (key, difficulty) => {
    let trick = this.state.tricks.find(function(tr) {
      return tr.key === key;
    });
    let idx = this.state.tricks.indexOf(trick);
    trick.difficulty = parseInt(difficulty, 10);
    this.setState((prevState) => {
      prevState.tricks.splice(idx, 1, trick);
      this.saveTricks(prevState.tricks);
      return { tricks: prevState.tricks };
    });
  }

  createNewTrick = (newTrick) => {
    this.setState((prevState) => {
      prevState.tricks.push(newTrick);
      this.saveTricks(prevState.tricks);
      return { tricks: prevState.tricks };
    });
  }

  updateTrick = (trick) => {
    console.log('UPDATED');
    let key = trick.key;
    let oldTrick = this.state.tricks.find(function(tr) {
      return tr.key === key;
    });
    let idx = this.state.tricks.indexOf(oldTrick);
    this.setState((prevState) => {
      prevState.tricks.splice(idx, 1, trick);
      this.saveTricks(prevState.tricks);
      return { tricks: prevState.tricks };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-sm App-header-content">
                <img src={yologo} className="App-logo" alt="logo" />
                <h1 className="App-title">TrickTrack</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          {this.state.tricks.length > 0
            ? <div className="col-sm">
              <TrickList
                tricks={this.state.tricks}
                updateDifficulty={this.updateDifficulty}
                updateCompletion={this.updateCompletion}
                updateTrick={this.updateTrick} />
            </div>
            : <h2>Loading</h2>
          }
        </div>
      </div>

    );
  }

  loadTricks = () => {
    // Retrieve the data from the local Rails server:
    axios.get(`${process.env.REACT_APP_API_HOST}/api/tricks`)
      .then(response => {
        console.log(response);
        if(response.data.length) {
          console.log('Set data')
          this.setState({ tricks: response.data });
        } else {
          console.log('Whatevs')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  saveTricks = (tricks) => {
    localStorage.setItem('tricks-stored', JSON.stringify(tricks));
  }

}

export default App;
