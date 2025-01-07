import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Kanit, Playwrite_AU_SA } from 'next/font/google';

const kanit = Kanit({
    subsets: ['latin'],
    variable: "--font-kanit",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  });
  
  const playwriteAU = Playwrite_AU_SA({
    subsets: ['latin'],
    variable: "--font-playwriteAU",
    weight: ['100', '200', '300', '400'],
  });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "Dashboard created with Next.js and Tailwind CSS for practice by Yugin Paudel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${playwriteAU.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
