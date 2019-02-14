import React, { Component } from 'react'
import Header from '../Header/Header';
import CallToAction from './CallToAction';
import WebInfo from './WebInfo';
import Upcoming from './Upcoming';
import Recently from './Recently';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="container">
          <WebInfo />

          <hr />

          <Upcoming />

          <hr />

          <Recently />
        </div>

        <CallToAction />
      </div>
    )
  }
}

export default Home
