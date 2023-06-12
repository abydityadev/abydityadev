import React from 'react'
import { fetchPosts } from '@/lib/devto/fetch'
import Link from 'next/link';

export async function Blog() {
    const posts = await fetchPosts();
    return (
        <>
            {posts.map((t) => (
                <div key={t.id} className="col">
                    <Link href={t.canonical_url} className="card">
                        <div className="card-body">
                            <h5 className="card-title"><Link href={t.canonical_url} target='_blank'>{t.title}</Link> <span>[ {t.readable_publish_date} ]</span></h5>
                            <p className="card-text">{t.description}</p>
                        </div>
                    </Link>
                </div>
            ))
            }
        </>
    )
}
