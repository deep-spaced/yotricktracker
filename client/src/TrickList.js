import React, { Component } from 'react';
import AddTrick from './AddTrick';
import Trick from './Trick';

class TrickList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: this.props.tricks
    };
  }

  switchLayouts = (e) => {
    console.log(`Current number of tricks: ${this.state.tricks.length}`);
    let parent = e.currentTarget.parentNode;
    Array.from(parent.children).map(child => child.classList = 'btn btn-secondary');

    let newClass = e.currentTarget.dataset.class;
    document.querySelector('.trick-list').classList = `trick-list ${newClass}`;
    e.currentTarget.classList = 'btn btn-primary';
  }

  filterTricks = (e) => {
    let filter = e.currentTarget.value;
    switch(filter) {
      case 'completed':
        this.filterByCompleted();
        break;
      case 'difficulty':
        break;
      case 'date':
        break;
      default:
        this.setState({ tricks: this.props.tricks });
        break;
    }
  }

  filterByCompleted = () => {
    let filtered = this.state.tricks.filter(a => a.done === true);
    this.setState({ tricks: filtered });
  }
  filterByDifficulty = () => {}
  filterByDateAdded = () => {}

  render() {
    return (
      <div className="trick-list-container">
        <div className="trick-list-controls row">
          <div className="col-xs-4 text-left">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="filter">Options</label>
              </div>
              <select className="custom-select" id="filter" onChange={this.filterTricks}>
                <option>All</option>
                <option value="completed">Completed</option>
                <option value="difficulty">Difficulty</option>
                <option value="date">Date Added</option>
              </select>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-xs-2 text-right">
            <div className="btn-group">
              <button
                className="btn btn-primary"
                data-class="layout-list"
                onClick={this.switchLayouts}>&#9636;</button>
              <button
                className="btn btn-secondary"
                data-class="layout-grid"
                onClick={this.switchLayouts}>&#9638;</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="trick-list layout-list">
            {this.state.tricks.map(trick =>
              <Trick
                key={trick.id}
                trick={trick}
                updateCompletion={this.props.updateCompletion}
                updateDifficulty={this.props.updateDifficulty}
                updateTrick={this.props.updateTrick} />
            )}
            <AddTrick onNewTrick={this.createNewTrick} />
          </div>
        </div>
      </div>
    )
  }
}

export default TrickList;
