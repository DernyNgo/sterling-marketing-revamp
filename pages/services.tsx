"use client"

import "../app/globals.css"
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Image from "next/image"
import "@fontsource/esteban"

const Services: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = "/contact"
  }

  const services = [
    {
      title: "Website Development",
      description: "Your website is your resume. Without an up-to-date and convincing website, you’re potentially missing out on a lot of sales. We work to build e-commerce sites, portfolios, sites to promote physical businesses, projects, and everything in between.",
      image: "/images/services/service1.png", 
    },
    {
      title: "Consultation",
      description: "Unsure of where to start? Or perhaps you have an idea, but aren’t quite sure of which steps to take next. Hire us for consultation and we’ll draw out a roadmap for your business! This includes market research, strategizing, and much more- depending on the scope of work.",
      image: "/images/services/service2.png",
    },
    {
      title: "Copywriting",
      description: "Do you have an existing business that currently runs advertisements without your desired ROI or conversion rates? We’ll get your e-mail, ad, and website word content looking right so you can start looking left.",
      image: "/images/services/service3.png",
    },
    {
      title: "Product Photography",
      description: "Showcase your products professionally with our photography services. Partnering with leading production agencies, we deliver ad-ready, high-quality images that elevate your brand.",
      image: "/images/services/service4.png",
    },
    {
      title: "Branding",
      description: "You’ve taken the initiative to start your own business- and if you’re reading this, you’re curious on what lies ahead. Don’t worry, we’ve got you covered! We’ll do the footwork for you. With our branding strategies, we’ll research your field and your competitors to curate and create a brand identity that will stand out amongst the rest.",
      image: "/images/services/service5.png",
    },
    {
      title: "Social Media Management",
      description: "Wondering what the next move is after you’ve established the core strategies of selling your product or service? We’ll hand pick information and tailor organic content for you to guarantee your business’s visibility.",
      image: "/images/services/service6.png",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header transparent={false} />

      {/* Main Section */}
      <section className="px-4 py-12 w-full">
        <h1 className="flex justify-center font-sans text-5xl text-center font-medium mb-14 mt-32">
          Our Services
        </h1>

        {/* Service Grid */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col text-center items-center">
              <Image
                src={service.image}
                alt={service.title}
                width={430} // Replace with your desired width
                height={340} // Replace with your desired height
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h2 className="font-sans text-3xl font-normal mb-6">
                {service.title}
              </h2>
              <p className="font-esteban font-light text-lg text-gray-700 w-[322px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Button Component */}
      <section className="text-center my-12 mb-32">
        <Button onClick={handleContactClick} label="Inquire Now" />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Services
