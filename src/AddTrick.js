import React, { Component } from 'react';

class AddTrick extends Component {
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

export default AddTrick;