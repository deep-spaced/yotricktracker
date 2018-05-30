import React, { Component } from 'react';
import Trick from './Trick';

class TrickList extends Component {
  render() {
    return (
      this.props.tricks.map(trick =>
        <Trick
          key={trick.key}
          trick={trick}
          updateCompletion={this.props.updateCompletion}
          updateDifficulty={this.props.updateDifficulty} />
      )
    )
  }
}

export default TrickList;