
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import links from '../api/NavbarApi';
const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isFixed) {
        timeoutId = setTimeout(() => {
          setIsFixed(true);
        }, 100);
      } else if (scrollTop === 0 && isFixed) {
        setIsFixed(false);
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isFixed]);

  const navbarClassName = `navbar${isFixed ? ' fixed' : ''}`;

  return (
    
    <header className={navbarClassName} >
  <div className="container mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
   
      
      <h1 className="ml-3 text-4xl font-bold"><span className='text-red-500'>CAR</span> DEALER</h1>
  
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center md:mt-2">
      
     {
      links.map((link)=>{
        return(
          <Link className="mr-5 lg:text-lg" key={link.path} to={link.path}>{link.name}</Link>
        )
      })
     }
    </nav>
   
  </div>
</header>
  )
}

export default Navbar
