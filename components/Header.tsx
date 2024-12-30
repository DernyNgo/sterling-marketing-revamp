import React from 'react'
import Link from 'next/link'
import Image from "next/legacy/image"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header: React.FC = () => {
  return (
    <nav className="bg-white w-full">
      <div className="header flex justify-center items-center mb-5 mt-7">
        <div className="container flex justify-center items-center max-w-full mx-12">
          <div className="container flex justify-start items-center">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-blue-500 text-lg">Home</Link></li>
              <li><Link href="/services" className="text-gray-800 hover:text-blue-500 text-lg">Services</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-blue-500 text-lg">Contact</Link></li>
            </ul>
          </div>
          <div className="container mx-auto flex justify-center items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={135}
                height={135}
                priority
              />
            </Link>
          </div>
          <div className="container mx-auto flex justify-end items-center"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header