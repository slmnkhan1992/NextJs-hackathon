import React from 'react'
import Image from 'next/image'
import hero1 from '@/asset/hero1.png'
import hero2 from '@/asset/hero2.png'

function HeroSection1() {
  return (
    <div className="bg-[#e6e9fd] h-[364px] flex justify-evenly">
        <div>
          <Image src={hero1} alt='' width={387} height={387} className='w-[250px]'/>
        </div>

        <div className='flex flex-col justify-center'> 
          <p className='text-[#fb2e86]'>Best Furniture For Your Castle</p>
          <h1 className='text-[40px] font-bold'>New Furniture Collection <br /> Trends in 2020</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magna in est adipisci <br /> molestias iusto dolores.</p>
          <button className='bg-[#fb2e86] text-white w-[90px] px-2 py-1'>Shop Now</button>
        </div>

        <div className='flex'>
          <Image src={hero2} alt='' width={700} height={700} className='w-[300px]'/>
        </div>


      </div>
  )
}

export default HeroSection1
