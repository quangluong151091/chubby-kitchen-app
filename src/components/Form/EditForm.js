import React, { Component } from 'react';

class EditForm extends Component {
  render() {
    return (
      <div className="col-sm-9">
        <h2 className="font-weight-bold mb-4">Update profile information</h2>
        <form action="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="text" className="form-control" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordCheck">Password confirmation:</label>
            <input type="text" className="form-control" name="passwordCheck" id="passwordCheck" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" className="form-control" name="address" id="address" />
          </div>
          <button type="button" className="btn btn-primary mt-4">SAVE</button>
        </form>
      </div>
    )
  }
}
export default EditForm;
