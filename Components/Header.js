import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-16 px-5 text-white bg-red-500 flex items-center justify-between'>
        <h2>Logo</h2>
        <div className='flex gap-8'>
            <Link href="/About">About</Link>
            <Link href="/Courses">Courses</Link>
            <Link href="/Products">Products</Link>
            
        </div>
    </div>
  )
}

export default Header