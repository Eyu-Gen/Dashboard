import React from 'react';
import { MenuContainer } from '../components/side-Nav';

const page = () => {
  return (
    <div className='font-kanit'>
      <div className='flex flex-row items-center justify-between w-full mb-5 md:mb-10 p-2 md:p-5 rounded-xl lg:p-0 bg-primaryColor lg:bg-white'>
        <h1 className='text-sm md:text-xl font-bold lg::mb-5 text-white md:text-primaryColor ml-3 md:ml-5'>Dashboard || Home</h1>
        <div className='block lg:hidden mr-3 md:mr-5'><MenuContainer /></div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full md:gap-20 mb-5 md:mb-20'>
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/2 lg:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Blogs</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
        
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/2 lg:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Messages</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row gap-5 w-full md:gap-20'>
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/2 lg:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Projects</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
        
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/2 lg:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Testimonials</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
      </div>
    </div>
  )
}

export default page
