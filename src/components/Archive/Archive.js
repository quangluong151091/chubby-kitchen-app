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
