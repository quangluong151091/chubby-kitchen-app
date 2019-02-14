import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventItem extends Component {
  to_slug = (str) => {
    // convert all characters to lowercase
    str = str.toLowerCase();

    // Clear all special characters
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // replace space characters with -
    str = str.replace(/(\s+)/g, '-');

    // Clear space at the begining
    str = str.replace(/^-+/g, '');

    // Clear space at the ending
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }
  render() {
    return (
      <div className="card mt-3 mb-3 border-danger">
        <div className="card-body">
          <h5 className="text-truncate text-primary">
            {this.props.eventTitle}
          </h5>
          <p className="font-weight-bold card-text text-truncate">
            <span>{this.props.eventDate} </span>
            - 
            <span> enroll before <kbd className="bg-danger">{this.props.eventLastEnroll}</kbd></span>
          </p>
          <p className="card-text text-truncate">
            {this.props.eventDescription}
          </p>
          <Link to={"/events/" + this.props.eventId + "/" + this.props.eventTitle} className="text-danger">Read more...</Link>
        </div>
      </div>

    )
  }
}
export default EventItem;
