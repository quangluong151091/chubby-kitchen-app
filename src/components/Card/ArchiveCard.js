import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ArchiveCard extends Component {
  render() {
    return (
      <div className="col-sm-6 my-6 text-center mt-3 mb-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.archiveImg}
            height='300px'
            alt='Archive Thumbnail' />
          <div className="card-body">
            <Link 
              to={"/archived/" + this.props.archiveId + "/" + this.props.archiveTitle} 
              className="h4 card-title text-truncate text-danger"
            >
              {this.props.archiveCaption}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ArchiveCard;
