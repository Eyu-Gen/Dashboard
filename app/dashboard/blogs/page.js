import React from 'react';
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import { MenuContainer } from '@/app/components/side-Nav';

// Initialize fonts
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playwriteAU = Playwrite_AU_SA({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});

const page = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between w-full mb-5 md:mb-10 p-2 md:p-5 rounded-xl lg:p-0 bg-primaryColor lg:bg-white'>
        <h1 className='text-sm md:text-xl font-bold lg::mb-5 text-white md:text-primaryColor ml-3 md:ml-5'>Dashboard || Blogs</h1>
        <div className='block lg:hidden mr-3 md:mr-5'><MenuContainer /></div>
      </div>


    </>
  )
}

export default page
