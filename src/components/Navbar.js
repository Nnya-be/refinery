import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/G2RLogo.webp';
import { Link } from 'react-scroll';

//react icons
import { FaXmark, FaBars} from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const toggleMenu = () => { 
      setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100){
        setIsSticky(true);
      }
      else{ 
        setIsSticky(false);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return  () => {
        window.addEventListener('scroll', handleScroll)
    }
  });

  //Nav-items array
  const navItems = [
    {link: "Home", path: 'home'},
    {link: "Services", path: 'services'},
    {link: "About", path: 'about'},
    {link: "Contact", path: 'Contact'},
    {link: "Partnerships", path: 'partnerships'},
    {link: "FAQ", path: 'faq'},
  ]


  return(
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
          <div className='flex justify-between smooth-scroll cursor-pointer items-center text-base gap-8'>
              <a href='/' className='text-2xl font-semibold flex items-center space-x-3'><img src={Logo} alt="logo" className='w-10 inline-block items-center'/><span className='text-shadesecondary'>GGREFINERY</span></a>
              
              {/* {nav items for the large devices} */}
              <ul className='md:flex space-x-12 hidden'>
                {
                  navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-black hover:text-shadesecondary first:font-medium">{link}</Link> )
                }
              </ul>

              {/* {btn for large devices} */}
              <div className="space-x-12 hidden lg:flex items-center">
                <a href='/' className='hidden lg:flex items-center text-shadesecondary hover:text-primary'>Login</a>
                <button className='bg-primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-indigo-600'>Sign Up

                </button>

                {/* {Menu btn for only mobile devices} */}
                <div className='md:hidden'>
                    <button className='text-primary focus:outline-none focus:text-tertiary'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6  w-6 text-pt'/>) : (<FaBars className='h-6 w-6 text-primary'/>)
                        }
                    </button>
                </div>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
