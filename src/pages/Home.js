import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Partnerships from '../components/Partnerships';
import Services from '../components/OurServices';
import OurMembership from '../components/OurMembership';


function Home() {
  return (
    <div>
      
      <Hero />
      <Services />
      <AboutUs />
      <Partnerships />
      <OurMembership />
      
    </div>
  );
}

export default Home;
