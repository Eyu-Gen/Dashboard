import React from 'react';
import Image from 'next/image';
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import { useState } from 'next/navigation';
import { MenuContainer } from './side-Nav';

// Initialize fonts
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playwriteAU = Playwrite_AU_SA({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});

export const metadata = {
  title: "Dashboard",
  description: "A simple and stylish dashboard made with Next.js, showing data and easy-to-use features.",
};

const page = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between mb-5 md:mb-10'>
      <h1 className='text-sm md:text-3xl font-bold md:mb-10 text-primaryColor'>Dashboard || Home</h1>
      {/* ERROR IN RESPONSIVE */}
      <div className='block md:hidden' onClick={<MenuContainer />}><Image src="/menu-icon.png" alt="menu-icon" width={50} height={50} /></div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 md:gap-20 mb-5 md:mb-20'>
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Blogs</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
        
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Messages</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row gap-5 md:gap-20 md:mb-20'>
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Projects</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
        
        <div className='flex flex-col items-center bg-primaryColor rounded w-full md:w-1/3 p-5 md:p-10'>
          <h2 className='text-3xl font-bold text-white mb-5'>Testimonials</h2>
          <p className='text-5xl text-white font-bold'>0</p>
        </div>
      </div>
    </>
  )
}

export default page
