import React from 'react'
import { useParams } from 'react-router-dom'
import gamingHeadphones from '../data'

const ProductPage = async({parrms}) => {
  
const product = await parrms;

console.log(product)


  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-indigo-600 hover:text-indigo-500">Home</a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <a href="/products" className="text-indigo-600 hover:text-indigo-500">Headphones</a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-gray-600">{product.title}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            {/* Thumbnails */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative h-24 bg-white rounded-md overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={product.imageUrl}
                      alt={`${product.title} view ${i}`}
                      className="w-full h-full object-contain object-center"
                    />
                    <div className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-96 object-contain object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-900">{product.title}</h1>

            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${
                      rating < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">
                {product.rating} out of 5 stars
              </p>
            </div>

            <p className="mt-4 text-3xl text-gray-900">{product.price}</p>

            <p className="mt-6 text-gray-600">{product.description}</p>

            {/* Colors */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="absolute -inset-0.5" />
                    <span
                      className={`h-8 w-8 rounded-full border border-black border-opacity-10`}
                      style={{
                        backgroundColor:
                          color.toLowerCase().includes('white') ? '#fff' :
                          color.toLowerCase().includes('black') ? '#000' :
                          color.toLowerCase().includes('red') ? '#f00' :
                          '#e5e7eb'
                      }}
                    />
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {product.tags.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="mt-10">
              <button
                type="button"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to cart
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-lg font-medium text-gray-900">Details</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul>
                  <li>50mm high-density drivers for superior sound</li>
                  <li>Premium memory foam ear cushions</li>
                  <li>Advanced noise-cancellation microphone</li>
                  <li>Multi-platform compatibility</li>
                  <li>Includes carrying case and accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage