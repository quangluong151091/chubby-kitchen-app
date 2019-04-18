import React, { Component } from 'react'
import ArchiveCard from '../Card/ArchiveCard';
// import { archiveData } from '../../firebaseDB/db'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class Recently extends Component {
  showRecently = () => {
    if (this.props.archiveList) {
      const archiveList = this.props.archiveList.sort(() => 0.5 - Math.random())
      const recentlyList = []
      for (let i = 0; i < 2; i++) {
        recentlyList.push(archiveList[i])
      }
      return (
        recentlyList.map((value, key) => {
          return (
            <ArchiveCard
              key={key}
              archive={value}
              archiveId={value.id}
              archiveTitle={value.title}
              archiveDescription={value.description}
              archiveImg={value.image}
              archiveCaption={value.caption}
            />
          )
        })
      )
    }
  }
  render() {
    return (
      <div id="recentEvent" className="mt-5">
        <h2 className="page-header font-weight-bold mb-4">
          <i className="fas fa-bookmark fa-sm fa-fw"></i>
          &nbsp;
          Archived Events
        </h2>
        <div className="row">
          {this.showRecently()}
        </div>
        <div className='text-right mb-4 mt-4'>
          <Link to="/archived" className="btn btn-danger">See More!</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state.firebase.ordered.ArchiveEvent)
  return {
    archiveList: state.firestore.ordered.archiveList
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'archiveList' }
  ])
)(Recently);

// export default Recently
