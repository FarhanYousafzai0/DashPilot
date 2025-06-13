import Link from 'next/link';
import React from 'react';

const Card = ({
  title,
  description,
  id,
  price,
  imageUrl,
  tags = [],
  rating,
  colors = []
}) => {
  return (
    <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
      {/* Gradient top border */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      {/* Card image */}
      <div className="h-64 relative overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
          
        />
        {/* Rating badge */}
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-semibold text-gray-800">{rating}</span>
          </div>
        )}
      </div>
      
      {/* Card content */}
      <div className="p-6">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="text-lg font-bold text-indigo-600">{price}</span>
        </div>
        
        {/* Color options */}
        {colors.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-gray-500 mb-1">Colors:</p>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <span 
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-200"
                  style={{ 
                    backgroundColor: color.toLowerCase().includes('white') ? '#fff' : 
                                   color.toLowerCase().includes('black') ? '#000' : 
                                   color.toLowerCase().includes('red') ? '#f00' : 
                                   color.toLowerCase().includes('slate') ? '#64748b' : 
                                   color.toLowerCase().includes('carbon') ? '#404040' : '#e5e7eb'
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{description}</p>
        
        {/* Button */}
        <Link href={`/singleproduct/${id}`}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Card;