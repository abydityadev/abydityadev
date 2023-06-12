"use client"

import '@/assets/css/globals.css'
import '@/assets/css/utilities.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Metadata } from 'next'
import { useEffect } from 'react'

import { Navbar } from '@/components/UI'
import Footer from '@/components/UI/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Abyditya',
    template: '%s | Abyditya'
  },
  description: "I'm Abyditya, A Website developer. I love to create something simple and clean.",
  openGraph: {
    title: 'Abyditya',
    url: 'https://abyditya.space',
    siteName: 'Abyditya',
    locale: 'en-US',
    type: 'website',
    description: "I'm Abyditya, A Website developer. I love to create something simple and clean.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Abyditya',
    card: 'summary_large_image',
    description: "I'm Abyditya, A Website developer. I love to create something simple and clean."
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap')
  })

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
