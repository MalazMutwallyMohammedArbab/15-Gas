import React from 'react'
import Image from "../Components/Images";

export default function Services() {
  return (
    <div className='bg-lightGreen py-16'>
      <div className='w-[70%] m-auto'>
        <div className='text-3xl font-semibold text-center mb-3'>خدماتنا</div>
        <div className='text-center mb-12 text-xl'>نضمن جودة أداء فريقنا في تقديم جميع الخدمات باحترافية</div>
        <div className='block md:flex justify-between'>
          <Image className='w-20 md:w-40 m-auto mb-5 md:mb-0' src="images/gas.jpeg" alt='gas tube' />
          <div className='md:w-[70%]'>
          <div className='flex'>
            <Image src='images/fire.png' alt='fire' className='w-6 h-9' />
            <div className='text-2xl font-semibold mb-3'>إعادة التعبئة</div>
          </div>
          <div className='mb-9 text-xl'>استبدل قنينتك الفارغة بواحدة ثانية ممتلئة بسهولة وسرعة عالية بالتوصيل</div>

          <div className='flex'>
            <Image src='images/fire.png' alt='fire' className='w-6 h-9' />
            <div className='text-2xl font-semibold mb-3'>شراء منتج جديد</div>
          </div>        
          <div className='text-xl'>شراء قنينة متكاملة جديدة وأيضا ستكون ممتلئة، شراء منظم الغاز (لقياس ضغط القنينة وعزلها لمنع تسرب الغاز وحدوث المخاطر)</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
