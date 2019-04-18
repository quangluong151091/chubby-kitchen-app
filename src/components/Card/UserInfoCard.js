import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../Store/actions/authActions'

class UserInfoCard extends Component {
  isLogin = () => {
    const { auth } = this.props;
    if (auth.uid) {
      return (
        <div>
          <ul>
            <li>
              <Link to="/">
                Homepage
              </Link>
            </li>
            <li>
              <Link to={"/edit-user-info"}>
                Edit Profile
              </Link>
            </li>
            <li>
              <Link to={"/enrollment"}>
                Enrolled Events
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => this.props.signOut()}>
                Log Out
              </Link>
            </li>
          </ul>

        </div>
      )
    } else {
      return (
        <ul>
          <li>
            <Link to="/log-in">
              Log In
            </Link>
          </li>
        </ul>
      )
    }
  }
  isProfile = () => {
    const { profile } = this.props;
    if (profile.initials)
      return (
        <div className='text-center mb-2'>
          <div className='avatar alert-success'>
            <span className="text-initial">
              {profile.initials}
            </span>
          </div>
        </div>
      )
  }
  render() {
    const { profile } = this.props;
    // console.log(this.state.enrolled);

    return (
      <div className="col-sm-3">
        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header bg-primary text-white">
            Welcome, {profile.firstName ? profile.firstName : null}!
          </div>
          <div className="card-body text-dark">
            {this.isProfile()}
            {this.isLogin()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    // enrollList: state.firebase.profile.event_enrolment,
    // eventList: state.firestore.ordered.eventList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(
        signOut()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoCard);
