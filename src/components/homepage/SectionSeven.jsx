import React from 'react'
import sectionSevenHeader from '../../assets/sectionsevenheader.png'
import Slider from '../slider/Slider'
const SectionSeven = () => {
  return (
    <div className='w-full flex md:flex-row flex-col py-10 items-center justify-center'>
      <div className='md:w-[50%] w-full flex flex-col gap-10 mb-10'>
        <h1 className='text-center font-stretch-extra-expanded md:text-7xl text-4xl from-neutral-950 font-serif'>
          Our guests loved It!
        </h1>
        <div className='rounded-l-full rounded-r-full rounded-b-none border-2 border-[#333A1B] w-fit m-auto relative'>
          <div
            className='rounded-l-full rounded-r-full rounded-b-none 
                      border border-[#ffffff33] shadow-lg shadow-[#00000010] flex flex-col items-center justify-center gap-4 px-3 py-3 text-white overflow-hidden'
          >
            <img
              src={sectionSevenHeader}
              alt='sectiononeimg1'
              className='rounded-l-full rounded-r-full rounded-b-none md:h-[466px] h-[350px]'
            />
          </div>
        </div>
      </div>
      <div className='md:w-[50%] w-full flex md:pt-[180px] box-border'>
        <Slider />
      </div>
    </div>
  )
}

export default SectionSeven
