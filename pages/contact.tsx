"use client"
import "../app/globals.css"
import React from "react"
import Header from "../components/Header"
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <main className="relative h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/contact_page_bg.jpg"
          alt="Contact Background"
          layout="fill"  // Makes the image fill the container
          objectFit="cover"  // Ensures the image covers the area
          objectPosition="center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen text-center">
        <Header transparent={true} />
        <div className="mt-52">
          <h2 className="text-lg font-sans mb-10">For new commissions, please contact:</h2>
          <h1 className="text-3xl font-sans font-normal">
            <a
              href="mailto:info@sterlingmarketing.co"
              className="underline"
            >
              info@sterlingmarketing.co
            </a>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Contact
