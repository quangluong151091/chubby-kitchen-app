import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <div className="input-group mb-3 col-sm-12-fluid">
          <input type="text" className="form-control" placeholder="Search for ..." aria-label="search text" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-times fa-sm" />
            </span>
          </div>
          <button type="button" className="btn btn-success ml-2">Search</button>
        </div>
      </form>
    )
  }
}
export default Search;
