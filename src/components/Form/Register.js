import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <section id='register'>
        <br />
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <div className="card">
                <h5 className="card-header text-center font-weight-bold bg-success text-white">Register New Account</h5>
                <div className="card-body">
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
                    <div className="form-group ml-4 mt-4">
                      <input className="form-check-input" type="checkbox" id="agreeTerm" defaultValue="agreeTerm" />
                      <label className="form-check-label" htmlFor="agreeTerm">I Agree To The Chubby Kitchen Terms and Conditions</label>
                    </div>
                    <button type="button" className="btn btn-block btn-primary mt-4">Create New Account</button>
                  </form>
                  <hr />
                  Already Have Account! 
                  <Link to='/log-in'>
                    <span className="text-primary"> Log In Here </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
    )
  }
}
export default Register;
