import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Participation from '../components/Partnerships';
// import Accreditation from '../components/Accreditation';
// import OurServices from '../components/OurServices';
// import Footer from '../components/Footer';
// import OurMembership from '../components/OurMembership';

function Home() {
  return (
    <div>
      
      <Hero />
      <Participation />
      <AboutUs />
      {/* <Accreditation/>
      <OurServices /> */}
      {/* <OurMembership /> */}
    </div>
  );
}

export default Home;
