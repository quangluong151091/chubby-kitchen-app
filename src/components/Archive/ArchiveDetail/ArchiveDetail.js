import React, { Component } from 'react'
import Header from '../../Header/Header';
import UserInfoCard from '../../Card/UserInfoCard';
import Detail from './Detail';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class ArchiveDetail extends Component {
  showDetail = () => {
    if (this.props.archive) {
      return (
        <Detail
          archive={this.props.archive}
          archiveId={this.props.archive.id}
          archiveTitle={this.props.archive.title}
          archiveDescription={this.props.archive.description}
          archiveImg={this.props.archive.image}
          archiveCaption={this.props.archive.caption}
        />
      )
    }
  }
  render() {
    // console.log(this.props.archive)
    return (
      <section>
        <Header />
        <div className="container mt-5">
          <div className="row">

            {this.showDetail()}

            <UserInfoCard />
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const archiveid = ownProps.match.params.id;
  const archiveList = state.firestore.data.archiveList;
  const archive = archiveList ? archiveList[archiveid] : null;
  return {
    archive: archive
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'archiveList' }
  ])
)(ArchiveDetail);

// export default ArchiveDetail
