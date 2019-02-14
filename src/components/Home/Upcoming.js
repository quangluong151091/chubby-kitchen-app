import React, { Component } from 'react'
import EventCard from '../Card/EventCard';
import { connect } from 'react-redux';
import { eventData } from '../../firebaseDB/db';
import { Link } from "react-router-dom";

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Upcoming: null
    }
  }
  componentWillMount = () => {
    eventData.on('value', (events) => {
      var arrayEvent = [];
      events.forEach((element) => {
        const id = element.key;
        const title = element.val().title;
        const time = element.val().time;
        const date = element.val().date;
        const lastdate_enroll = element.val().lastdate_enroll;
        const lastdate_payment = element.val().lastdate_payment;
        const place = element.val().place;
        const price = parseInt(element.val().price);
        const description = element.val().description;
        arrayEvent.push({
          id: id,
          title: title,
          time: time,
          date: date,
          lastdate_enroll: lastdate_enroll,
          lastdate_payment: lastdate_payment,
          place: place,
          price: price,
          description: description
        })
      })
      this.props.addEventListToStore(arrayEvent);
      let Upcoming = [];
      for (let i = 0; i < 3; i++) {
        Upcoming.push(arrayEvent[i]);
      }
      // console.log(Upcoming);
      this.setState({
        Upcoming: Upcoming
      })
      // console.log(this.state.Upcoming);
      // console.log(this.state.eventList);
    })
  }
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  showUpcoming = () => {
    if (this.state.Upcoming) {
      return (
        this.state.Upcoming.map((value, key) => {
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addEventListToStore: (eventList) => {
      dispatch({
        type: "GET_EVENT_LIST",
        eventList
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Upcoming);
// export default Upcoming
