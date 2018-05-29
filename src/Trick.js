import React, { Component } from 'react';

class Trick extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this.state, props.trick);
  }

  updateDifficulty = (event) => {
    this.setState({ difficulty: event.target.value });
  }

  updateCompletionStatus = () => {
    this.setState({ done: !this.state.done })
  }

  render() {
    return (
      <div className="card">
        <a target="_blank" href={this.state.url}>
          <img className="card-img-top" src={this.state.image} alt={this.state.title} />
        </a>
        <div className="card-body">
          <h3 className="card-title">{this.state.title}</h3>
          <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Difficulty and Success">
            <div className="input-group">
              <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="difficulty">Difficulty</label>
              </div>
              <select className="custom-select" id="difficulty" value={this.state.difficulty} onChange={this.updateDifficulty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="btn-group">
              <button type="button" onClick={this.updateCompletionStatus} className={this.state.done === false ? "btn btn-info" : "btn btn-success"}>&#10004;</button>
            </div>
          </div>

        </div>
        <div className="card-body">
          <p className="card-text">{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default Trick;