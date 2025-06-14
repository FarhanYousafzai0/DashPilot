"use client";

import React, { useState } from 'react';
import sidebarData from './sidebardata';
import Link from 'next/link';

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState('0-0'); // Default: first item of first section

  return (
    <div className="hidden sm:block h-screen rounded p-4 bg-gray-100 w-16 md:w-40 lg:w-64 xl:w-80">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-semibold hidden lg:block">
          Dash<span className="text-[#0F9E99]">Pilot</span>
        </h1>
      </div>

      {/* Sidebar Menu */}
      {sidebarData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h4 className="text-lg mb-5 font-semibold text-black">{section.title}</h4>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => {
              const itemId = `${sectionIndex}-${itemIndex}`;
              const isSelected = selectedId === itemId;

              return (
                <li key={itemId}>
                  <Link
                    href={item.link}
                    onClick={() => setSelectedId(itemId)}
                    className={`flex items-center gap-2 p-2 rounded text-sm cursor-pointer transition-all
                      ${isSelected ? 'bg-green-800 text-white' : 'text-gray-500 hover:bg-green-800 hover:text-white'}
                    `}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden md:inline-block">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
