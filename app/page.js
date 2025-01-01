import Image from "next/image";
import LoginButton from "./buttons";
import { Kanit, Playwrite_AU_SA } from 'next/font/google';

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
  title: "Welcome",
  description: "A simple and stylish dashboard made with Next.js, showing data and easy-to-use features.",
};

export default function Home() {
  return (
    <main className="bg-bgImage bg-cover bg-center min-h-screen"> {/* BG IMAGE */}
      <div className="flex flex-col items-center min-h-screen bg-black bg-opacity-40"> {/* BLACK OVERLAY */} 
        {/* SOCIAL MEDIA CONTAINER */}
        <div className="flex flex-col items-center p-3 sm:p-10 w-full sm:w-1/3 mb-20 sm:mb-10"> 
          <p className={`text-white text-xs flex flex-col items-center  w-36 sm:w-48 sm:text-xl pb-1 sm:pb-3 ${playwriteAU.className}`}>Social Media:</p>
          {/* SOCIAL MEDIA ICONS */}
          <div className="flex align-center"> 
            <a href="https://github.com/Eyu-Gen" className="w-8 h-8 mr-1 sm:w-12 sm:h-12 sm:mr-3 md:w-16 md:h-16"><Image className="object-contain" src="/github-icon.png" alt="Github-Logo" width={50} height={50} layout="intrinsic"  /></a>
            <a href="https://www.instagram.com/u.can.0_0/" className="w-8 h-8 mr-1 sm:mr-3 sm:w-12 sm:h-12 md:w-16 md:h-16"><Image className="object-contain" src="/instagram-icon.png" alt="Instagram-Logo" width={50} height={50} layout="intrinsic" /></a>
            <a href="https://www.facebook.com/EyuGen10" className="w-8 h-8 mr-1 sm:mr-3 sm:w-12 sm:h-12 md:w-16 md:h-16"><Image className="object-contain" src="/facebook-icon.png" alt="Facebook-Logo" width={50} height={50} layout="intrinsic" /></a>
            <a href="https://www.linkedin.com/in/yugin-paudel/" className="w-8 h-8 mr-1 sm:mr-3 sm:w-12 sm:h-12 md:w-16 md:h-16"><Image className="object-contain" src="/linkedin-icon.png" alt="LinkedIn-Logo" width={50} height={50} layout="intrinsic" /></a>
          </div>
        </div>

        {/* DETAILS CONTAINER */}
        <div className="w-screen flex justify-center">
          {/* DETAILS */}
          <div className="w-2/3 m-5 flex flex-col items-center justify-center">
            <h1 className={`text-2xl w-screen sm:text-5xl font-bold text-white text-center mb-5 ${kanit.className}`}>WELCOME TO DASHBOARD</h1>
            <p className={`text-xs sm:text-xl text-white text-center font-sans mb-10 ${playwriteAU.className}`}>Hey there! Ready to take control of your work? Log in and let’s make productivity happen!</p>
            <LoginButton />
          </div>
        </div>
      </div>
    </main>
  );
}