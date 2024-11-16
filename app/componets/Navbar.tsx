import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='p-10 bg-blue-950 text-white'>
    <nav className='flex justify-betwee items-center'>
        <Link href="/"> <img src='/logo.png' className="rounded-full" width={100}/></Link>
    </nav>
    </header>
  )
}

export default Navbar