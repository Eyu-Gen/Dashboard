import Image from 'next/image';
import Link from 'next/link';   
import { Kanit, Playwrite_AU_SA } from 'next/font/google';

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });
  
  const playwriteAU = Playwrite_AU_SA({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400'],
  });

export default function SideNav() {
  return (
        <div className='bg-secondaryColor rounded-tr-3xl rounded-br-3xl hidden lg:w-1/5 lg:flex lg:flex-col lg:items-center h-screen'> {/*Main page*/}
            {/*LOGO*/}
            <div className='w-fit rounded-full mt-10 mb-5'>
                <Image className='object-contain rounded-full' src="/logo.jpg" alt="Logo" width={100} height={100} />
            </div>

            {/*TITLES*/}
            <h1 className={`text-white mb-1 text-2xl ${kanit.className}`}>Yugin Paudel</h1>
            <p className={`text-xs mb-10 ${playwriteAU.className}`}>~ Admin ~</p>

            {/*NAVIGATION LINKS*/}
            <div className='w-full pr-5 pl-5'>
                <Link href="" className='text-black'>
                    <div className={`${kanit.className} bg-primaryColor rounded-xl p-3 w-full flex flex-col items-center`}>Home</div>
                </Link>
                
                <Link href="" className='text-white'>
                    <div className={`${kanit.className} p-3 w-full flex flex-col items-center`}>Blogs</div>
                </Link>
                
                <Link href="" className='text-white'>
                    <div className={`${kanit.className} p-3 w-full flex flex-col items-center`}>Projects</div>
                </Link>
                
                <Link href="" className='text-white'>
                    <div className={`${kanit.className} p-3 w-full flex flex-col items-center`}>Messages</div>
                </Link>
                
                <Link href="" className='text-white'>
                    <div className={`${kanit.className} p-3 w-full flex flex-col items-center`}>Testimonials</div>
                </Link>
                
            </div>
        </div>
  );
}