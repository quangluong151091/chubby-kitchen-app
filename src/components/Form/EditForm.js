import React, { Component } from 'react';
import { updateInfo } from '../../Store/actions/userActions';
import { connect } from 'react-redux'

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAlert: false,
      userId: '',
      firstName: '',
      lastName: '',
      address: ''
    }
  }
  componentWillMount = () => {
    if (this.props.profile && this.props.auth) {
      this.setState({
        userId: this.props.auth.uid,
        firstName: this.props.profile.firstName,
        lastName: this.props.profile.lastName,
        address: this.props.profile.address
      })
    }
  }
  // isSave = () => {
  //   if (this.state.isAlert) {
  //     return (
  //       <div className="alert alert-success rounded">
  //         <button type="button" data-dismiss="alert" aria-hidden="true" className="close">×</button>
  //         <div className="icon">
  //           <i className="fas fa-check fa-lg fa-fw"></i>
  //         </div>
  //         <strong>Success!</strong>
  //         Changes has been saved successfully!
  //       </div>
  //     )
  //   }
  // }
  isChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }
  handleSave = (event) => {
    event.preventDefault();
    this.setState({
      isAlert: true
    })
    this.props.updateInfo(this.state)
  }
  render() {
    const { profile } = this.props;
    return (
      <div className="col-sm-9">
        <h2 className="font-weight-bold mb-4">Update profile information</h2>
        <form action="POST" onSubmit={(e) => this.handleSave(e)}>
          <div className="form-group">
            <label htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email" id="email"
              defaultValue={profile.email}
              disabled
            />
            <small
              id="emailHelp"
              className="form-text text-muted"
            >
              Email cannot be changed!
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">First name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName" id="firstName"
              defaultValue={profile.firstName}
              onChange={(e) => this.isChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordCheck">Last name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName" id="lastName"
              defaultValue={profile.lastName}
              onChange={(e) => this.isChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" name="name" id="name" />
          </div> */}
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              name="address" id="address"
              defaultValue={profile.address}
              onChange={(e) => this.isChange(e)}
            />
          </div>
          {/* {this.isSave()} */}
          <button 
            type="submit" 
            className="btn btn-success mt-4"
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    // profile: ownProps.profile
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateInfo: (profile) => {
      dispatch(
        updateInfo(profile)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
