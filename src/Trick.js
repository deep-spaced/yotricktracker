import React, { Component } from 'react';

class Trick extends Component {
  constructor(props) {
    super(props);
    this.state = props.trick;
  }

  updateDifficulty = (event) => {
    this.props.updateDifficulty(this.props.trick.key, event.target.value);
  }

  updateCompletionStatus = (event) => {
    this.props.updateCompletion(this.props.trick.key);
  }

  updateState = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : this.convertToInt(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  convertToInt = (val) => {
    return (parseInt(val, 10) == val) ? parseInt(val, 10) : val;
  }

  editTrick = (e) => {
    // Edit it.
    let selector = `[data-key="${this.props.trick.key}"]`;
    document.querySelector(selector).classList.toggle("flipped");
  }

  saveTrick = (event) => {
    this.props.updateTrick(this.state);
    let selector = `[data-key="${this.props.trick.key}"]`;
    document.querySelector(selector).classList.toggle("flipped");
  }

  cancelEdit = () => {
    // Cancel it.
    this.setState(this.props.trick);
    let selector = `[data-key="${this.props.trick.key}"]`;
    document.querySelector(selector).classList.toggle("flipped");
  }

  render() {
    return (
      <div data-key={this.props.trick.key} className="card-container">
        <div className="flip">
          <div className="card front">
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
                  <button type="button" onClick={this.editTrick} className="btn btn-dark">&#9998;</button>
                  <button type="button" onClick={this.updateCompletionStatus} className={this.props.trick.done === false ? "btn btn-info" : "btn btn-success"}>&#10004;</button>
                </div>
              </div>

            </div>
            <div className="card-body">
              <p className="card-text">{this.props.trick.description}</p>
            </div>
          </div>

          <div className="card back">
            <div className="card-body">
              <h5 className="card-title">Edit Trick</h5>
              <form>
                <div className="input-group mb-3">
                  <input name="title" type="text" className="form-control" placeholder="Title" aria-label="Title" value={this.state.title} onChange={this.updateState} />
                </div>

                <div className="input-group mb-3">
                  <input name="url" type="text" className="form-control" placeholder="URL" aria-label="URL" value={this.state.url} onChange={this.updateState} />
                </div>

                <div className="input-group mb-3">
                  <input name="image" type="text" className="form-control" placeholder="Image URL" aria-label="Image URL" value={this.state.image} onChange={this.updateState} />
                </div>

                <div className="input-group mb-3">
                  <input name="description" type="text" className="form-control" placeholder="Description" aria-label="Description" value={this.state.description} onChange={this.updateState} />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="difficulty">Difficulty</label>
                  </div>
                  <select name="difficulty" className="custom-select" id="difficulty" value={this.state.difficulty} onChange={this.updateState}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="key">Key</label>
                </div>
                <input name="key" type="number" className="form-control" placeholder="Key" value={this.state.key} disabled />
                </div>

              </form>
              <div className="card-text">
                <div className="btn-group">
                  <button onClick={this.cancelEdit} className="btn btn-info">Cancel</button>
                  <button onClick={this.saveTrick} className="btn btn-success">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trick;
