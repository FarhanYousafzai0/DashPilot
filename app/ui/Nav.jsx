import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
      <div className=' h-[70px] px-5 bg-blue-500 text-white flex items-center justify-between '>

<h1>DashPilot</h1>
{/* Logo */}
        
        <div className='flex items-center gap-3'>
            <Link href='/about'>Home</Link>
        <Link href=''>About</Link>
        <Link href=''>Service</Link>
        <Link href=''>Help</Link>

        </div>
      </div>
    </>
  )
}

export default Nav
