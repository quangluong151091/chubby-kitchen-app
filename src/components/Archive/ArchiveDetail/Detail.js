import React, { Component } from 'react'

class Detail extends Component {
  render() {
    return (
      <div className="col-sm-9">
        <h2 className="font-weight-bold">
          {this.props.archiveTitle}
        </h2>
        <div className="mt-4 mb-4">
          {this.props.archiveDescription}
        </div>
        <div className="text-center">
          <img
            src={this.props.archiveImg}
            className="img-fluid img-center" 
            alt="Event Thumbnail"
          />
        </div>
        <h6 className="font-italic mt-3 text-center ">
          {this.props.archiveCaption}
        </h6>

      </div>
    )
  }
}
export default Detail;
