"use client"

import '@/assets/css/globals.css'
import '@/assets/css/utilities.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from 'react'

import { Navbar } from '@/components/UI'
import Footer from '@/components/UI/Footer'

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
