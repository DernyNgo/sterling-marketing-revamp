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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Sterling MKTG" />
        <meta property="og:description" content="Custom marketing solutions for your business." />
        <meta property="og:image" content="/images/preview.jpg" />
        <meta property="og:url" content="https://www.sterlingmarketing.co/" />
        <meta property="og:type" content="website" />
        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sterling MKTG" />
        <meta name="twitter:description" content="Custom marketing solutions for your business." />
        <meta name="twitter:image" content="/images/preview.jpg" />
        <meta name="twitter:url" content="https://www.sterlingmarketing.co/" />

      </head>
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

