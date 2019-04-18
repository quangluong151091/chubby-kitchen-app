import React, { Component } from 'react'
import Header from '../../Header/Header';
import UserInfoCard from '../../Card/UserInfoCard';
import Detail from './Detail';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class EventDetail extends Component {
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  showDetail = () => {
    if (this.props.event) {
      return (
        <Detail
          event={this.props.event}
          eventId={this.props.match.params.id}
          eventTitle={this.props.event.title}
          eventDescription={this.props.event.description}
          eventTime={this.props.event.time}
          // eventDate={this.state.date}
          // eventLastEnroll={this.state.lastdate_enroll}
          // eventLastPayment={this.state.lastdate_payment}
          eventDate={this.dateToString(this.props.event.date)}
          eventLastEnroll={this.dateToString(this.props.event.lastdate_enroll)}
          eventLastPayment={this.dateToString(this.props.event.lastdate_payment)}
          eventPlace={this.props.event.place}
          eventPrice={this.props.event.price}
        />
      )
    }
  }
  render() {
    // console.log(this.state.eventDetail)
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">

            {this.showDetail()}

            <UserInfoCard />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const eventId = ownProps.match.params.id;
  const eventList = state.firestore.data.eventList;
  const event = eventList ? eventList[eventId] : null
  return {
    event: event
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'eventList' }
  ])
)(EventDetail);

// export default EventDetail
