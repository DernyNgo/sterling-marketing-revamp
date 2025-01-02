import React from "react"


interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={`py-2 font-esteban font-light text-lg ${className}`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sterling Marketing</p>
      </div>
    </div>
  )
}

export default Footer
