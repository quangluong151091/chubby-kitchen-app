import React, { Component } from 'react'
import { eventData } from '../../firebaseDB/db';
import EventItem from './EventItem';
import { connect } from 'react-redux';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: null
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
        const price = element.val().price;
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
        this.setState({
          eventList: arrayEvent
        })
        // console.log(this.state.eventList)
        this.props.addEventListToStore(arrayEvent);
      })
    })
  }
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  getData = () => {
    if (this.state.eventList) {
      return (
        this.state.eventList.map((value, key) => {
          return (
            <EventItem
              key={key}
              lineNo={key + 1}
              event={value}
              eventId={value.id}
              eventTitle={value.title}
              eventDescription={value.description}
              eventTime={value.time}
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
  return {
    eventList: state.eventList
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

// export default EventList
export default connect(mapStateToProps, mapDispatchToProps)(EventList);
