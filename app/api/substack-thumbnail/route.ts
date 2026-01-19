// app/api/substack-thumbnail/route.ts
import { NextRequest, NextResponse } from "next/server";

// Simple in-memory cache
const cache = new Map();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ image: null });
  }

  // Check cache (30 minutes)
  const cacheKey = url;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < 30 * 60 * 1000) {
    return NextResponse.json({ image: cached.image });
  }

  try {
    // Only fetch for Substack URLs
    if (!url.includes("substack.com")) {
      return NextResponse.json({ image: null });
    }

    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LinkPreview/1.0)",
      },
    });

    const html = await res.text();

    // Extract just the OG image
    const ogImageMatch = html.match(
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i,
    );
    const image = ogImageMatch ? ogImageMatch[1] : null;

    // Cache if we found an image
    if (image) {
      cache.set(cacheKey, { image, timestamp: Date.now() });
    }

    return NextResponse.json({ image });
  } catch (error) {
    console.error("Failed to fetch thumbnail:", error);
    return NextResponse.json({ image: null });
  }
}
