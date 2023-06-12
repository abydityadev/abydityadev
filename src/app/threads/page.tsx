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
                                        <span className="badge text-bg-primary"># {tag}</span>
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
