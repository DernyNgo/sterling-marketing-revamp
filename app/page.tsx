"use client";
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Gallery from '../components/Gallery'

export default function Page() {
  const handleClick = () => {
    alert('Fuk u dawg');
  }

  return (
    // Main Container
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">

      {/* Navigation Bar */}
      <nav className="bg-white w-full">
        <div className="container mx-auto flex justify-center items-center">
          {/*Navigation Links Container */}
          <div className="container mx-auto flex justify-start items-center">
          {/* Navigation Links */}
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link></li>
              <li><Link href="/services" className="text-gray-800 hover:text-blue-500">Services</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>

          {/* Logo Container */}
          <div className="container mx-auto flex justify-center items-center">
              {/* Logo with Link to Home */}
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
      </nav>

        

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl font-bold text-center text-slate-500 mb-6">
          This is the home page mane
        </h1>

        <p className="text-black text-lg mb-8">
          I am sure a 3d model will go here eventually.
        </p>
      

        {/* Button Component */}
        <Button label="Let's Build!" onClick={handleClick} />
      </section>

      {/* Gallery Section */}
      <h1 className="text-4xl font-bold mb-8">Previous Client Work</h1>
      <Gallery />

      {/* Footer Section */}
      <footer className="bg-white text-black w-full py-2">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
} 