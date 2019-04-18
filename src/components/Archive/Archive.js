import React, { Component } from 'react'
import Header from '../Header/Header';
import UserInfoCard from '../Card/UserInfoCard';
import ArchiveList from './ArchiveList';

class Archive extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-9">
            <p className="h1 font-weight-bold text-center">
              ALL ARCHIVES EVENT
            </p>
            <hr />

            <ArchiveList />
              
            </div>

            <UserInfoCard />
          </div>
        </div>
      </section>
    )
  }
}

export default Archive
