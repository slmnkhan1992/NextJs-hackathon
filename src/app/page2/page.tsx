import React from 'react'
import Image from 'next/image'
import tick from '@/asset/tick.png'

function page2() {
  return (
    <div>
      <br />
      <div className='bg-[#e6e9fd] h-36 flex flex-col justify-center align-center text-center'>
      
        <h1 className='text-xl font-extrabold'>Order Completed</h1>
        <p>Home . Page . <span className='text-[#fb2e86]'>Order completed</span></p>

      </div>
      <br />
      <br />
      <div className='flex justify-center'>
      <Image
            src={tick}
            alt=""
            className="w-24 h-58"
          />
      </div>
      <div className='flex flex-col justify-center align-center'>
      <h1 className=' m-[20px] text-2xl font-bold text-center'>Your Order is Completed!</h1>
      <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis ipsa dolor ullam, quod ea eaque animi expedita in eligendi tenetur quis, natus dolores, ad magnam facere officia temporibus facilis.</p>
      <br />
      <div className='flex justify-center w-full'>
      <button className='bg-[#fb2e86] text-white w-[160px] px-2 py-1'>Continue Shopping</button>
      </div>
      <br />
      </div>
      <br />
      <br />
    </div>
  )
}

export default page2