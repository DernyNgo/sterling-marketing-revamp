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
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">

      {/* Header Component */}
      <Header />
        

      {/* First Hero Section */}
      <div className="container flex flex-row max-w-full mt-2 mb-2">
        <section className="container flex flex-col w-1/2 mt-4 mb-2 mx-12">

          <h1 className="font-sans flex text-7xl font-black text-center mb-8">
            <strong>Sterling</strong>
          </h1>

          <p className="flex items-center justify-start font-style: italic text-center text-lg text-[hsl(42.85714286,3.86740331%,64.50980392%)]">
            Adjective
          </p>

          <p className="font-sans container flex items-center justify-center text-lg text-center mt-4">
          "(of a person or their work, efforts, or qualities) excellent or valuable."
          </p>
          
        </section>
      
      </div>

      {/* Call to Action Section */}
      <div className="container flex flex-col max-w-full mt-4 mb-4 bg-[hsl(240,2.6%,22.5%)] pt-16 pb-16">
        <h2 className="font-sans text-5xl text-white text-center mt-2 mb-2">Marketing Services.</h2>
        <h2 className="font-sans text-5xl text-white text-center mt-2 mb-4">Simplified.</h2>
        <p className="max-w-screen-md mx-auto text-lg text-white text-center mb-8 mt-4"> 
        At Sterling Marketing, we provide you with consultation and strategy upfront.
        All you need to do is contact us, brief us about your business, and we’ll handle it from there. 
        </p>

        {/* Button Component */}
        <div className="font-sans flex justify-center items-center">
          <Button onClick={handleClick} label="Let's Build!" />
        </div>
      </div>

      {/* Section Break */}
      <div className="container flex flex-col max-w-full font-sans text-lg mt-4">
        <p className="text-center mx-auto">
          Click on any of the projects for a briefing.
        </p>
      </div>

      {/* Gallery Section */}
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