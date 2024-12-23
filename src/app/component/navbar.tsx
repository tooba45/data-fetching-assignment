import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-slate-400'>
       <nav className='flex text-white text-xl gap-10 justify-end  p-4 '>
        <Link href="/" className='hover:underline'>Home</Link>
        <Link href="/clientside" className='hover:underline'>ClientSide</Link>
        <Link href="/serverside" className='hover:underline'>ServerSide</Link>
        </nav>
    </div>
  )
}

export default Navbar
