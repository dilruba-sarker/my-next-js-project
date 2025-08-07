import Link from 'next/link';
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Learn Next.js 15.0",
    slug: "nextjs-course",
    from: "homepage"
  },
  {
    id: 2,
    title: "Tailwind CSS Guide",
    slug: "tailwind-guide",
    from: "newsletter"
  },
  {
    id: 3,
    title: "Master React Hooks",
    slug: "react-hooks",
    from: "twitter"
  }
];

const BlokPage = () => {
  return (
    <div>
      <h1>Blog Posts are:</h1>
      <ul>
        {
          blogPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blok/${post.slug}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default BlokPage;
