import React from 'react'
import sidebarData from './sidebardata'
import Link from 'next/link'

const Sidebar = () => {
  return (
     <div className="hidden sm:block h-screen rounded p-4 bg-gray-100 w-16 md:w-40 lg:w-64 xl:w-80">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        
        <h1 className="text-2xl font-semibold hidden lg:block">Dash<span className="text-[#0F9E99]">Pilot</span></h1>
      </div>

      {/* Sidebar Menu */}
      {sidebarData.map((section, i) => (
        <div key={i} className="mb-6">
          <h4 className="text-lg  mb-5 font-semibold text-black">{section.title}</h4>
          <ul className="space-y-2 ">
            {section.items.map((item, idx) => (
              <Link href='' key={idx} className="flex items-center gap-2 text-sm text-gray-400  cursor-pointer">
               <span> {item.icon}</span>
                <a href={item.link} className="hidden md:inline-block">{item.label}</a>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Sidebar