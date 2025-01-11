import React from "react";
import Link from "next/link";

const Navbar = () => {
 return (
  <header className="sticky z-10 top-0 bg-gradient-to-r from-zinc-600 to-zinc-900">
   <nav className="mx-auto flex items-center justify-start space-x-4 p-5 text-white">
    <Link href="/about">About Us</Link>
    <Link href="/albums">Album</Link>
    <Link href="/contact">Contact Us</Link>
   </nav>
  </header>
 );
};

export default Navbar;
