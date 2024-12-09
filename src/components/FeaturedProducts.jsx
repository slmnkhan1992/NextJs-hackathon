import feature1 from '@/asset/feature1.png'
import feature2 from '@/asset/feature2.png'
import feature3 from '@/asset/feature3.png'
import feature4 from '@/asset/feature4.png'
import Image from 'next/image'


import React from 'react'

function FeaturedProducts() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={feature1}
            alt=""
            className="w-full h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[#fb2e86] text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Code - y687687</p>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={feature2}
            alt=""
            className="w-full h-[290px] object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[#fb2e86] text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Code - y687687</p>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={feature3}
            alt=""
            className="w-full h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[#fb2e86] text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Code - y687687</p>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={feature4}
            alt=""
            className="w-full h-72 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-[#fb2e86] text-center">Cantilever chair</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Code - y687687</p>
            <p className="text-sm text-gray-600 mb-4 text-center">$68.87</p>
          </div>
        </div>



        
      </div>
    </div>
  )
}

export default FeaturedProducts