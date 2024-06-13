
import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/G2RLogo.webp';
import { Link } from 'react-scroll';

// React icons
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else { 
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav-items array
  const navItems = [
    { link: "Home", path: 'home' },
    { link: "Services", path: 'services' },
    { link: "About", path: 'about' },
    { link: "Contact", path: 'contact' },
    { link: "Partnerships", path: 'partnerships' },
    { link: "FAQ", path: 'faq' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 ${isSticky ? 'bg-white border-b duration-300' : 'md:bg-shadesecondary'}`}>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 right-0' : ''}`}>
        <div className='flex justify-between smooth-scroll cursor-pointer items-center text-base gap-8'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={Logo} alt="logo" className='w-10 inline-block items-center'/>
            <span className='text-primary'>G<sup>2</sup>REFINERY</span>
          </a>
              
          {/* Nav items for large devices */}
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({link, path}) => (
              <Link 
                to={path} 
                spy={true} 
                smooth={true} 
                offset={-100} 
                key={path} 
                className="block text-base text-black hover:text-indigo-500 first:font-medium">
                {link}
              </Link>
            ))}
          </ul>

          {/* Btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href='/' className='hidden lg:flex items-center text-blue hover:text-primary'>Login</a>
            <button className='bg-primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-indigo-600'>Sign Up</button>
          </div>

          {/* Menu btn for only mobile devices */}
          <div className='md:hidden'>
            <button 
              onClick={toggleMenu}
              className='text-primary focus:outline-none focus:text-tertiary'>
              {isMenuOpen ? (<FaXmark className='h-6  w-6 text-primary'/>) : (<FaBars className='h-6 w-6 text-primary'/>)}
            </button>
          </div>
        </div>

        {/* Nav-items for mobile devices */}
        {isMenuOpen && (
          <div className='md:hidden space-y-4 px-4 mt-16 py-7 bg-shadesecondary'>
            {navItems.map(({link, path}) => (
              <Link 
                to={path} 
                spy={true} 
                smooth={true} 
                offset={-100} 
                key={path} 
                className="block text-base text-black hover:text-shadesecondary first:font-medium">
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;