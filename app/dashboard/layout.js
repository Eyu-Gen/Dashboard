import MenuContextProvider from '../state/provider';
import { SideNav } from '../components/side-Nav';

  export const metadata = {
    title: "Dashboard",
    description: "A simple and stylish dashboard made with Next.js, showing data and easy-to-use features.",
  };

export default function SideBar({children}) {
    return (
        <MenuContextProvider>
          <main className='flex'>
            <SideNav />

            <div className="w-full min-h-screen lg:w-4/5 p-5 md:p-10 bg-white text-black">{children}</div>
          </main>
        </MenuContextProvider>
  );
}