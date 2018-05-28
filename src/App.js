import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddTrick extends React.Component {
  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Trick</h5>
          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="URL" aria-label="URL" />
            </div>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Screenshot URL" aria-label="Screenshot" />
            </div>

            <div className="input-group">
              <input type="text" className="form-control" placeholder="Description" aria-label="Screenshot" />
            </div>

          </div>
          <p className="card-text">
            <button className="btn btn-primary pull-center btn-block">Add</button>
          </p>
        </div>
      </div>
    )
  }
}


class Trick extends React.Component {
  render() {
    return (
      <div className="card">
        <a target="_blank" href={this.props.trick.url}>
          <img className="card-img-top" src={this.props.trick.image} alt={this.props.trick.title} />
        </a>
        <div className="card-body">
          <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Difficulty and Success">
            <div class="btn-group" role="group" aria-label="Difficulty">
              <button type="button" class="btn btn-info">1</button>
              <button type="button" class="btn btn-primary">2</button>
              <button type="button" class="btn btn-warning">3</button>
              <button type="button" class="btn btn-danger">4</button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-info">&#10004;</button>
            </div>
          </div>

        </div>
        <div className="card-body">
          <h3 className="card-title">{this.props.trick.title}</h3>
          <p className="card-text">{this.props.trick.description}</p>
        </div>
      </div>
    );
  }
}

class TrickList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: [
        {
          key: 187,
          title: "Double Trapeze",
          url: "https://yoyotricks.com/yoyo-tricks/double-trapeze/187/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Double_Trapeze-320.jpg",
          description: "It's like a trapeze, but doubled."
        },
        {
          key: 38717,
          title: "Crazy 8",
          url: "https://yoyotricks.com/yoyo-tricks/crazy-8/38717/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Crazy-8-320.jpg",
          description: "So as you can see this trick involves a weaving motion and there is actually a whole lot of tricks that involves a weaving motion and a lot of principles that we are going to teach you apply in pretty much the same way, so that was Revolutions which a lot of people struggle with."
        },
        {
          key: 1506,
          title: "Houdini mount",
          url: "https://yoyotricks.com/yoyo-tricks/houdini-mount/1506/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Houdini-Mount-320.jpg",
          description: "This trick is a whole lot like Double or Nothing, and the only real difference is that the first pass, normally with Double or Nothing you go around your finger, for the Houdini Mount you are just going to go around your thumb and then continue around and just do Double or Nothing like usual."
        },
        {
          key: 42329,
          title: "Brent",
          url: "https://yoyotricks.com/yoyo-tricks/brent/42329/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Brent-320.jpg",
          description: "So as you can see this trick can be a repeater and it is also good to add any combos and it is a slack trick so make sure your string tension is neutral."
        },
        {
          key: 6424,
          title: "Kamikaze Mount",
          url: "https://yoyotricks.com/yoyo-tricks/kamikaze-mount/6424/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Kamikaze-Mount-320.jpg",
          description: "This is a mount that leads into the trick Kamikaze, but we are going to show it to you in a separate video because it is actually a trick that leads into a whole bunch of other tricks as well, and I am going to show you one more advanced version in this video as well."
        },
        {
          key: 6009,
          title: "Wrist Mount",
          url: "https://yoyotricks.com/yoyo-tricks/wrist-mount/6009/",
          image: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Wrist_Mount_Yoyo_Trick-320.jpg",
          description: "It's like a 1.5 mount but not.",
        }

      ]
    };
  }

  render() {
    return (
      this.state.tricks.map(trick =>
        <Trick key={trick.key} trick={trick} />
      )
    )
  }
}

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
