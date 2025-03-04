import { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/more.png';
import search from '../assets/search.png';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between border-1 items-center'>
        <div className='flex'>
          <img src={hamburger} className='w-7 h-10 my-7 ml-5 cursor-pointer' onClick={toggleMenu} />
          <img src={search} className='w-6 h-8 my-7 ml-5' />
        </div>
        <div>
          <img src={logo} className='w-24 h-24' />
        </div>
        <div className='flex'>
          <Link to="/" ><h1 className='bg-black font-semibold my-7 mx-1 px-3 py-1 text-white w-20 h-10 hidden sm:block'>Register</h1></Link>
          <Link to="/signin"><h1 className='text-black font-semibold py-1 my-7 mx-1 px-3 h-10 hover:bg-black hover:text-white w-20 hidden sm:block'>Sign In</h1></Link>
        </div>
      </div>
      {isOpen && (
        <div className='mt-2  w-full bg-gray-800 text-white'>
          <Link to="/" className='block px-4 py-2' onClick={toggleMenu}>Home</Link>
          <Link to="/signin" className='block px-4 py-2' onClick={toggleMenu}>Sign In</Link>
          <Link to="/news" className='block px-4 py-2' onClick={toggleMenu}>News</Link>
          <Link to="/sport" className='block px-4 py-2' onClick={toggleMenu}>Sport</Link>
          <Link to="/business" className='block px-4 py-2' onClick={toggleMenu}>Business</Link>
          <Link to="/innovation" className='block px-4 py-2' onClick={toggleMenu}>Innovation</Link>
          <Link to="/culture" className='block px-4 py-2' onClick={toggleMenu}>Culture</Link>
          <Link to="/travel" className='block px-4 py-2' onClick={toggleMenu}>Travel</Link>
          <Link to="/earth" className='block px-4 py-2' onClick={toggleMenu}>Earth</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;