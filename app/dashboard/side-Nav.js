"use client";
import React from 'react';
import Link from 'next/link';
import { Kanit, Playwrite_AU_SA } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useState } from 'next/navigation';
import SideBar from '@/app/dashboard/layout';

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
                <div className={`${kanit.className} p-3 w-full flex flex-col items-center ${pathName===link.href ? "text-black rounded bg-white" : "bg-primaryColor text-white"}`}>
                    {link.name}
                </div>
            </Link>
        ))}
    </div>
  )
}

const MenuContainer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      {/* Menu Icon */}
      <div className="block md:hidden" onClick={() => setMenuVisible((true))}>
        <img src="/menu-icon.png" alt="menu-icon" width={50} height={50} className="cursor-pointer"/>
      </div>

      {/* Sidebar */}
      {menuVisible && ( 
        <div className="fixed top-0 left-0 w-4/5 h-full bg-primaryColor z-50 shadow-lg">
          <button className="absolute top-5 right-5 text-white" onClick={() => setMenuVisible(false)}>
            Close
          </button>
          <SideNav />
        </div>
      )}
    </>
  );
};


export { SideNav, MenuContainer };