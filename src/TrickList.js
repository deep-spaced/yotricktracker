import React, { Component } from 'react';
import AddTrick from './AddTrick';
import Trick from './Trick';

class TrickList extends Component {
  switchLayouts = (e) => {
    let parent = e.currentTarget.parentNode;
    Array.from(parent.children).map(child => child.classList = 'btn btn-secondary');

    let newClass = e.currentTarget.dataset.class;
    document.querySelector('.trick-list').classList = `trick-list ${newClass}`;
    e.currentTarget.classList = 'btn btn-primary';
  }

  render() {
    return (
      <div className="trick-list-container">
        <div className="trick-list-controls row">
          <div className="col-sm-4 text-left">
          <div class="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Options</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Filter</option>
              <option value="1">Completed</option>
              <option value="2">Difficulty</option>
              <option value="3">Date Added</option>
            </select>
          </div>
          </div>
          <div className="col"></div>
          <div className="col-sm-2 text-right">
            <div className="btn-group">
              <button
                className="btn btn-secondary"
                data-class="layout-list"
                onClick={this.switchLayouts}>&#9636;</button>
              <button
                className="btn btn-primary"
                data-class="layout-grid"
                onClick={this.switchLayouts}>&#9638;</button>
            </div>
          </div>
        </div>
        <div className="trick-list layout-grid">
          {this.props.tricks.map(trick =>
            <Trick
              key={trick.key}
              trick={trick}
              updateCompletion={this.props.updateCompletion}
              updateDifficulty={this.props.updateDifficulty}
              updateTrick={this.props.updateTrick} />
          )}
          <AddTrick onNewTrick={this.createNewTrick} />
        </div>
      </div>
    )
  }
}

export default TrickList;
