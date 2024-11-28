"use client";
import Link from 'next/link';
import Button from '../components/Button';

export default function Page() {
  const handleClick = () => {
    alert('Fuk u dawg');
  }

  return (
    // Main Container
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6">

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md w-full p-4 fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Placeholder Name</h1>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link></li>
            <li><Link href="/services" className="text-gray-800 hover:text-blue-500">Services</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl font-bold text-center text-slate-500 mb-6">
          This is the home page mane
        </h1>

        <p className="text-black text-lg mb-8">
          I'm sure a 3d model will go here eventually.
        </p>
      

        {/* Button Component */}
        <Button label="Click Me" onClick={handleClick} />
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-black w-full py-2">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
} 