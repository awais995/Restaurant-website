"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Sindhi Zaika</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
        <ul className={`flex flex-col items-center md:flex-row md:items-center md:space-x-4 absolute md:static top-1 left-0 right-0 bg-gray-800 md:bg-transparent transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
        <button onClick={toggleMenu} className="text-white focus:outline-none mt-2 ml-60 sm:ml-[600px] md:ml-0 md:hidden">
            <div className="space-y-1.5 mt-2 pr-5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
          <li onClick={toggleMenu} className="md:mt-0 mt-4">
            <Link href="/" className="text-white block px-4 py-1">Home</Link>
          </li>

          <li onClick={toggleMenu} className="md:mt-0 mt-4">
            <Link href="/about" className="text-white block px-4 py-1">About</Link>
          </li>

          <li onClick={toggleMenu} className="md:mt-0 mt-4">
            <Link href="/Menu" className="text-white block px-4 py-1">Menu</Link>
          </li>

          <li onClick={toggleMenu} className="md:mt-0 mt-4">
            <Link href="/gallery" className="text-white block px-4 py-1">Gallery</Link>
          </li>
          
          <li onClick={toggleMenu} className="md:mt-0 mt-4">
            <Link href="/contact" className="text-white block px-4 py-1">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
