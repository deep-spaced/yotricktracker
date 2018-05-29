import React, { Component } from 'react';
import Trick from './Trick';

class TrickList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: [
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

export default TrickList;