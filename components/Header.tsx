"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header: React.FC = () => {
  return (
    <nav className="bg-white w-full">
      <div className="header mx-12 flex justify-center items-center mt-10 mb-10">
        <div className="container flex justify-center items-center">
          <div className="container flex justify-start items-center">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link></li>
              <li><Link href="/services" className="text-gray-800 hover:text-blue-500">Services</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
          <div className="container mx-auto flex justify-center items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={120}
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