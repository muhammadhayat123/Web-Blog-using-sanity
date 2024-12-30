import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'


const Navbar = () => {
  return (
    <div>
      <nav className='w-ful relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
        <Link href="/About" className='font-bold text-3xl'>
        HAYAT<span className='text-primary'>BLOG</span>
        </Link>

        <ModeToggle/>
        
      

      </nav>
    </div>
  )
}

export default Navbar
