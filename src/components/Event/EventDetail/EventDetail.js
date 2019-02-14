import React, { Component } from 'react'
import Header from '../../Header/Header';
import UserInfoCard from '../../Card/UserInfoCard';
import Detail from './Detail';
import { connect } from 'react-redux';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetail: {}
    }
  }
  componentWillMount = () => {
    const eId = this.props.match.params.id;
    // console.log(eId)
    // console.log(this.props.eventList)
    const eventDetail = this.props.eventList.filter(d => d.id === eId)
    // console.log(eventDetail)
    this.setState({
      eventDetail: eventDetail[0]
    })
  }
  dateToString = (str) => {
    str = str.slice(0, 10);

    str = str.slice(8, 10) + "/" + str.slice(5, 7) + "/" + str.slice(0, 4);

    return str;
  }
  showDetail = () => {
    if (this.state.eventDetail) {
      return (
        <Detail
          event={this.state.eventDetail}
          eventId={this.state.eventDetail.id}
          eventTitle={this.state.eventDetail.title}
          eventDescription={this.state.eventDetail.description}
          eventTime={this.state.eventDetail.time}
          eventDate={this.dateToString(this.state.eventDetail.date)}
          eventLastEnroll={this.dateToString(this.state.eventDetail.lastdate_enroll)}
          eventLastPayment={this.dateToString(this.state.eventDetail.lastdate_payment)}
          eventPlace={this.state.eventDetail.place}
          eventPrice={this.state.eventDetail.price}
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
  return {
    eventList: state.eventList
  }
}
export default connect(mapStateToProps)(EventDetail);

// export default EventDetail
