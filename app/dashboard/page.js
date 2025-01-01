import React from 'react'
import Image from "next/image";
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import SideNav from '@/app/dashboard/layout';

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
    <SideNav />
  )
}

export default page
