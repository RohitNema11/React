'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/android-chrome-192x192.png'; // Adjust the path as necessary

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 m-0">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" className="w-8 h-8" width={32} height={32} />
          <span className="text-2xl font-bold">Flickwise</span>
        </Link>
      </div>

      <div className="flex items-center gap-6 relative">
        <Link href="/" className="hover:text-blue-300 hover:scale-105">Home</Link>
        <Link href="/contact" className="hover:text-blue-300 hover:scale-105">Contact</Link>
        <Link href="/watchlist" className="hover:text-blue-300 hover:scale-105">Watchlist</Link>

        <div
          className="hover:text-blue-300 cursor-pointer hover:scale-105"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Genres ▼
        </div>

        {isDropdownOpen && (
          <div className="absolute top-full mt-2 right-0 bg-white text-black rounded-md flex flex-col w-40 z-50">
            <Link href="/action" className="hover:bg-slate-300 px-4 py-2">Action</Link>
            <Link href="/comedy" className="hover:bg-slate-300 px-4 py-2">Comedy</Link>
            <Link href="/thriller" className="hover:bg-slate-300 px-4 py-2">Thriller</Link>
            <Link href="/horror" className="hover:bg-slate-300 px-4 py-2">Horror</Link>
            <Link href="/crime" className="hover:bg-slate-300 px-4 py-2">Crime</Link>
            <Link href="/family" className="hover:bg-slate-300 px-4 py-2">Family</Link>
            <Link href="/animated" className="hover:bg-slate-300 px-4 py-2">Animated</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
