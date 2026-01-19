"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function InstagramLazyEmbed() {
  const [loadEmbed, setLoadEmbed] = useState(false);

  useEffect(() => {
    if (!loadEmbed) return;

    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [loadEmbed]);

  return (
    <div className="relative w-full max-w-[1440px] mx-auto h-[50vh] md:h-[85vh] overflow-hidden group">
      {!loadEmbed ? (
        <>
          {/* Static Thumbnail */}
          <Image
            src="/pathway-hero.png"
            alt="Instagram Reel Preview"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

          {/* Play Button */}
          <div
            onClick={() => setLoadEmbed(true)}
            className="absolute cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out
                       top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <Image
              src="/play-button.png"
              alt="Play Reel"
              width={80}
              height={80}
              className="w-16 h-16 md:w-[100px] md:h-[100px]"
            />
          </div>
        </>
      ) : (
        /* Instagram Embed (loaded on click) */
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DLNibCJNTxx/"
          data-instgrm-version="14"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
