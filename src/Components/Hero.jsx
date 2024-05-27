import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Picture1 from './../Media/GGR-scaled.webp';
import Picture2 from './../Media/goldImage.jpeg';
import Picture3 from './../Media/liquidGold.webp';

function Hero() {
  return (
    <div className="bg-quaternary carousel-container m-6 ">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div className='rounded-s-2xl'>
            <img src={Picture1} alt="Picture1" />
          </div>
          <div>
            <img src={Picture2} alt="Picture2" />
          </div>
          <div>
            <img src={Picture3} alt="Picture3" />
          </div>
        </Carousel>
    </div>
  );
}

export default Hero