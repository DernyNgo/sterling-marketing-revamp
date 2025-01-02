import React from "react"
import Link from "next/link"
import Image from "next/legacy/image"

interface HeaderProps {
  transparent?: boolean
}

const Header: React.FC<HeaderProps> = ({ transparent }) => {
  return (
    <nav className={`w-full ${transparent ? "bg-transparent" : "bg-white"}`}>
      <div className="header flex justify-center items-center mb-5 mt-7">
        <div className="container flex justify-center items-center max-w-full mx-12">
          <div className="container flex justify-start items-center">
            <ul
              className={`flex space-x-6 font-esteban font-normal text-lg ${
                transparent ? "text-white" : "text-gray-800"
              }`}
            >
              <li>
                <Link href="/" className="hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-400">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="container mx-auto flex justify-center items-center">
            <Link href="/">
              <Image
                src="/resized_logo.png"
                alt="Logo"
                width={107.9}
                height={120}
                priority
              />
            </Link>
          </div>
          <div className="container mx-auto flex justify-end items-center"></div>
        </div>
      </div>
    </nav>
  )
}

export default Header
