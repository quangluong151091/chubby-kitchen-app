import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

class CallToAction extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return (
        <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 mx-auto">
                <h4 className="mb-2 mt-5">Ready to get started? Sign up now!</h4>
              </div>
              <div className="col-sm-12 mx-auto mt-3">
                <div className="col-sm-12 mb-5">
                  <Link to='/register'>
                    <button type="button" className="btn btn-lg btn-primary">Sign up!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(CallToAction)
