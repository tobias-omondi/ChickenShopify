import React, {useRef , useEffect} from 'react';
import lovingbeauty from '/src/assets/beauty.jpeg';
import lovingbeautyone from '/src/assets/loving.jpeg';
import Navbar from '../../Navbar';
import '../../App.css'
import LandingSales from './LandingSales';


const LandingPage = () => {
  return (
    <>
    <div className=' relative w-full h-screen -mt-24 md:-mt-20'>
      {/* Background Image for Large Screens */}
     <img
       src={lovingbeauty}  alt='chicken fried'className='hidden sm:block absolute inset-0 w-full h-full object-cover brightness-75'
     />
      {/* Background Image for Small Screens */}
     <img src={lovingbeautyone} alt='beauty' className='block sm:hidden absolute inset-0 w-full h-full object-cover brightness-75'/>
      {/* Navbar on top */}
      <div className='absolute top-4 md:top-0 left-0 w-full z-20'>
        <Navbar />
      </div>

      {/* Page Content Centered */}
      <div className='absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-20 text-center  text-white'> 
        <h1 className='text-5xl md:text-7xl font-extrabold mt-28'>LushBloom</h1>
        <h4 className='text-2xl md:text-4xl font-bold mt-5'>
          For Beauty Lovers <br /> Only
        </h4>
        <button type='submit' className='bg-orange-700 opacity-75 text-white rounded p-3 mt-10 border-orange-600 cursor-pointer px-6 py-3'>Shop Today</button>
      </div>
    </div>
    <div className='w-full z-10'>
        <LandingSales />
      </div>
    </>
  );
};

export default LandingPage;
