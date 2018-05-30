import React, { Component } from 'react';

class Trick extends Component {
  updateDifficulty = (event) => {
    this.props.updateDifficulty(this.props.trick.key, event.target.value);
  }

  updateCompletionStatus = (event) => {
    this.props.updateCompletion(this.props.trick.key);
  }

  render() {
    return (
      <div className="card">
        <a target="_blank" href={this.props.trick.url}>
          <img className="card-img-top" src={this.props.trick.image} alt={this.props.trick.title} />
        </a>
        <div className="card-body">
          <h3 className="card-title">{this.props.trick.title}</h3>
          <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Difficulty and Success">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="difficulty">Difficulty</label>
              </div>
              <select className="custom-select" id="difficulty" value={this.props.trick.difficulty} onChange={this.updateDifficulty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="btn-group">
              <button type="button" onClick={this.updateCompletionStatus} className={this.props.trick.done === false ? "btn btn-info" : "btn btn-success"}>&#10004;</button>
            </div>
          </div>

        </div>
        <div className="card-body">
          <p className="card-text">{this.props.trick.description}</p>
        </div>
      </div>
    );
  }
}

export default Trick;