import React from 'react'
import Page1Card from '@/components/page1Card'

function Page1() {
  return (
    <div>
      <br />
      <div className='bg-[#e6e9fd] h-36 flex flex-col justify-center align-center text-center'>
        <h1 className='text-xl font-extrabold'>Shop Grid Default</h1>
        <p>Home . Page . <span className='text-[#fb2e86]'>Shop Grid Default</span></p>

      </div>
      <br />
      <br />
      <h1 className='text-left m-[20px] text-2xl font-bold'>Ecommerce Accessories & Fashion item</h1>
      <div className='flex align-center justify-evenly'>
        <p>About 9.787 results (2.4 className='flex' seconds)</p>
        <p className='flex'>Per page <span className='flex border-2'><input type="text" className='w-20' /></span></p>
        <p className='flex'>Sort by: <span className='border-2'><input type="text" className='w-20' /></span></p>
        <p className='flex'>View: <span className='border-2'><input type="text" className='w-20' /></span></p>

      </div>
      <br />
      <br />
      <Page1Card />
    </div>
  )
}

export default Page1