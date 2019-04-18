import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import UserInfoCard from '../Card/UserInfoCard';
import EventItem from '../Event/EventItem';

class EnrollList extends Component {
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  getEnrollList = () => {
    if (this.props.enrollList) {
      return (
        this.props.enrollList.map((value, key) => {
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
    // console.log(this.props);

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/log-in" />

    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <UserInfoCard />
            <div className="col-sm-9">
              <p className="h1 font-weight-bold">Enrolled Events</p>
              <hr />
              {this.getEnrollList()}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const user_enrollList = state.firebase.profile.event_enrolment;
  const eventList = state.firestore.ordered.eventList;
  const enroll_list = [];
  if (user_enrollList && eventList) {
    user_enrollList.forEach(item => {
      let itemArray = item.split("/")
      eventList.forEach(event => {
        if (itemArray[0] === event.id) {
          enroll_list.push(event)
        }
      })
    })
    enroll_list.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
  }
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    eventList: eventList,
    enrollList: enroll_list
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'eventList',
      orderBy: ['date', 'asc'],
      startAt: (new Date()).toISOString()
    }
  ])
)(EnrollList)
