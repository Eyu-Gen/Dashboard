import React from 'react'
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import SideBar from '@/app/dashboard/layout';

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
    <p className='text-9xl'>HELLO! THIS IS HOME PAGE. WORK IN PROGRESS...</p>
    </>
  )
}

export default page
