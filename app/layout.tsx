import type { Metadata } from "next"
import "./globals.css"
import { Poppins, Esteban } from 'next/font/google'

// Import Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const esteban = Esteban({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-esteban',
  display: 'swap',
})

// Metadata for the page
export const metadata: Metadata = {
  title: "Sterling MKTG",
  description: "Custom marketing solutions for your business.",
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body 
        className={`
          ${poppins.className} 
          ${esteban.className} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}

