import React, { Component } from 'react'
import Header from '../../Header/Header';
import UserInfoCard from '../../Card/UserInfoCard';
import Detail from './Detail';
import { connect } from 'react-redux';

class ArchiveDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveDetail: null
    }
  }
  componentWillMount = () => {
    const eId = this.props.match.params.id;
    // console.log(eId)
    // console.log(this.props.archiveList)
    const archiveDetail = this.props.archiveList.filter(d => d.id === eId);
    // console.log(archiveDetail)
    this.setState({
      archiveDetail: archiveDetail[0]
    })
  }
  showDetail = () => {
    if (this.state.archiveDetail) {
      return (
        <Detail
          archive={this.state.archiveDetail}
          archiveId={this.state.archiveDetail.id}
          archiveTitle={this.state.archiveDetail.title}
          archiveDescription={this.state.archiveDetail.description}
          archiveImg={this.state.archiveDetail.image}
          archiveCaption={this.state.archiveDetail.caption}
        />
      )
    }
  }
  render() {
    console.log(this.state.archiveDetail)
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
  return {
    archiveList: state.archiveList
  }
}
export default connect(mapStateToProps)(ArchiveDetail);

// export default ArchiveDetail
