import bbc from '../assets/logo.png';
import under from '..//assets/alexander-london-879qVfj9txc-unsplash.jpg';

function Signin() {
  return <div className="flex h-screen bg-black">
    <div className="flex justify-center items-center w-full">
      <div >
        <img src={bbc} className='h-40 w-36 ml-36'/>
        <h1 className="font-bold text-white text-3xl text-center">Enter your email</h1>
        <input placeholder='Email' className='outline-none bg-black w-32 mt-3 border-2px-white placeholder-white text-white'></input>
        <br/>
        <button className='bg-blue-600 text-white px-48 py-3'>Continue</button>
        <hr className='h-px my-8 bg-white border-0' />
        <h1 className='text-center font-bold text-2xl text-white'>Dont have BBC account</h1>
        <h1 className='text-blue-600 underline text-center'>Register Now</h1>
      </div>
    </div>
    <img src={under} className='w-1/2 hidden lg:block'/>
  </div>;
}

export default Signin;
