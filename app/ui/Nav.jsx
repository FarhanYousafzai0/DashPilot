import React from 'react';
import { Avatar } from '@mui/material';
import { Bell, Mail, Search } from 'lucide-react';

const Nav = () => {
  return (
    <div className='w-full h-[70px] bg-gray-100 rounded flex items-center justify-between px-6'>
      {/* Left: Search Bar */}
      <div className='flex items-center gap-3'>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search task"
            className="pl-9 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none w-[250px]"
          />
        </div>
        <span className="text-gray-500 text-sm hidden md:block">⌘ + F</span>
      </div>

      {/* Right: Icons & Profile */}
      <div className='flex items-center gap-5'>
        <div className="p-2 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 " />
        </div>
        <div className="p-2 rounded-full bg-white hover:bg-gray-100 cursor-pointer">
          <Mail className="w-5 h-5 text-gray-600" />
        </div>
        
        {/* User Info */}
        <div className='flex items-center gap-2'>
          <Avatar
            alt="Totok Michael"
            src="/path-to-your-avatar-image.png"
            sx={{ width: 32, height: 32 }}
          />
          <div className="text-sm leading-tight hidden md:block">
            <p className="font-medium text-gray-900">Totok Michael</p>
            <p className="text-gray-500 text-xs">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;