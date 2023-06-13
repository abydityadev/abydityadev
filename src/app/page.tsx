import { Title } from '@/components/Extra'
import { Navbar, Landing, About, Repo } from '@/components/UI'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Abyditya',
    template: '%s | Abyditya'
  },
  description: "I'm Abyditya, A Website developer. I love to create something simple and clean.",
  openGraph: {
    title: 'Abyan Raditya',
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

export default function page() {
  return (
    <>
      <section className='Landing'>
        <Landing />
      </section>
      <section className='About'>
        <Title label="Who am i?" number="001" />
        <About />
      </section>
      <section className='Repo'>
        <Title label="Latest Repo" number="002" />
        <Repo />
      </section>
    </>
  )
}
