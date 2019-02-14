import React, { Component } from 'react';
import UserInfoCard from '../Card/UserInfoCard';
import EditForm from '../Form/EditForm';
import Header from '../Header/Header';

class EditInfo extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <UserInfoCard />
            <EditForm />
          </div>
        </div>
      </section>
    )
  }
}
export default EditInfo;
