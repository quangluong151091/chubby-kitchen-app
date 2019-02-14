import React, { Component } from 'react'
import { archiveData } from '../../firebaseDB/db';
import ArchiveCard from '../Card/ArchiveCard';
import { connect } from 'react-redux';

class ArchiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveList: null
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
        arrayArchive.sort( () =>  Math.random() - 0.5 );
        this.setState({
          archiveList: arrayArchive
        })
        // console.log(this.state.archiveList)
        this.props.addArchiveListToStore(arrayArchive);
      })
    })
  }
  showArchive = () => {
    if (this.state.archiveList) {
      return (
        this.state.archiveList.map((value, key) => {
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
  return {
    archiveList: state.archiveList
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

export default connect(mapStateToProps, mapDispatchToProps)(ArchiveList)

// export default ArchiveList
