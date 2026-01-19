// components/WritingCard.tsx (Enhanced with workarounds)
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaImage, FaExternalLinkAlt } from "react-icons/fa";

interface WritingCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  isFeatured?: boolean;
  substackUrl?: string;
}

export default function WritingCard({
  title,
  excerpt,
  author,
  role,
  isFeatured = false,
  substackUrl,
}: WritingCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(!!substackUrl);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }, // Load 100px before entering viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fetch thumbnail when card becomes visible
  useEffect(() => {
    if (isVisible && substackUrl && !thumbnail) {
      fetchThumbnail();
    }
  }, [isVisible, substackUrl]);

  async function fetchThumbnail() {
    try {
      setIsLoading(true);
      setImageError(false);

      // Add cache busting parameter
      const cacheBuster = `&cb=${Date.now()}`;
      const response = await fetch(
        `/api/substack-thumbnail?url=${encodeURIComponent(substackUrl!)}${cacheBuster}`,
      );

      const data = await response.json();

      if (data.image) {
        setThumbnail(data.image);
      }
    } catch (error) {
      console.error("Failed to fetch thumbnail:", error);
      setImageError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const getSubstackLink = () => {
    if (substackUrl) return substackUrl;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `https://open.substack.com/pub/example/p/${slug}`;
  };

  return (
    <Link
      ref={cardRef}
      href={getSubstackLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-xl p-6 border transition-all duration-300 flex flex-col h-full hover:no-underline group ${
        isFeatured
          ? "border-[#EBCB4B] shadow-[0_0_15px_rgba(235,203,75,0.15)]"
          : "border-gray-200 hover:border-[#EBCB4B] hover:shadow-lg"
      }`}
    >
      <div className="w-full aspect-4/3 bg-gray-100 rounded-lg mb-6 overflow-hidden relative">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            thumbnail && !imageError ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(110deg, #f0f0f0 8%, #f8f8f8 18%, #f0f0f0 33%)",
            backgroundSize: "200% 100%",
            animation: isLoading ? "shimmer 1.5s infinite" : "none",
          }}
        />

        {thumbnail && !imageError && (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover relative z-10"
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {(!thumbnail || imageError) && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <FaImage className="text-4xl text-gray-400 mb-3 mx-auto opacity-50" />
            <p className="text-sm text-gray-500">No preview available</p>
          </div>
        )}

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      <div className="mt-auto pt-4 border-t border-gray-100">
        <h4 className="text-base font-bold text-black">{author}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{role}</p>
      </div>
    </Link>
  );
}
