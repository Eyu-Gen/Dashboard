import Image from "next/image";

export const metadata = {
  title: "Welcome",
  description: "A simple and stylish dashboard made with Next.js, showing data and easy-to-use features.",
};


export default function Home() {
  return (
    <main className="bg-bgImage bg-cover bg-center min-h-screen"> {/* BG IMAGE */}
      <div className="min-h-screen bg-black bg-opacity-40"> {/* BLACK OVERLAY */} 
        {/* SOCIAL MEDIA CONTAINER */}
        <div className="p-10 w-1/3 mb-10"> 
          <p className="text-white font-bold pb-3 pl-3"><u>Social Media:</u></p>
          {/* SOCIAL MEDIA ICONS */}
          <div className="flex align-center"> 
            <a href="https://github.com/Eyu-Gen" className="w-fit mr-3"><Image src="/github-icon.png" alt="Github-Logo" width={50} height={50} /></a>
            <a href="https://www.instagram.com/u.can.0_0/" className="w-fit mr-3"><Image src="/instagram-icon.png" alt="Instagram-Logo" width={50} height={50} /></a>
            <a href="https://www.facebook.com/EyuGen10" className="w-fit mr-3"><Image src="/facebook-icon.png" alt="Facebook-Logo" width={50} height={50} /></a>
            <a href="https://www.linkedin.com/in/yugin-paudel/" className="w-fit mr-3"><Image src="/linkedin-icon.png" alt="LinkedIn-Logo" width={50} height={50} /></a>
          </div>
        </div>

        {/* DETAILS CONTAINER */}
        <div className="w-screen flex justify-center">
          {/* DETAILS */}
          <div className="w-2/3 m-5 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center mb-5">WELCOME TO DASHBOARD</h1>
            <p className="text-white text-center font-sans mb-10">Hey there! Ready to take control of your work? Log in and let’s make productivity happen!</p>
            <button className="w-40 p-3 rounded-full bg-white font-bold text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out">LOG IN</button>
          </div>
        </div>
      </div>
    </main>
  );
}
