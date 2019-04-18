import React, { Component } from 'react'
import EventCard from '../Card/EventCard';
import { connect } from 'react-redux';
// import { eventData } from '../../firebaseDB/db';
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class Upcoming extends Component {
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  showUpcoming = () => {
    if (this.props.eventList) {
      return (
        this.props.eventList.map((value, key) => {
          return (
            <EventCard
              key={key}
              event={value}
              eventId={value.id}
              eventTitle={value.title}
              eventDescription={value.description}
              eventDate={this.dateToString(value.date)}
              eventLastEnroll={this.dateToString(value.lastdate_enroll)}
              eventLastPayment={this.dateToString(value.lastdate_payment)}
            />
          )
        })
      )
    }
  }
  render() {
    return (
      <div id="upcomingEvent" className="mt-5">
        <h2 className="page-header font-weight-bold mb-4">
          <i className="fas fa-bullhorn fa-md fa-fw"></i>
          &nbsp;
          Upcoming Events
        </h2>
        <div className="row">
          {this.showUpcoming()}
        </div>
        <div className='text-right mb-4'>
          <Link to="/events" className="btn btn-success">More event...</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    eventList: state.firestore.ordered.eventList
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'eventList',
      limit: 3,
      orderBy: ['lastdate_enroll', 'asc'],
      startAt: (new Date()).toISOString()
    }
  ])
)(Upcoming);
// export default Upcoming
