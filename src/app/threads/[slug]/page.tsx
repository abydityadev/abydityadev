import 'highlight.js/styles/github-dark.css'; // Import your favorite highlight.js theme

import { fetchPost, fetchPosts } from "@/lib/devto/fetch";
import { renderMarkdown } from "@/lib/markdown";
import Link from 'next/link';

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const { title, description } = await fetchPost(params.slug);

    return {
        title,
        description,
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { body_markdown } = await fetchPost(params.slug);

    const content = await renderMarkdown(body_markdown);

    return (
        <>
            <article>
                <div className="container blogcontent">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link href={'/threads'} className="btn btn-primary" type="button">Go Back</Link>
                    </div>
                </div>
            </article>
        </>
    );
}