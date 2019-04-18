import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../Store/actions/authActions'

const style = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '30px'
}

class Nav extends Component {
  isLogin = () => {
    const { auth } = this.props;
    if (auth.uid) {
      return (
        <li>
          <NavLink to='/' onClick={() => this.props.signOut()}>
            <button type="button" className="btn btn-danger">
              Log Out
          </button>
          </NavLink>
        </li>
      )
    } else {
      return (
        <ul className="nav navbar-nav">
          <li className='mt-2'>
            <NavLink
              to='/register'
              style={style}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/log-in">
              <button type="button" className="btn btn-primary">
                Log In
              </button>
            </NavLink>
          </li>
        </ul>

      )
    }
  }
  isAdmin = () => {
    const { auth, profile } = this.props;
    if (auth.uid && (profile.role === "Admin")) {
      return (
        <li className='mt-2'>
          <a
            href="your-link-here" rel="noreferrer noopener"
            target="_blank"
            style={style}
          >
            <span className='font-weight-bold'>
              Admin Dashboard
            </span>
          </a>
        </li>
      )
    }
  }
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">ChubbyKitchen</NavLink>
          </div>
          <div>
            <ul className="nav navbar-nav">
              {this.isAdmin()}
              <li className='mt-2'>
                <NavLink
                  to="/"
                  style={style}
                >
                  Home
                </NavLink>
              </li>
              <li className='mt-2'>
                <NavLink
                  to="/events"
                  style={style}
                >
                  Events
                </NavLink>
              </li>
              <li className='mt-2'>
                <NavLink
                  to="/archived"
                  style={style}
                >
                  Archived
                </NavLink>
              </li>
              {/* <li> */}
              {this.isLogin()}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
