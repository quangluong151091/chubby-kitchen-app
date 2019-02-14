import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="stretch" src="/css/img/slideshow/pic1.JPG" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="stretch" src="/css/img/slideshow/pic2.JPG" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="stretch" src="/css/img/slideshow/pic3.JPG" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

      </header>
    )
  }
}

export default Header
