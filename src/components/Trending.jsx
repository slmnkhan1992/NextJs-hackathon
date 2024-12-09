import Image from 'next/image'
import trending1 from '@/asset/trending 1.png'
import trending2 from '@/asset/trending 2.png'
import trending3 from '@/asset/trending 3.png'
import trending4 from '@/asset/trending 4.png'


import React from 'react'

function Trending() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={trending1}
            alt=""
            className="w-full h-58 object-cover"
          />
          <div className="p-4 flex justify-between align-center">
            <h2 className="text-sm font-semibold text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
            <p className="text-sm text-gray-300 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={trending2}
            alt=""
            className="w-full h-[290px] object-cover"
          />
          <div className="p-4 flex justify-between align-center">
            <h2 className="text-sm font-semibold text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
            <p className="text-sm text-gray-300 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={trending3}
            alt=""
            className="w-full h-58 object-cover"
          />
          <div className="p-4 flex justify-between align-center">
            <h2 className="text-sm font-semibold text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
            <p className="text-sm text-gray-300 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={trending4}
            alt=""
            className="w-full h-72 object-cover"
          />
          <div className="p-4 flex justify-between align-center">
            <h2 className="text-sm font-semibold text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
            <p className="text-sm text-gray-300 mb-4 text-center">$68.87</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Trending