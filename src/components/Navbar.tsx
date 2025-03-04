import hamburger from '../assets/more.png';
import search from '../assets/search.png';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className='flex justify-between border-1 items-center'>
        <div className='flex'>
            <img src={hamburger} className='w-7 h-10 my-7 ml-5' />
            <img src={search} className='w-6 h-8 my-7 ml-5' />
            </div>
            <div>
                <img src={logo} className='w-24 h-24'/>
            </div>
            <div className='flex'>
                <h1 className='bg-black font-semibold my-7 mx-1 px-3 py-1 text-white w-20 h-10 hidden sm:block'>Register</h1>
                <h1 className='text-black font-semibold py-1 my-7 mx-1 px-3 h-10 hover:bg-black hover:text-white w-20 hidden sm:block'>Sign In</h1>
            </div>
        
    </div>
  );
}

export default Navbar;