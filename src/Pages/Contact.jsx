import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../Components/Images'

export default function Contact() {
  return (
    <div>
      <div className='contact w-[70%] m-auto mb-28'>
        <div className='bg-lightGreen flex justify-between items-center py-6 px-6 md:px-12'>
          <div>
            <div className='text-green text-2xl mb-4'>محتاج تعبئة لو وحدة جديدة؟</div>
            <div className='text-green text-3xl mb-12 text-center'>قنينتي توفرهم ثنينهم</div>
            <div className='flex justify-between'>
              <a href=''>
                <Image src='images/google store.svg' alt='google store' />
              </a>
              <a href=''>
                <Image src='images/app store.svg' alt='app store' />
              </a>
            </div>
          </div>

          <Image src='images/gas2.jpeg' alt='gas' className='w-60 h-52 hidden md:block' />
        </div>
      </div>

      <div className='footer bg-green text-[white] pt-16 pb-9'>
        <div className='block md:flex justify-between w-[70%] m-auto pb-16'>
          <div className='one md:w-[40%]'>
            <div className='text-3xl mb-5'>قنينتي</div>
            <div>قنينتي هي منصة تسهل خدمة إيصال قناني الغاز للمواطنين بطريقة سهلة وامنة وسريعة وحديثة تواكب التكنولوجيا بطريقة عراقية</div>
          </div>
          <div className='two md:w-[20%]'>
            <div className='text-lg font-semibold mb-2 mt-6 md:mt-0'>الوصول السريع</div>
            <div><NavLink to='/'>الصفحة الرئيسية</NavLink></div>
            <div><NavLink to='/features'>ليش تختار قنينتي</NavLink></div>
            <div><NavLink to='/services'>خدماتنا</NavLink></div>
            <div><NavLink to='/market'>المتجر</NavLink></div>
            <div><NavLink to='/contact'>تواصل معنا</NavLink></div>
          </div>

          <div className='three md:w-[30%'>
            <div className='font-semibold text-lg mb-4 mt-6 md:mt-0'>مواقع التواصل</div>
            <div className='flex justify-around items-center'>
              <a href=''><Image src='images/contact/facebook.svg' alt='img' /></a>
              <a href=''><Image src='images/contact/telegram.svg' alt='img' /></a>
              <a href=''><Image src='images/contact/mail icon.svg' alt='img' /></a>
            </div>
          </div>
        </div>

        <div className='text-center'>جميع الحقوق محفوظة لدى منصة قنينتي 2023 &copy;</div>
      </div>
    </div>
  )
}
