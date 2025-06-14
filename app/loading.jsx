import React from 'react'

const loading = () => {
  return (
    <div>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 border-t-gray-600 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-gray-300 border-b-gray-600 animate-spin animation-delay-150"></div>
        </div>
        
        {/* Text with fading animation */}
        <div className="flex space-x-2">
          <span className="text-gray-700 font-medium text-lg animate-pulse">Loading</span>
          <span className="text-gray-700 font-medium text-lg animate-pulse delay-75">.</span>
          <span className="text-gray-700 font-medium text-lg animate-pulse delay-150">.</span>
          <span className="text-gray-700 font-medium text-lg animate-pulse delay-200">.</span>
        </div>
      </div>
    </div>    </div>
  )
}

export default loading
