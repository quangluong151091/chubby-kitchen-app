import React, { Component } from 'react'
import Header from '../Header/Header';
import UserInfoCard from '../Card/UserInfoCard';
// import Search from '../Search/Search';
import EventList from './EventList';

class Event extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-9">
              {/* <Search /> */}
              <p className="h1 font-weight-bold text-center">
                ON GOING EVENTS
                </p>
              <hr />
              <EventList />
            </div>

            <UserInfoCard />
          </div>
        </div>
      </section>
    )
  }
}

export default Event
