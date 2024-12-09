import Image from 'next/image'
import HeroSection1 from '@/components/HeroSection1'
import HeroSection2 from '@/components/HeroSection2'
import HeroSection3 from '@/components/HeroSection3'
import HeroSection4 from '@/components/HeroSection4'
import FeaturedProducts from '@/components/FeaturedProducts'
import LatestProducts from '@/components/LatestProducts'
import Trending from '@/components/Trending'  
import Shopex from '@/components/Shopex'

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <HeroSection1 />

      {/* Featured Products */}
      <h1 className='text-center m-[20px] text-2xl font-bold'>Featured Products</h1>
      <FeaturedProducts />

      {/* Latest Products */}
      <br />
      <br />
      <br />
      <h1 className='text-center  text-2xl font-bold '>Latest Products</h1>
      <br />
      <ul className='flex justify-center gap-6 align-center'>
        <li className='text-[#fb2e86]'>New Arrival</li>
        <li>Best Selling</li>
        <li>Featured</li>
        <li>Special offer</li>
      </ul>
      <br />
      <LatestProducts />


      {/* Shopex */}
      <br />
      <br />
      <br />
      <h1 className='text-center m-[20px] text-2xl font-bold'>What Shopex Offer</h1>
      <Shopex />
      <br />
      <br />
      <br />

      
      {/* Hero Section 2 */}
      <HeroSection2 />

       {/* Trending Products */}
       <br/>
       <br />
       <h1 className='text-center m-[20px] text-2xl font-bold'>Trending Products</h1>
       <Trending />


       {/* Hero Section 2 */}
       <br />
       <br />
       <h1 className='text-center m-[20px] text-2xl font-bold'>Discount Item</h1>
       <ul className='flex justify-center gap-6 align-center'>
        <li className='text-[#fb2e86]'>Wood Chair</li>
        <li>Plastic Chair</li>
        <li>Sofa collection</li>
      </ul>
      <HeroSection3 />


      
      {/* Hero Section  4*/}
      <br />
      <br />
      <br />
      <HeroSection4 />
      <br />
      <br />
      
    </div>
  );


}
