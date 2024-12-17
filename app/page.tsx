"use client";
//import Image from 'next/image'
//import Link from 'next/link'
import Button from '../components/Button'
import Gallery from '../components/Gallery'
import Header from '../components/Header'

export default function Page() {
  const handleClick = () => {
    alert('Fuk u dawg')
  }

  return (
    // Main Container
    <main className="flex min-h-screen flex-col items-center justify-center bg-white mx-12">

      {/* Header Component */}
      <Header />
        

      {/* First Hero Section */}
      <div className="container flex flex-row max-w-full mt-2 mb-2">
        <section className="container flex flex-col w-1/2">

          <h1 className="flex text-7xl font-black text-center mb-8">
            <strong>Sterling</strong>
          </h1>

          <p className="flex items-center justify-start font-style: italic text-center text-1xl">
            Adjective
          </p>

          <p className="container flex items-center justify-center text-lg text-center mt-4">
          "(of a person or their work, efforts, or qualities) excellent or valuable."
          </p>
        </section>
      
      </div>

      {/* Gallery Section */}
      <h1 className="text-4xl font-bold mb-8">Previous Client Work</h1>
      <Gallery />

      {/* Footer Section */}
      <footer className="bg-white text-black w-full py-2">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Sterling Marketing</p>
        </div>
      </footer>

    </main>
  )
} 