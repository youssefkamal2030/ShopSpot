import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> {/* Updated index */}
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button> {/* New indicator */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/img2.jpg" className="d-block w-100 height-400" alt="the first Slide"/>
        </div>
        <div className="carousel-item">
          <img src="/images/img1.jpg" className="d-block w-100 height-400" alt="the second Slide"/>
        </div>
        <div className="carousel-item">
          <img src="/images/img-1.png" className="d-block w-100 height-400" alt="the third Slide"/>
        </div>
        <div className="carousel-item"> 
          <img src="/images/img-4.png" className="d-block w-100 height-400" alt="the fourth Slide"/>
        </div>
        <div className="carousel-item"> 
          <img src="/images/hero-img.jpg"className="d-block w-100 height-400" alt="the fifth Slide"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider;
