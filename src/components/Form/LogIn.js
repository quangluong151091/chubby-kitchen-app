import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../../Store/actions/authActions';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.signIn(this.state);
  }
  render() {
    const {authError, auth} = this.props;
    if(auth.uid) return <Redirect to="/" />
    return (
      <section id='login'>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mx-auto">
              <div className="card mt-5">
                <h5 className="card-header text-center font-weight-bold bg-primary text-white">Log In</h5>
                <div className="card-body">
                  <form action="POST" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                      <div className="input-group mb-3 mt-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-user fa-sm" />
                          </span>
                        </div>
                        <input onChange={(e) => this.isChange(e)} type="email" name="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fas fa-lock fa-sm" />
                          </span>
                        </div>
                        <input onChange={(e) => this.isChange(e)} type="password" name="password" className="form-control" placeholder="Password" pattern=".{6,}" title="Password must be minimum 6 characters" />
                      </div>
                    </div>
                    <div className="text-center text-danger">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Log In</button>
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

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (credential) => {
      dispatch(
        signIn(credential)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
