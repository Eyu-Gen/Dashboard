import Image from 'next/image';
import Link from 'next/link';   
import { SideNav } from './side-Nav';
import { Kanit, Playwrite_AU_SA } from 'next/font/google';

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });
  
  const playwriteAU = Playwrite_AU_SA({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400'],
  });

export default function SideBar({children}) {
    return (
        <div className='flex'>
        <aside className='bg-primaryColor relative hidden lg:w-1/5 lg:flex lg:flex-col lg:items-center h-screen'> {/*SIDE-BAR*/}
            {/*LOGO*/}
            <div className='w-fit rounded-full mt-10 mb-5'>
                <Image className='object-contain rounded-full' src="/logo.jpg" alt="Logo" width={100} height={100} />
            </div>

            {/*TITLES*/}
            <h1 className={`text-white mb-1 text-2xl ${kanit.className}`}>Yugin Paudel</h1>
            <p className={`text-xs mb-10 ${playwriteAU.className}`}>~ Admin ~</p>

            {/*NAVIGATION LINKS*/}
            <SideNav />
            <Link href="/" className='text-white absolute bottom-5 w-full pr-5 pl-5'>
                <div className={`${kanit.className} p-3 w-full flex flex-col items-center`}>Log Out</div>
            </Link>
        </aside>

        {/* CONTENT AREA */}
        <main className="w-full lg:w-4/5 p-5 md:p-10 md:pl-20 bg-white text-black">{children}</main>

        </div>
  );
}