import { CircleArrowOutUpRight } from 'lucide-react';
import React from 'react';

const Card = ({ id, title, value, selectedId, setSelectedId, icon,growth }) => {
  const isSelected = selectedId === id;

  return (
    <div
      onClick={() => setSelectedId(id)}
      className={`w-full p-4 shadow-xl rounded-lg cursor-pointer transition-all duration-300 ${
        isSelected ? 'bg-green-800 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <div className='flex flex-col gap-3 w-full'>
        {/* Title and Icon */}
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-lg font-semibold'>{title}</h1>
            <CircleArrowOutUpRight />
          
        </div>

        {/* Value */}
        <p className='text-5xl'>{value}</p>

        <p className='text-sm '>{growth}</p>

      </div>
    </div>
  );
};

export default Card;
