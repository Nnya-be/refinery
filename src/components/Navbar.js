import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/G2RLogo.webp'; // Update this path to your logo image

function Navbar() {
  return (
    <nav className="bg-shadesecondary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
          <Link to="/" className="text-2xl font-mono font-bold">GG Refinery</Link>
        </div>
        <div className="hidden md:flex font-mono items-center space-x-4">
          <Link to="/about" className=" text-black hover:text-gray-700">About</Link>
          <Link to="/contact" className="text-black hover:text-gray-700">Contact</Link>
          </div>
          <span className='group flex space-x-5'>
          <button className="bg-white font-mono text-black px-4 py-2 hover:bg-blue-300 rounded">Login</button>
          <button className="bg-blue-500 font-mono text-black px-4 py-2 hover:bg-blue-300 rounded">Sign Up</button>
          </span>
        </div>
    </nav>
  );
}

export default Navbar;

