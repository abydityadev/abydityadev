import { Title } from '@/components/Extra'
import { Blog } from '@/components/UI'
import { Metadata } from 'next'
import React from 'react'
import { fetchPosts } from "@/lib/devto/fetch";
import Link from 'next/link';

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

export default async function page() {
    const posts = await fetchPosts();

    return (
        <>
            <section className='threads container'>
                <Title label="threads" number="001" />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {posts.map((t) => (
                        <div className="col" key={t.id}>
                            <Link href={`/threads/${t.slug}`} className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><u>{t.title}</u> <span>[ {t.readable_publish_date} # {t.reading_time_minutes} min read ]</span></h5>
                                    <p className="card-text">{t.description}</p>
                                    {t.tag_list.map((tag) => (
                                        <span key={tag} className="badge text-bg-primary"># {tag}</span>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
