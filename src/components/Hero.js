
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/GGR-scaled.webp';
import image2 from '../assets/images/goldImage.jpeg';
import image3 from '../assets/images/liquidGold.webp';

const images = [image1, image2, image3];

function Hero() {
  return (
    <div className="hero min-h-screen bg-white grid items-center justify-center bg-gradient-to-tr from-white to-secondary">
      <div className="hero-content font-mono flex flex-col items-center justify-center w-full h-full">
        <h1 className="mb-5 text-5xl font-bold text-white">The future of the mining industry</h1>
        <p className="mb-5 text-white">"Clean Environment, Clean Reputation, Clean Sourcing".</p>
        <div className="carousel-container  mix-blend-overlay">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel">
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image} alt={`Slide ${index}`} className="rounded-lg shadow-lg" />
              </div>
            ))}
          </Carousel>
        </div>
        <button className="btn btn-primary mt-5 rounded-lg">Learn more</button>
      </div>
    </div>
  );
}

export default Hero;
