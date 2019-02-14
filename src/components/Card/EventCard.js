import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventCard extends Component {
  render() {
    return (
      <div className="col-sm-4 my-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-truncate text-primary">{this.props.eventTitle}</h4>
            <p className="font-weight-bold card-text text-truncate">
              <span>{this.props.eventDate} </span>
              -
            <span> enroll before <kbd className="bg-danger">{this.props.eventLastEnroll}</kbd></span>
            </p>
            <p className="card-text text-truncate">
              {this.props.eventDescription}
            </p>
            <Link to={"/detail/" + this.props.eventId + "/" + this.props.eventTitle} className="text-danger">More Detail!</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default EventCard;
