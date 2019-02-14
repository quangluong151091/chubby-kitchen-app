import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LogIn extends Component {
  componentWillMount
  render() {
    return (
      <section id='login'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mx-auto">
              <div className="card">
                <h5 className="card-header text-center font-weight-bold bg-primary text-white">Log In</h5>
                <div className="card-body">
                  <form action="POST">
                    <div className="form-group">
                      <div className="input-group mb-3 mt-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-user fa-sm" />
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-lock fa-sm" />
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                      </div>
                    </div>
                    <button type="button" className="btn btn-success mt-3">Log In</button>
                  </form>
                  <hr />
                  Don't have an account!
                  <Link to='/register'>
                    <span className="text-primary"> Sign Up Here</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default LogIn;
