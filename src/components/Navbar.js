import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/G2RLogo.webp'; // Update this path to your logo image

function Navbar() {
  return (
    <nav className="bg-shadesecondary p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
          <Link to="/" className="text-2xl font-mono font-bold">GG Refinery</Link>
        </div>
        <div className="hidden md:flex font-mono items-center space-x-4">
          <Link to="/about" className=" text-black hover:text-gray-700">About</Link>
          <Link to="/contact" className="text-black hover:text-gray-700">Contact</Link>
          </div>
          <button className="bg-blue-500 font-mono text-white px-4 py-2 hover:bg-blue-300 rounded">Sign Up</button>
        </div>
    </nav>
  );
}

export default Navbar;

