import 'highlight.js/styles/github-dark.css'; // Import your favorite highlight.js theme

import { fetchPost, fetchPosts } from "@/lib/devto/fetch";
import { renderMarkdown } from "@/lib/markdown";
import Link from 'next/link';
import { Metadata } from 'next';

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