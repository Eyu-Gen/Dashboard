"use client";
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import menuContext from '../state/context';

const SideNav = () => {
  
    const links = [
        { id: 1, name: "Home", href: "/dashboard" },
        { id: 2, name: "Blogs", href: "/dashboard/blogs" },
        { id: 3, name: "Projects", href: "/dashboard/projects" },
        { id: 4, name: "Messages", href: "/dashboard/messages" },
        { id: 5, name: "Testimonials", href: "/dashboard/testimonials" },
    ];

    const pathName = usePathname();

    const {showMenu, setShowMenu} = useContext(menuContext);

    return (
      <div className={`${ showMenu ? "left-0" : "-left-full lg:left-0" } top-0 bg-primaryColor fixed lg:relative w-full lg:w-1/5 lg:flex lg:flex-col lg:items-center h-screen transition-all`}>
      <button onClick={() => setShowMenu(false)} className="lg:hidden">
        <Image src="/close-icon.png" alt="menu-icon" width={40} height={40} className="cursor-pointer absolute mr-5 right-0" />
      </button>

      {/*LOGO*/}
      <div className='w-fit mx-auto text-center'>
        <div className='w-fit mx-auto rounded-full mt-10 mb-5'>
            <Image className='object-contain rounded-full' src="/logo.jpg" alt="Logo" width={100} height={100} />
        </div>

        {/*TITLES*/}
        <h1 className='text-white mb-1 text-2xl font-kanit'>Yugin Paudel</h1>
        <p className='text-xs mb-10 font-playwriteAU'>~ Admin ~</p>
      </div>

      {/*NAVIGATION LINKS*/}
      <div className='w-full pr-5 pl-5 bg-primaryColor font-kanit'>
        {links.map((link) => (
            <Link key={link.id} href={link.href || "/"} className="text-white">
                <div className='p-3 w-full flex flex-col items-center ${pathName===link.href ? "text-black rounded bg-white" : "bg-primaryColor text-white'>
                    {link.name}
                </div>
            </Link>
        ))}
      </div>
      <Link href="/" className='text-white absolute bottom-5 w-full pr-5 pl-5'>
          <div className='p-3 w-full flex flex-col items-center font-kanit'>Log Out</div>
      </Link>
    </div>
  )
}

const MenuContainer = () => {
  const {showMenu, setShowMenu} = useContext(menuContext);

  return (
    <button onClick={() => setShowMenu(!showMenu)}>
      <Image src="/menu-icon.png" alt='menu-icon' width={40} height={40} />
    </button>
  );
};


export { SideNav, MenuContainer };