import React from 'react'
import Image from 'next/image'
import hero4 from '@/asset/her04.png'

function HeroSection3() {
  return (
    <div className="h-[364px] flex justify-evenly">
        
        <div className='flex flex-col justify-center'> 
          <h1 className='text-[40px] font-bold'>20% Discount of All Products</h1>
          <p className='text-[#fb2e86]'>Earn Sofa Compact</p>
          <br />
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magna in est adipisci <br /> molestias iusto dolores.</p>
          <br />
          <button className='bg-[#fb2e86] text-white w-[120px] px-2 py-1'>Shop Now</button>
        </div>

        <div>
          <Image src={hero4} alt='' width={387} height={387} className='w-[490px]'/>
        </div>


      </div>
  )
}

export default HeroSection3
