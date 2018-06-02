import React, { Component } from 'react';
import TrickList from './TrickList';
import AddTrick from './AddTrick';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: this.loadTricks()
    };
  }

  updateCompletion = (key) => {
    let trick = this.state.tricks.find(function(tr) {
      if(tr.key == key) { return tr; }
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
      if(tr.key == key) { return tr; }
    });
    let idx = this.state.tricks.indexOf(trick);
    trick.difficulty = parseInt(difficulty);
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
              <TrickList
                tricks={this.state.tricks}
                updateDifficulty={this.updateDifficulty}
                updateCompletion={this.updateCompletion} />
            <AddTrick onNewTrick={this.createNewTrick} />
            </div>
          </div>
        </div>
      </div>

    );
  }

  loadTricks = () => {
    let localTricks = localStorage.getItem('tricks-stored');
    if(localTricks === null) {
      console.log('No saved tricks');
      return this.getsome();
    } else {
      console.log('Loaded tricks');
      return JSON.parse(localTricks);
    }
  }

  saveTricks = (tricks) => {
    localStorage.setItem('tricks-stored', JSON.stringify(tricks));
  }

  getsome = () => {
    return [
      {
        key: 154,
        title: "The Breakaway",
        url: "https://yoyotricks.com/yoyo-tricks/the-breakaway/154/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/New_Breakaway-320.jpg",
        description: "Basic side throw.",
        done: true,
        difficulty: 1
      },
      {
        key: 187,
        title: "Double Trapeze",
        url: "https://yoyotricks.com/yoyo-tricks/double-trapeze/187/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Double_Trapeze-320.jpg",
        description: "It's like a trapeze, but doubled.",
        done: false,
        difficulty: 2
      },
      {
        key: 38717,
        title: "Crazy 8",
        url: "https://yoyotricks.com/yoyo-tricks/crazy-8/38717/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Crazy-8-320.jpg",
        description: "So as you can see this trick involves a weaving motion and there is actually a whole lot of tricks that involves a weaving motion and a lot of principles that we are going to teach you apply in pretty much the same way, so that was Revolutions which a lot of people struggle with.",
        done: false,
        difficulty: 2
      },
      {
        key: 1506,
        title: "Houdini mount",
        url: "https://yoyotricks.com/yoyo-tricks/houdini-mount/1506/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Houdini-Mount-320.jpg",
        description: "This trick is a whole lot like Double or Nothing, and the only real difference is that the first pass, normally with Double or Nothing you go around your finger, for the Houdini Mount you are just going to go around your thumb and then continue around and just do Double or Nothing like usual.",
        done: false,
        difficulty: 2
      },
      {
        key: 42329,
        title: "Brent",
        url: "https://yoyotricks.com/yoyo-tricks/brent/42329/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Brent-320.jpg",
        description: "So as you can see this trick can be a repeater and it is also good to add any combos and it is a slack trick so make sure your string tension is neutral.",
        done: false,
        difficulty: 2
      },
      {
        key: 6424,
        title: "Kamikaze Mount",
        url: "https://yoyotricks.com/yoyo-tricks/kamikaze-mount/6424/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Kamikaze-Mount-320.jpg",
        description: "This is a mount that leads into the trick Kamikaze, but we are going to show it to you in a separate video because it is actually a trick that leads into a whole bunch of other tricks as well, and I am going to show you one more advanced version in this video as well.",
        done: false,
        difficulty: 2
      },
      {
        key: 6009,
        title: "Wrist Mount",
        url: "https://yoyotricks.com/yoyo-tricks/wrist-mount/6009/",
        image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Wrist_Mount_Yoyo_Trick-320.jpg",
        description: "It's like a 1.5 mount but not.",
        done: false,
        difficulty: 2
      }
    ];

  }

}

export default App;
