"use client";

import { useEffect } from "react";
import SubstackCard from "./SubstackCard";

interface SubstackPost {
  url: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  isFeatured?: boolean;
}

interface SubstackGridProps {
  posts: SubstackPost[];
}

export default function SubstackGrid({ posts }: SubstackGridProps) {
  // Prefetch thumbnails for first few posts
  useEffect(() => {
    const prefetchUrls = posts.slice(0, 3).map((post) => post.url);

    prefetchUrls.forEach((url) => {
      // Trigger fetch but don't wait for it
      fetch(`/api/substack-preview?url=${encodeURIComponent(url)}`).catch(
        () => {
          // Silent fail - component will handle fallback
        },
      );
    });
  }, [posts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <SubstackCard
          key={index}
          url={post.url}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          role={post.role}
          isFeatured={post.isFeatured}
        />
      ))}
    </div>
  );
}
