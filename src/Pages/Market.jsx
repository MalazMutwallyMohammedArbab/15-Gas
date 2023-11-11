import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../Components/Images'

export default function Market() {
  return (
    <div className='w-[80%] m-auto mt-9 mb-40'>
      <div className='text-3xl font-semibold text-center mb-12'>منتجاتنا</div>
      <div className='flex justify-between mb-9'>
        <div className='text-xl font-semibold'>جميع المنتجات</div>
        <NavLink className='text-green text-xl font-semibold' to='/products'>عرض الكل ---</NavLink>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='border-2 border-green rounded-[5%]'>
            <Image src='images/gas.jpeg' alt='gas' className='w-28 h-44 m-auto my-4' />
            <div className='bg-green text-[white] px-3 py-5'>
              <div className='flex justify-between mb-3'>
                <div className='text-lg'>منظم الغاز</div>
                <div className='text-lg'>5 الاف د.ع</div>
              </div>
              <div>لقياس ضغط القنينة وعزلها لمنع تسرب الغاز وحدوث المخاطر</div>
            </div>
          </div>

          <div className='border-2 border-green rounded-[5%]'>
            <Image src='images/gas2.jpeg' alt='img' className='w-40 h-44 m-auto my-4' />
            <div className='bg-green text-[white] px-3 py-5'>
              <div className='flex justify-between mb-3'>
                <div className='text-lg'>قنينة عراقية</div>
                <div className='text-lg'>5 الاف د.ع</div>
              </div>
              <div>شراء قنينة متكاملة جديدة وأيضا ستكون ممتلئة</div>
            </div>
          </div>

          <div className='border-2 border-green rounded-[5%]'>
            <Image src='images/gas3.jpeg' alt='img' className='w-36 h-44 m-auto my-4' />
            <div className='bg-green text-[white] px-3 py-5'>
              <div className='flex justify-between mb-3'>
                <div className='text-lg'>إعادة تعبئة</div>
                <div className='text-lg'>5 الاف د.ع</div>
              </div>
              <div>استبدل قنينتك الفارغة بواحدة ثانية ممتلئة بسهولة وسرعة عالية بالتوصيل</div>
            </div>
          </div>
        </div>

    </div>
  )
}
