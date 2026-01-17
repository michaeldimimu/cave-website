import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed h-20 bg-black border-b border-[#EFC738] text-white px-[80px] top-0 left-0 right-0 z-50">
      <nav>
        <ul className="flex items-center text-sm">
          <li className="w-full self-start">
            <Link href="/">
              <div className="w-18 h-18">
                <Image
                  src="/cave-logo.png"
                  alt="The Cave Logo"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          </li>
          <div className="flex items-center w-full justify-between">
            <li className="hover:text-[#EFC738] transition-all duration-300 ease-in-out">
              <Link href="/pathway">The Path</Link>
            </li>
            <li className="hover:text-[#EFC738] transition-all duration-300 ease-in-out">
              <Link href="/the-cave">The School</Link>
            </li>
            <li className="hover:text-[#EFC738] transition-all duration-300 ease-in-out">
              <Link href="/contact">The Infrastructure</Link>
            </li>
            <li className="hover:text-[#EFC738] transition-all duration-300 ease-in-out">
              <Link href="/contact">The Archive</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
