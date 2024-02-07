'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import HandcraftedHavenLogo from './handcraftedhavenlogo';


    

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
  return (   
    <nav className="bg-light fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <HandcraftedHavenLogo />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-8 md:flex`}>
          <Link href="/" className='text-dark hover:text-gray-700'>Home</Link>
          <Link href="/products" className='text-dark hover:text-gray-700'>Products</Link>
          <Link href="/sellers" className='text-dark hover:text-gray-700'>Sellers</Link>
        
        </div>
      </div>
    </nav>
  );
};