import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/images/GGR-scaled.webp';
import image2 from '../assets/images/goldImage.jpeg';
import image3 from '../assets/images/liquidGold.webp';

const images = [image1, image2, image3];

function Hero() {
  return (
    <div className="hero min-h-screen bg-primary flex items-center justify-center">
      <div className="hero-content font-mono flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-5 text-5xl font-bold text-white">The future of the mining industry</h1>
        <p className="mb-5 text-white">"Clean Environment, Clean Responsibility, Clean Sourcing".</p>
        <div className="carousel-container">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel">
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image} alt={`Slide ${index}`} className="rounded-lg shadow-lg" />
              </div>
            ))}
          </Carousel>
        </div>
        <button className="btn btn-primary mt-5">More about us</button>
      </div>
    </div>
  );
}

export default Hero;
