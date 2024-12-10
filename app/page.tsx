"use client";
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Gallery from '../components/Gallery'
import Header from '../components/Header'

export default function Page() {
  const handleClick = () => {
    alert('Fuk u dawg')
  }

  return (
    // Main Container
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">

      {/* Header Component */}
      <Header />
        

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