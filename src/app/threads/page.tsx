import React from 'react'
import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/Extra/PostMetadata';
import { Title } from '@/components/Extra';

const getPostMetadata = (): PostMetadata[] => {
    const files = fs.readdirSync("src/posts/");
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            tag: matterResult.data.tag,
            slug: fileName.replace(".md", "")
        }
    });

    return posts;
}

export default function page() {
    const postMetadata = getPostMetadata();
    return (
        <div>
            <section className='threads container'>
                <Title label="threads" number="001" />
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {postMetadata.map((post) => (
                        <div className="col" key={post.slug}>
                            <Link href={`/threads/${post.slug}`} className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><u>{post.slug.replaceAll("-", " ")}</u> <span>[ {post.date} ]</span></h5>
                                    <p className="card-text">{post.subtitle}</p>
                                    <span className="badge text-bg-primary"># {post.tag}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section >
        </div>
    )
}
