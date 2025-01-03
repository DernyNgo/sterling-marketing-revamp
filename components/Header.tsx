import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/legacy/image"

interface HeaderProps {
  transparent?: boolean
}

const Header: React.FC<HeaderProps> = ({ transparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className={`w-full ${transparent ? "bg-transparent" : "bg-white"} relative`}>
      {/* Header Container */}
      <div className="header flex justify-center items-center mb-5 mt-7">
        {/* Mobile Hamburger (Top-Left) */}
        <button
          className="sm:hidden absolute left-4 text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo (Centered) */}
        <div className="mx-auto">
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

        {/* Navigation Links (Desktop Only) */}
        <div className="hidden sm:flex absolute left-12">
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
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 w-full bg-white border-t border-gray-200 sm:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-sans justify-center items-center">
          <li>
            <Link href="/" className="hover:text-gray-400" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
