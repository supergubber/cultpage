import React from 'react'
import SectionThreeimgone from '../../assets/sectionthreeimg1.png'
import playButton from '../../assets/playbutton.svg'
const SectionThree = () => {
  return (
    <div className='w-full h-auto py-8 pb-20'>
      <fieldset className='border border-t-3 border-[#AD9564] border-l-0 border-r-0 border-b-0 ml-10 pt-5'>
        <legend className='pb-2 px-3 text-[#AD9564] font-mono leading-8 tracking-widest text-2xl'>
          Watch Family
        </legend>
      </fieldset>

      <div className='w-[93%] mx-auto relative'>
        <img
          src={SectionThreeimgone}
          alt='sectionthree'
          className='md:h-[600px] w-full'
        />

        <div className='absolute bottom-[16%] left-1/2 transform -translate-x-1/2'>
          <img src={playButton} alt='playbutton' className='md:block hidden ' />
        </div>
      </div>
    </div>
  )
}

export default SectionThree
