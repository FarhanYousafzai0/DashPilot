import React from 'react';

const Card = ({ 


}) => {
  return (
    <div className="w-80 bg-white   rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Card image with gradient background */}
      <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent transform rotate-30 opacity-70"></div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        {/* Tags */}
        
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3"></h3>
        
        {/* Text */}
        <p className="text-gray-600 mb-6 leading-relaxed"></p>
        
        {/* Button */}
        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95">
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Card;