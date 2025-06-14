import React from 'react';

const Card = ({ id, title, value, selectedId, setSelectedId }) => {
  const isSelected = selectedId === id;

  return (
    <div
      onClick={() => setSelectedId(id)}
      className={`w-full p-6 rounded-xl cursor-pointer transition-all duration-300 border-2
        ${
          isSelected 
            ? 'bg-white border-black shadow-md' 
            : 'bg-gray-100 border-gray-100 hover:border-gray-300'
        }`}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h1 className={`text-lg font-semibold ${
            isSelected ? 'text-black' : 'text-gray-800'
          }`}>
            {title}
          </h1>
          
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isSelected ? 'bg-gray-100' : 'bg-white'
          }`}>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke={isSelected ? "#000000" : "#6B7280"} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className={`text-4xl font-bold ${
          isSelected ? 'text-black' : 'text-gray-900'
        }`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default Card;