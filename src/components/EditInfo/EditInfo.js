import React, { Component } from 'react';
import UserInfoCard from '../Card/UserInfoCard';
import EditForm from '../Form/EditForm';
import Header from '../Header/Header';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class EditInfo extends Component {
  render() {
    const { auth, profile } = this.props;
    if(!auth.uid) return <Redirect to="/log-in" />
    
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <UserInfoCard />
            <EditForm profile={profile}/>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(EditInfo);
