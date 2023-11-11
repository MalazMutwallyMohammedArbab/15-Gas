import React, { useState } from 'react'
import Image from "../Components/Images";

export default function Features() {

  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  return (
    <div className='w-[70%] m-auto mb-12'> 
      <div className='text-center text-3xl mb-12 font-semibold'>ليش تختار قنينتي؟</div>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-5 mb-12'>

        <div className='one'>
          <div className='one py-5 rounded cursor-pointer bg-green' onClick={() => {
            setShow(true)
            setShowTwo(false)
            setShowThree(false)
            setShowFour(false)
            setShowFive(false)}}
            style={{ backgroundColor: show ? '#38761d' : '#93c47d' }}>
            <Image src="images/icons/car2.png" className='m-auto mb-3 w-12' />
            <button className='text-[white] flex m-auto'>التوصيل السريع</button>
          </div>
        </div>

        <div className='two'>
          <div className='two bg-lightGreen hover:bg-green py-5 rounded cursor-pointer transition ease-out duration-500' onClick={() => {            
            setShowTwo(true)
            setShow(false)
            setShowThree(false)
            setShowFour(false)
            setShowFive(false)}}
            style={{ backgroundColor: showTwo ? '#38761d' : '#93c47d' }}>
            <Image src="images/icons/gas.png" className='m-auto mb-3 w-12' />
            <button className='text-[white] flex m-auto'>سهل وامن وموثوق</button>
          </div>
        </div>

        <div className='three'>
          <div className='three bg-lightGreen hover:bg-green py-5 rounded cursor-pointer transition ease-out duration-500' onClick={() => {
            setShow(false)
            setShowTwo(false)
            setShowThree(true)
            setShowFour(false)
            setShowFive(false)}}
            style={{ backgroundColor: showThree ? '#38761d' : '#93c47d' }}>
            <Image src="images/icons/money.png" className='m-auto mb-3 w-12' />
            <button className='text-[white] flex m-auto'>سهولة في الطلب والدفع</button>
          </div>
        </div>

        <div className='four'>
          <div className='four bg-lightGreen hover:bg-green py-5 rounded cursor-pointer transition ease-out duration-500' onClick={() => {
            setShow(false)
            setShowTwo(false)
            setShowThree(false)
            setShowFour(true)
            setShowFive(false)}}
            style={{ backgroundColor: showFour ? '#38761d' : '#93c47d' }}>
            <Image src="images/icons/gas.png" className='m-auto mb-3 w-12' />
            <button className='text-[white] flex m-auto'>التغليف المميز</button>
          </div>
        </div>

        <div className='five'>
          <div className='five bg-lightGreen hover:bg-green py-5 rounded cursor-pointer transition ease-out duration-500' onClick={() => {
            setShow(false)
            setShowTwo(false)
            setShowThree(false)
            setShowFour(false)
            setShowFive(true)}}
            style={{ backgroundColor: showFive ? '#38761d' : '#93c47d' }}>
            <Image src="images/icons/gift.png" className='m-auto mb-3 w-11' />
            <button className='text-[white] flex m-auto'>الهدايا المميزة</button>
          </div>
        </div>
      </div>

      <div>
        {show ? <div className='one flex justify-between items-center w-[90%] m-auto'>
          <div className='md:w-[50%]'>
            <div className='text-2xl mb-5 font-semibold'>التوصيل السريع</div>
            <div className='text-xl'>يعتمد نظامنا في الطلبات على توصيل الطلب لأقرب سائق متواجد في منطقتك بناء على استخدام خرائط قوقل في الطلب والتوصيل</div>
          </div>
          <Image className='hidden md:block w-40 h-48 mt-7' src="images/gas.jpeg" alt='gas tube' />
        </div> : ''}

        {showTwo ? <div className='two flex justify-between items-center w-[90%] m-auto'>
          <div className='md:w-[50%]'>
            <div className='text-2xl mb-5 font-semibold'>سهل امن وموثوق</div>
            <div className='text-xl'>Lorem ipsum dolor sit Quia sed, ut consequatur nihil similique quo a nesciunt iste omnis, cumque magni, aspernatur quis itaque quae laudantium! Vel molestias repellat tenetur.</div>
          </div>
          <Image className='hidden md:block w-60 h-48 mt-7' src="images/gas2.jpeg" />
        </div> : ''}

        {showThree ? <div className='three flex justify-between items-center w-[90%] m-auto'>
          <div className='md:w-[50%]'>
            <div className='text-2xl mb-5 font-semibold'>سهولة في الطلب والدفع</div>
            <div className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sed, similique quo a nesciunt iste omnis, cumque magni, aspernatur quis itaque quae laudantium! Vel molestias repellat tenetur.</div>
          </div>
          <Image className='hidden md:block w-40 h-48 mt-7' src="images/gas.jpeg" />
        </div> : ''}

        {showFour ? <div className='four flex justify-between items-center w-[90%] m-auto'>
          <div className='md:w-[50%]'>
            <div className='text-2xl mb-5 font-semibold'>التغليف المميز</div>
            <div className='text-xl'>Lorem ipsum dolor sit, amet consectetu adipisicing elit. ut consequatur nihil similique quo a nesciunt iste omnis, cumque magni, aspernatur quis itaque quae laudantium! Vel molestias repellat tenetur.</div>
          </div>
          <Image className='hidden md:block w-60 h-48 mt-7' src="images/gas2.jpeg" />
        </div> : ''}

        {showFive ? <div className='five flex justify-between items-center w-[90%] m-auto'>
          <div className='md:w-[50%]'>
            <div className='text-2xl mb-5 font-semibold'>الهدايا المميزة</div>
            <div className='text-xl'>Lorem ipsum dolor sit, elit. Quia sed, ut consequatur nihil similique quo a nesciunt iste omnis, cumque magni, aspernatur quis itaque quae laudantium! Vel molestias repellat tenetur.</div>
          </div>
          <Image className='hidden md:block w-40 h-48 mt-7' src="images/gas.jpeg" />
        </div> : ''}
      </div>
    </div>
  )
}
