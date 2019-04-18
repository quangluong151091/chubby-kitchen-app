import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row mt-5 mb-5">
            <hr className="col-sm-12" />
            <div className="col-sm-9">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="/">About</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="/">Contact</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="/">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">© Chubby Kitchen 2019. All Rights Reserved.</p>
              <small className='text-muted text-center mb-3 font-weight-light font-italic'>
                Working best on Google Chrome and FireFox
              </small>
            </div>
            <div className="col-sm-3">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <i className="fab fa-youtube-square fa-3x fa-fw text-primary" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-facebook fa-3x fa-fw text-primary" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-instagram fa-3x fa-fw text-primary" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
