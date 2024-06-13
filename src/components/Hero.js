import { Carousel } from "flowbite-react";
import React from 'react';
import goldImage from '../assets/images/goldImage.jpeg';
import liquidGold from '../assets/images/liquidGold.webp';
import Worker from '../assets/icons/hero3.avif';

const Hero = () => {
  return (
    <div className="bg-primary">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={goldImage} alt="Gold Image" className="rounded h-[756px]"/>
            </div>
            {/* {Hero-Text} */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-secondary md:w-3/4 leading-snug">
                Leading Producers of Gold 
                <span className="text-tertiary bg-primary"> From 10 years</span>
              </h1>
              <p className="text-secondary text-base mb-8 font-thin-3xl">We have high expertise in the production of Gold</p>
              <button className="btn-trade">Trade with Us</button>
            </div>
          </div>
          
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={liquidGold} alt="Gold Metal Tool" className="rounded h-[756px]"/>
            </div>
            {/* {Hero-Text} */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-secondary md:w-3/4 leading-snug">
                Trusted Gold Metal Tools
                <span className="text-tertiary bg-primary"> For Your Needs</span>
              </h1>
              <p className="text-secondary text-base mb-8 font-thin-3xl">Our tools are crafted with precision and quality to ensure the best performance.</p>
              <button className="btn-trade">Get Our Tools</button>
            </div>
          </div>
          
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={Worker} alt="Expert/Worker" className="rounded h-[756px]"/>
            </div>
            {/* {Hero-Text} */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-secondary md:w-3/4 leading-snug">
                Premium Gold Metal
                <span className="text-tertiary bg-primary"> For All Industries</span>
              </h1>
              <p className="text-secondary text-base mb-8 font-thin-3xl">Our premium gold metal is suitable for various industrial applications.</p>
              <button className="btn-trade">Learn More</button>
            </div>
          </div>
        </Carousel>
      </div>  
    </div>
  );
}

export default Hero;