import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { enrollEvent, cancelEnrollEvent } from '../../../Store/actions/userActions';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userInfo: {},
      eventId: '',
      eventInfo: {},
      userEnroll: [],
      userEventList: [],
      isEnroll: false
    }
  }
  componentWillMount = () => {
    if (this.props.event.user_enrolment) {
      // console.log(this.props.eventId)
      this.setState({
        userEnroll: this.props.event.user_enrolment
      })
      const { auth, event } = this.props;
      // console.log(auth.uid);
      // console.log(event);
      event.user_enrolment.forEach(user => {
        // console.log(user);
        let arr = user.split("/");
        // console.log(arr[0])
        if (auth.uid === arr[0]) {
          this.setState({
            isEnroll: true
          })
        }
      })
    }
  }
  componentDidMount = () => {
    const { auth, event, eventId, profile } = this.props;
    this.setState({
      eventId: eventId,
      eventInfo: event
    })
    // console.log(auth)
    if (auth.uid) {
      this.setState({
        userId: auth.uid,
        userInfo: profile
        // userEventList: profile.event_enrolment
      })
      // console.log(this.state)
      if (profile) {
        this.setState({
          userEventList: profile.event_enrolment
        })
      }
    }
  }

  handleEnroll = (event) => {
    event.preventDefault();
    const { auth, eventId, eventTitle } = this.props;
    const { userEnroll, userEventList } = this.state;
    // if(!userEnroll.includes(auth.uid)) {
    let userInfo = '';
    userInfo += auth.uid;
    userInfo += "/";
    userInfo += auth.email
    // userEnroll.push(auth.uid)
    userEnroll.push(userInfo)
    // };
    // if(!userEventList.includes(eventId)) {
    let eventInfo = '';
    eventInfo += eventId;
    eventInfo += "/";
    eventInfo += eventTitle
    userEventList.push(eventInfo)
    // };

    // console.log(this.props.eventId);
    this.setState({
      isEnroll: true
    })
    // console.log(this.state);
    this.props.enrollEvent(this.state)
  }
  handleCancel = (event) => {
    event.preventDefault();
    const { auth, eventId , eventTitle } = this.props;
    const { userEnroll, userEventList } = this.state;
    // console.log(userEnroll);
    // console.log(auth.uid)
    // const userList = 
    let userInfo = '';
    userInfo += auth.uid;
    userInfo += "/";
    userInfo += auth.email
    userEnroll.splice(userEnroll.indexOf(userInfo), 1)
    // console.log(userEnroll);
    let eventInfo = '';
    eventInfo += eventId;
    eventInfo += "/";
    eventInfo += eventTitle
    userEventList.splice(userEventList.indexOf(eventInfo), 1)
    // console.log(userList)
    // console.log(this.state.eventId);
    this.setState({
      isEnroll: false
    })
    // console.log(this.state);
    this.props.cancelEnrollEvent(this.state)
  }
  isLogin = () => {
    const today = new Date();
    const { auth, event } = this.props;
    const { isEnroll } = this.state;
    const lastEnroll = new Date(event.lastdate_enroll); 
    const deadline = new Date(lastEnroll.getTime() + 79199000) //make deadline at 23:59:59 in same day with GTM +2 (Finland)
    console.log(deadline)   
    if (auth.uid && isEnroll && (today > deadline)) {
      return (
        <button className="btn btn-block btn-danger font-weight-bold mt-5" disabled>CANCEL ENROLL - Deadline for enrollment has passed, you can not cancel</button>
      )
    } else if (auth.uid && isEnroll && (today <= deadline)) {
      return (
        <button type="button" onClick={(event) => this.handleCancel(event)} className="btn btn-block btn-danger font-weight-bold mt-5">CANCEL ENROLL</button>
      )
    } else if (auth.uid && (today <= deadline)) {
      return (
        <button type="button" onClick={(event) => this.handleEnroll(event)} className="btn btn-block btn-success font-weight-bold mt-5">ENROLL NOW</button>
      )
    } else if (auth.uid && (today > deadline)) {
      console.log('true');
      
      return (
        <button className="btn btn-block btn-secondary font-weight-bold mt-5" disabled>Deadline for enrollment has passed</button>
      )
    } else {
      return (
        <div className="mt-5 text-danger text-center font-italic">
          <NavLink to="/log-in">
            <kbd className="bg-danger">Please login to enroll this event!</kbd>
          </NavLink>
        </div>
      )
    }
    
  }
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

          {this.isLogin()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.eventId)
  return {
    eventId: ownProps.eventId,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    enrollEvent: (enrollment) => {
      dispatch(enrollEvent(enrollment))
    },
    cancelEnrollEvent: (cancelEnrollment) => {
      dispatch(cancelEnrollEvent((cancelEnrollment)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
