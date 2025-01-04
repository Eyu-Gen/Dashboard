"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import { usePathname } from 'next/navigation';

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });
  
  const playwriteAU = Playwrite_AU_SA({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400'],
  });

const SideNav = () => {
  
    const links = [
        { id: 1, name: "Home", href: "/dashboard" },
        { id: 2, name: "Blogs", href: "/dashboard/blogs" },
        { id: 3, name: "Projects", href: "/dashboard/projects" },
        { id: 4, name: "Messages", href: "/dashboard/messages" },
        { id: 5, name: "Testimonials", href: "/dashboard/testimonials" },
    ];

    const pathName = usePathname();

    return (
    <div className='w-full pr-5 pl-5 bg-primaryColor'>
        {links.map((link) => (
            <Link key={link.id} href={link.href || "/"} className="text-white">
                <div className={`${kanit.className} p-3 w-full flex flex-col items-center ${pathName.includes(link.name) ? "bg-white text-black rounded" : "bg-primaryColor text-white"}`}>
                    {link.name}
                </div>
            </Link>
        ))}
    </div>
  )
}

export default SideNav;