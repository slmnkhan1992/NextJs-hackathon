import Image from 'next/image'
import latest1 from '@/asset/latest1.png'
import latest2 from '@/asset/latest2.png'
import latest3 from '@/asset/latest3.png'
import latest4 from '@/asset/latest4.png'
import latest5 from '@/asset/latest5.png'
import feature1 from '@/asset/feature1.png'


import React from 'react'

function LatestProducts() {
  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={latest1}
            alt=""
            className="w-full h-58 object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={latest2}
            alt=""
            className="w-full h-[410px] object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={feature1}
            alt=""
            className="w-full h-[410px] object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>

         {/* Card 1 */}
         <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={latest3}
            alt=""
            className="w-full h-[410px] object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>

         {/* Card 1 */}
         <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={latest4}
            alt=""
            className="w-full h-[410px] object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>

         {/* Card 1 */}
         <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={latest5}
            alt=""
            className="w-full h-[410px] object-cover"
          />
          <div className="p-4 flex justify-between">
            <h2 className="text-sm font-semibold text-center">Comfort Hondy Crush</h2>
            <p className="text-sm text-gray-600">$68.87</p>
            <p className="text-sm text-[#fb2e86]">$68.87</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LatestProducts