import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">ChubbyKitchen</NavLink>
          </div>
          <div>
            <ul className="nav navbar-nav">
            <li className='mt-2'>
                <a
                  href="https://chubby-kitchen-admin.herokuapp.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  style={{ 
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '50px'
                  }}
                >
                  Admin Dashboard
                </a>
              </li>
              <li className='mt-2'>
                <NavLink
                  to="/"
                  style={{ 
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '50px'
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className='mt-2'>
                <NavLink
                  to="/events"
                  style={{ 
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '50px'
                  }}
                >
                  Events
                </NavLink>
              </li>
              <li className='mt-2'>
                <NavLink
                  to="/archived"
                  style={{ 
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '50px'
                  }}
                >
                  Archived
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
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
