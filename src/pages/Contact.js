import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Contact information and form...</p>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
