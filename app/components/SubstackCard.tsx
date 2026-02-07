"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaImage, FaExternalLinkAlt } from "react-icons/fa";

interface SubstackCardProps {
  url: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  isFeatured?: boolean;
  className?: string;
}

export default function SubstackCard({
  url,
  title,
  excerpt,
  author,
  role,
  isFeatured = false,
  className = "",
}: SubstackCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Lazy load thumbnail on component mount
  useEffect(() => {
    fetchThumbnail();
  }, [url]);

  async function fetchThumbnail() {
    try {
      setIsLoading(true);
      setHasError(false);

      const response = await fetch(
        `/api/substack-preview?url=${encodeURIComponent(url)}`,
      );
      const data = await response.json();

      if (data.success && data.image) {
        setThumbnail(data.image);
      }
    } catch (error) {
      console.error("Failed to fetch thumbnail:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-xl p-6 border transition-all duration-300 flex flex-col h-full group hover:no-underline ${
        isFeatured
          ? "border-[#EBCB4B] shadow-[0_0_15px_rgba(235,203,75,0.15)]"
          : "border-gray-200 hover:border-[#EBCB4B] hover:shadow-lg"
      } ${className}`}
    >
      {/* Thumbnail with progressive loading */}
      <div className="relative w-full aspect-4/3 bg-gray-100 rounded-lg mb-6 overflow-hidden">
        {thumbnail && !isLoading && !hasError ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
            onError={() => {
              setThumbnail(null);
              setHasError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
            <FaImage className="text-4xl text-gray-400 mb-3 opacity-60" />
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              </div>
            ) : (
              <span className="text-sm text-gray-500">
                No thumbnail available
              </span>
            )}
          </div>
        )}

        {/* Substack badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
          <span className="text-xs font-semibold text-gray-700">Substack</span>
          <FaExternalLinkAlt className="text-xs text-gray-500" />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-[#EBCB4B] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-8 leading-relaxed">
          {excerpt}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="text-base font-bold text-black">{author}</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {role}
          </p>
        </div>

        {/* Read indicator */}
        <span className="text-xs text-gray-400 group-hover:text-[#EBCB4B] transition-colors">
          Read article →
        </span>
      </div>
    </Link>
  );
}
