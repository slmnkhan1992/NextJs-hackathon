import Image from 'next/image'
import shopex1 from '@/asset/shopex1.png'
import shopex2 from '@/asset/shopex2.png'
import shopex3 from '@/asset/shopex3.png'
import shopex4 from '@/asset/shopex4.png'


import React from 'react'

function Shopex() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={shopex1}
            alt=""
            className="w-14 h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center">24/7 Support</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet in pariatur, aliquid dicta recusandae est doloribus quos nisi nulla fugiat voluptatum eos inventore, quae rerum quo minus esse obcaecati.</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={shopex2}
            alt=""
            className="w-14 h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center">24/7 Support</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet in pariatur, aliquid dicta recusandae est doloribus quos nisi nulla fugiat voluptatum eos inventore, quae rerum quo minus esse obcaecati.</p>
          </div>
        </div>


        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={shopex3}
            alt=""
            className="w-14 h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center">24/7 Support</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet in pariatur, aliquid dicta recusandae est doloribus quos nisi nulla fugiat voluptatum eos inventore, quae rerum quo minus esse obcaecati.</p>
          </div>
        </div>


        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={shopex4}
            alt=""
            className="w-14 h-58 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center">24/7 Support</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet in pariatur, aliquid dicta recusandae est doloribus quos nisi nulla fugiat voluptatum eos inventore, quae rerum quo minus esse obcaecati.</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Shopex