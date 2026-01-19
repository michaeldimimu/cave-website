import Image from "next/image";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#EFC738] text-white px-6 md:px-[80px] z-50 py-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-20 h-20 relative shrink-0">
          <Image
            src="/cave-logo.png"
            alt="The Cave Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-around w-full gap-10 md:gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[#EFC738]">Explore</h3>
            <ul className="flex text-sm flex-col gap-3 text-gray-300">
              <li>
                <Link
                  className="hover:text-[#EFC738] transition-colors"
                  href="/cave"
                >
                  The Cave
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#EFC738] transition-colors"
                  href="/path"
                >
                  The Path
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#EFC738] transition-colors"
                  href="/schools"
                >
                  Schools
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-[#EFC738] transition-colors"
                  href="/archive"
                >
                  The Archive
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[#EFC738]">Connect</h3>
            <ul className="flex text-sm flex-col gap-3 text-gray-300">
              <li>
                <Link
                  href="https://www.instagram.com/thecavecalls?igsh=MXJrNzY0bGE4Yml4cA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded transition-all duration-300 group-hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]">
                    <FaInstagramSquare
                      size={20}
                      className="transition-colors duration-300 group-hover:text-white"
                    />
                  </span>

                  <span className="group-hover:text-[#d62976] transition-colors duration-300">
                    Instagram
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className="group flex items-center gap-2 transition-all duration-300"
                  href="https://www.youtube.com/@TheCaveCalls"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    <FaYoutube
                      size={20}
                      className="transition-colors duration-300 group-hover:text-red-600"
                    />
                  </span>
                  <span className="group-hover:text-red-600 transition-colors duration-300">
                    YouTube
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        <p>© Copyright 2026 The Cave. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
