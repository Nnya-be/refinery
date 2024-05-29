import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <section className="min-h-screen font-mono about-us bg-quaternary p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-6">Brief about the company...</p>
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded">Read More</Link>
      </div>
    </section>
  );
}

export default AboutUs;
