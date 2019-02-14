import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return (
      <div className="col-sm-9">
        <h2 className="font-weight-bold">
          {this.props.eventTitle}
        </h2>
        <h4 className="font-italic font-weight-bold text-danger mt-3 mb-3">
          {this.props.eventPrice !== 0 ? this.props.eventPrice + " €" : "FREE"}
        </h4>
        <div className="row mb-3">
          <div className="col-sm-3 mt-3">
            <ul className="list-unstyled font-weight-bold">
              <li>
                <span className="text-info">Location:</span>
              </li>
              <li>
                <span className="text-info">Time:</span>
              </li>
              <li>
                <span className="text-success">Date:</span>
              </li>
              <li>
                <span className="text-danger">Enroll before:</span>
              </li>
              <li>
                <span className="text-secondary">Payment before:</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 mt-3">
            <ul className="list-unstyled font-weight-bold">
              <li>
                {this.props.eventPlace} room
              </li>
              <li>
                {this.props.eventTime}
              </li>
              <li className='text-success'>
                {this.props.eventDate}
              </li>
              <li className='text-danger'>
                {this.props.eventLastEnroll}
              </li>
              <li className='text-secondary'>
                {this.props.eventLastPayment}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-justify">
          {this.props.eventDescription}

          <button type="button" className="btn btn-block btn-success font-weight-bold mt-5">ENROLL NOW</button>

        </div>
      </div>
    )
  }
}
export default Detail;
