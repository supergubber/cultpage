import React from 'react'
import sectionHeaderLeft from '../../assets/sectionsixheaderleft.png'
import sectionHeaderRight from '../../assets/sectionsizeheaderright.png'
import Logo5 from '../../assets/sectionsixlogo.svg'
import { sectionSizeSlide } from '../../data/menu'

const Sectionsix = () => {
  return (
    <div
      className='w-full bg-[#FFFAF0] h-auto bg-no-repeat md:bg-size-[220px,220px] bg-size-[150px,150px] pt-20'
      style={{
        backgroundImage: `url(${sectionHeaderLeft}),url(${sectionHeaderRight})`,
        backgroundPosition: 'left top,right top',
      }}
    >
      <div className='mx-auto w-fit mb-8'>
        <img src={Logo5} alt='logo' />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='md:text-8xl text-3xl font-serif text-center w-[80%] mx-auto text-[#100C08]'>
          Unique experiences you should not miss!
        </h1>
        <div className='border border-[#732129] w-0 h-10 mx-auto'></div>
        <p className='md:text-2xl font-sans leading-8 text-center w-[80%] mx-auto font-extralight text-[#191919]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          placerat nisi sit amet tortor cursus, nec blandit libero consequat.
          Sed molestie elementum ligula sed accumsan. Curabitur eu ultrices
          tortor.
        </p>
      </div>
      <div className='flex flex-row w-full pt-4 pl-5 pr-3 overflow-scroll no-scrollbar'>
        {sectionSizeSlide.map((item, index) => (
          <div className='p-5 pb-16 gap-3 flex flex-col' key={index}>
            <div className='md:w-[400px] md:h-[355px] w-[300px] h-[300px] object-fill'>
              <img
                src={item.img}
                alt='one'
                className='w-full h-full  bg-cover'
              />
            </div>
            <p className='text-center text-black w-[70%] mx-auto'>
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className='w-fit mx-auto'>
        <div className='border-2 border-[#732129] p-1 rounded-full cursor-pointer'>
          <p className='bg-[#732129] px-6 py-2 rounded-full text-white'>
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sectionsix
