import React, { Component } from 'react'
// import { archiveData } from '../../firebaseDB/db';
import ArchiveCard from '../Card/ArchiveCard';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class ArchiveList extends Component {
  showArchive = () => {
    if (this.props.archiveList) {
      const archiveList = this.props.archiveList.sort(() => 0.5 - Math.random())
      // console.log(archiveList)
      return (
        archiveList.map((value, key) => {
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
      <div id="archiveList" className="container">
        <div className="row">
          {this.showArchive()}
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
)(ArchiveList)

// export default ArchiveList
