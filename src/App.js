import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Participation from './Components/Participation';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Participation/>
      <AboutUs></AboutUs>
     
    </div>
  );
}

export default App;
