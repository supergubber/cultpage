import React from 'react'
import Rectangle1 from '../../assets/sectionninelogo.svg'
import sectionninebg from '../../assets/sectionninebg.png'
import { sectioneightData } from '../../data/menu'
import secctionninefooter from '../../assets/sectionninefotter.png'
const SectionEight = () => {
  return (
    <div className='w-full bg-[#F7E1DE]'>
      <div
        className='w-full h-auto bg-[#F7E1DE] bg-no-repeat bg-size-[100%] flex flex-col items-center justify-center md:gap-10 md:pt-[200px] py-10 '
        style={{
          backgroundImage: `url(${sectionninebg})`,
        }}
      >
        <div className='mx-auto w-fit md:mb-8'>
          <img
            src={Rectangle1}
            alt='logo'
            className='md:w-[180px] w-[100px] '
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='md:text-7xl text-3xl font-serif text-center w-[80%] mx-auto text-[#100C08]'>
            Fresh products direct from nature
          </h1>
          <div className='border border-[#732129] w-0 h-10 mx-auto'></div>
          <p className='md:text-2xl font-sans leading-8 text-center w-[80%] mx-auto font-semibold text-[#191919] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            placerat nisi sit amet tortor cursus, nec blandit libero consequat.
            Sed molestie elementum ligula sed accumsan. Curabitur eu ultrices
            tortor.
          </p>
        </div>
        <div className='flex flex-row w-[65%] pt-4 pl-5 pr-3 overflow-scroll no-scrollbar'>
          {sectioneightData.map((item, index) => (
            <div className='p-2 pb-16 gap-3 flex flex-col' key={index}>
              <div className='md:w-[225px] md:h-[220px] w-[225px] h-[220px] object-fill'>
                <img
                  src={item.img}
                  alt='one'
                  className='w-full h-full  bg-cover'
                />
              </div>
              {/* <p className='text-center text-black w-[70%] mx-auto'>
                {item.name}
              </p> */}
            </div>
          ))}
        </div>
        <div className='w-fit mx-auto'>
          <div className='border-2 border-[#732129] p-1 rounded-full cursor-pointer'>
            <p className='bg-[#732129] px-6 py-2 rounded-full text-white'>
              Know More
            </p>
          </div>
        </div>
        <img
          src={secctionninefooter}
          alt='sectionninefooter'
          className='w-[80%]'
        />
      </div>
    </div>
  )
}

export default SectionEight
