"use client"
import "../app/globals.css"
import React from "react"
import Header from "../components/Header"
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <main className="relative flex flex-col h-screen text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact_page_bg.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="sm:object-[center_top] md:object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full text-center">
        <Header transparent={true} />
        <div className="flex flex-col justify-center items-center mt-32 sm:mt-40">
          <h2 className="text-lg font-sans mb-5">
            For new commissions, please contact:
          </h2>
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

export default Contact;
