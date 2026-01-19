import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Roboto_Mono } from "next/font/google";
import Footer from "./components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "The Cave",
    template: "%s | The Cave",
  },
  description: "Home of the 1%",

  metadataBase: new URL("https://thecavecalls.com"),

  openGraph: {
    title: "The Cave",
    description: "Home of the 1%",
    url: "https://thecavecalls.com",
    siteName: "The Cave",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "The Cave",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Cave",
    description: "Home of the 1%",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
