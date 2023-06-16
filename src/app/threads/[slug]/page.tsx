import React from 'react'
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter'

const getPostContent = (slug: string) => {
    const folder = "@/src/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
}

export default function page(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <section className='markdown container'>
            <div className="info">
                <h1>{post.data.title}</h1>
                <div className="badge"># {post.data.tag}</div> <div className="badge">{post.data.date}</div>
                <hr />
            </div>
            <Markdown>{post.content}</Markdown>
        </section>
    )
}
