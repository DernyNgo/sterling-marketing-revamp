import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Esteban } from 'next/font/google';

// Import Google Fonts
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });
const esteban = Esteban({ weight: ['400'], subsets: ['latin'] });

// Import Local Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Sterling MKTG",
  description: "Custom marketing solutions for your business.",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body 
        className={`
          ${poppins.className} 
          ${esteban.className} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

