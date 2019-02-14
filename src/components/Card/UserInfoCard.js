import React, { Component } from 'react';
import { Link } from "react-router-dom";

class UserInfoCard extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header bg-primary text-white">
            Welcome!
          </div>
          <div className="card-body text-dark">
            <ul>
              <li>
                <Link to="/">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/edit-user-info">
                  Edit Profile
                </Link>
              </li>
              <li>Log Out</li>
            </ul>
            <hr />
            <h6 className="text-uppercase">Enrollment</h6>
            <ul className="enrollmentList">
              <li>
                <a href="/">Event #01</a>
              </li>
              <li>
                <a href="/">Event #04</a>
              </li>
              <li>
                <a href="/">...</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default UserInfoCard;
