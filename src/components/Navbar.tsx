"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black bg-opacity-70 p-3 m-4 rounded-[85px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Trubot-logo.png?height=60&width=60" alt="Logo" width={60} height={60} className="rounded-full" />
        </Link>
        
        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center mr-2" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M2 6a1 1 0 011 1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011 1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 4a1 1 0 011 1h14a1 1 0 110 2H3a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Dropdown Menu for Mobile */}
        <ul className={`md:flex ${isMenuOpen ? 'block bg-black' : 'hidden'} bg-opacity-70 space-y-4 md:space-x-4 md:space-y-0 mr-2 absolute md:bg-transparent p-4 md:p-0 rounded-lg md:static top-16 right-4 w-[275px]`}>
          <li>
            <Link href="/" className="text-white hover:text-[#ef9520]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white hover:text-[#ef9520]">
              Products
            </Link>
          </li>
          <li>
            <Link href="/aboutUs" className="text-white hover:text-[#ef9520]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-[#ef9520]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
