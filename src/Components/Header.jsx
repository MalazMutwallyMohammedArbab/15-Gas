import React from 'react'
import Image from "./Images";

export default function Header() {
  return (
    <div className='w-[100%] bg-green rounded-b-[30%] pb-20 mb-12'>
      <div className='block md:flex justify-between w-[70%] m-auto'>
        <div className='md:w-[50%]'>
            <div className='text-[white] text-3xl mb-5 pt-9'>قنينتي</div>
            <div className='mb-5 text-[white] text-xl'>قنينتي هي منصة تسهل خدمة إيصال قناني الغاز للمواطنين بطريقة سهلة و امنة وحديثة تواكب التكنولوجيا بنكهة عراقية</div>
            <div className='text-green bg-[white] p-3 w-fit rounded cursor-pointer hover:bg-[#333] hover:text-[white]'>حمل التطبيق</div>
        </div>

        <Image className='w-80 mt-7' src="images/gas2.jpeg" alt='gas tube' />
      </div>
    </div>
  )
}
