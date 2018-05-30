import React, { Component } from 'react';

class AddTrick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      title: "",
      url: "",
      image: "",
      description: "",
      done: false,
      difficulty: 1
    };
  }

  createTrick = (event) => {
    console.table(this.state);
    event.preventDefault();
  }

  updateState = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(`Name: ${name}`);
    console.log(`Value: ${value}`);

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Trick</h5>
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
            </div>

          </form>
          <p className="card-text">
            <button onClick={this.createTrick} className="btn btn-primary pull-center btn-block">Add</button>
          </p>
        </div>
      </div>
    )
  }
}

export default AddTrick;