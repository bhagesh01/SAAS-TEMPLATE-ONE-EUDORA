"use client";

import Image from 'next/image';
import MenuIcon from '../assets/icons/menu.svg';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black w-full pb-4">
      <div className="w-full max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between py-4 relative">
          
          {/* Logo with gradient glow */}
          <div className="relative z-10">
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#57284f)] blur-lg rounded-full top-2 -z-10"></div>
            <Image src="/logo.svg" alt="logo" height={40} width={40} />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex items-center gap-6 text-white">
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">About</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Features</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Customers</a>
            <button className="bg-white text-black py-2 px-4 rounded-lg">Get for free</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg">
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white cursor-pointer" />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="sm:hidden text-white flex flex-col gap-4 py-4">
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">About</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Features</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 hover:text-opacity-100 transition">Customers</a>
            <button className="bg-white text-black py-2 px-4 rounded-lg w-max">Get for free</button>
          </div>
        )}
      </div>
    </header>
  );
};
