import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { signUp } from '../../Store/actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  }
  isChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <section id='register'>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <div className="card mt-4">
                <h5 className="card-header text-center font-weight-bold bg-success text-white">Register New Account</h5>
                <div className="card-body">
                  <div className="text-center text-danger">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                  <form action="POST" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input onChange={(e) => this.isChange(e)} type="email" className="form-control" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password: <small>(min. 6 character)</small></label>
                      <input onChange={(e) => this.isChange(e)} type="password" pattern=".{6,}" title="Minimum 6 characters" className="form-control" name="password" id="password" required />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="passwordCheck">Password confirmation:</label>
                      <input type="password" pattern=".{6,}" className="form-control" name="passwordCheck" id="passwordCheck" />
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="name">First Name:</label>
                      <input onChange={(e) => this.isChange(e)} type="text" className="form-control" name="firstName" id="firstName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Last Name:</label>
                      <input onChange={(e) => this.isChange(e)} type="text" className="form-control" name="lastName" id="lastName" />
                    </div>
                    <div className="form-group ml-4 mt-4">
                      <input className="form-check-input" type="checkbox" id="agreeTerm" defaultValue="agreeTerm" required />
                      <label className="form-check-label" htmlFor="agreeTerm">I Agree To The Chubby Kitchen Terms and Conditions</label>
                    </div>

                    <button type="submit" className="btn btn-block btn-primary mt-4">Create New Account</button>
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

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (newUser) => {
      dispatch(
        signUp(newUser)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
