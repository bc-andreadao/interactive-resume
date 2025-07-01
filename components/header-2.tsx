'use client';

import { useState } from 'react'

import Link from 'next/link'
export const Header = () => {
  const [ dropdown, showDropdown] = useState(false)

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">


        <ul className="flex space-x-8">
          <li>
            <Link href="/" >
              Home
            </Link>
          </li>

          <li className="relative"  onMouseLeave={ () => showDropdown(false) } >
            <button onMouseEnter={ () => showDropdown(true) }>Lifestyle</button>

=
              <div  className={`absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg ${dropdown ? 'block' : 'hidden'}`}>
              <Link
                href="/diet"
                className="block px-4 py-2"
              >
                My Recipes
              </Link>
              <Link
                href="/schedule"
                className="block px-4 py-2"
              >
                Schedule
              </Link>
            </div>

          </li>


          <li>
            <Link href="/resume" >
              Resume
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;