import React, { Component } from 'react'
import ArchiveCard from '../Card/ArchiveCard';
import { archiveData } from '../../firebaseDB/db'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Recently extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArchiveList: null
    }
  }
  componentWillMount = () => {
    archiveData.on('value', (archives) => {
      var arrayArchive = [];
      archives.forEach((element) => {
        const id = element.key;
        const title = element.val().title;
        const description = element.val().description;
        const image = element.val().image;
        const caption = element.val().caption;
        arrayArchive.push({
          id: id,
          title: title,
          description: description,
          image: image,
          caption: caption
        })
      })
      arrayArchive.sort(() => Math.random() - 0.5);
      this.props.addArchiveListToStore(arrayArchive);
      let recent = [];
      for (let i = 0; i < 2; i++) {
        recent.push(arrayArchive[i]);
      }
      this.setState({
        ArchiveList: recent
      })
    })
  }
  showRecently = () => {
    if (this.state.ArchiveList) {
      return (
        this.state.ArchiveList.map((value, key) => {
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addArchiveListToStore: (archiveList) => {
      dispatch({
        type: "GET_ARCHIVE_LIST",
        archiveList
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Recently);

// export default Recently
