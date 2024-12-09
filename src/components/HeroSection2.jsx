import React from 'react'
import Image from 'next/image'
import hero3 from '@/asset/hero3.png'

function HeroSection1() {
  return (
    <div className="bg-[#e6e9fd] h-[364px] flex justify-evenly">
        <div>
          <Image src={hero3} alt='' width={387} height={387} className='w-[350px]'/>
        </div>

        <div className='flex flex-col justify-center'> 
          <h1 className='text-[40px] font-bold'>Unique Furniture Of latest & <br /> Trending Products</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magna in est adipisci <br /> molestias iusto dolores.</p>
          <br />
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magna in est adipisci <br /> molestias iusto dolores.</p>
          <br />
          <button className='bg-[#fb2e86] text-white w-[120px] px-2 py-1'>Add to Cart</button>
        </div>


      </div>
  )
}

export default HeroSection1
