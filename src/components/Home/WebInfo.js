import React, { Component } from 'react';

class WebInfo extends Component {
  render() {
    return (
      <div id="webInfo" className="mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="page-header font-weight-bold mb-4">About Us</h2>
            <p>Welcome to The Chubby Kitchen! Since 2015, Chubby Kitchen has used hands-on cooking classes to bring people together over amazing food.</p>
            <p> Rooted in family tradition, we've developed our classes to bring together guests of all backgrounds. After an evening of storytelling, laughter that only breaking bread can bring, it's common to see guests exchanging phone numbers at the end of class.</p>
            <p>Our seasonal recipes feature flavors from around the world, and from our own backyard, and are both approachable and illuminating for cooks of all skill levels. We regularly appear on TV and in demonstrations around the region, but we are in our element making memories with new friends in the Chubby kitchen.</p>

            <h2 className="mt-5 page-header font-weight-bold mb-4 text-center">What We Do</h2>

            <div className="row text-center font-italic">
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li>Hands-On Cooking Classes</li>
                  <li>TV Appearances</li>
                  <li>Chef's Tables</li>
                  <li>Kitchen Rentals</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li>Private Parties</li>
                  <li>Take-Out + Dinner Kits</li>
                  <li>Theme Dinners</li>
                  <li>Kids' Workshops</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-unstyled">
                  <li>Corporate Team Building</li>
                  <li>Menu Consultation</li>
                  <li>Food + Drink Pairing Dinners</li>
                  <li>Creating tutorial videos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WebInfo;
