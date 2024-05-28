import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Participation from '../components/Participation';
// import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Participation />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default Home;
