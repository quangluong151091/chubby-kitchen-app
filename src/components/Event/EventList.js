import React, { Component } from 'react'
// import { eventData } from '../../firebaseDB/db';
import EventItem from './EventItem';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class EventList extends Component {
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  getData = () => {
    if (this.props.eventList) {
      // console.log(this.props.eventList)
      return (
        this.props.eventList.map((value, key) => {
          // console.log(value.id)
          return (
            <EventItem
              key={key}
              lineNo={key + 1}
              event={value}
              eventId={value.id}
              eventTitle={value.title}
              eventDescription={value.description}
              eventTime={value.time}
              // eventDate={value.date}
              // eventLastEnroll={value.lastdate_enroll}
              // eventLastPayment={value.lastdate_payment}
              eventDate={this.dateToString(value.date)}
              eventLastEnroll={this.dateToString(value.lastdate_enroll)}
              eventLastPayment={this.dateToString(value.lastdate_payment)}
              eventPlace={value.place}
              eventPrice={value.price}
            />
          )
        })
      )
    }
  }
  render() {
    return (
      <div>
        {this.getData()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    eventList: state.firestore.ordered.eventList
  }
}

// export default EventList
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'eventList',
      orderBy: ['date', 'asc'],
      startAt: (new Date()).toISOString()
    }
  ])
)(EventList);
