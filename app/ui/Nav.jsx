import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
      <div className=' h-[70px] px-5 bg-blue-500 text-white flex items-center justify-between '>

<h1>DashPilot</h1>
{/* Logo */}
        
        <div className='flex items-center gap-3'>
            <Link href='/home'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/service'>Service</Link>
        <Link href=''>Help</Link>

        </div>
      </div>
    </>
  )
}

export default Nav
