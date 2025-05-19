import React from 'react'
import SectionTenImg from '../../assets/sectiontenbg.png'
import Button from '../common/Button'
import SectionTenLogo from '../../assets/sectiontenlogo.svg'
const SectionNine = () => {
  return (
    <div
      className='w-full py-16 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-8'
      style={{
        backgroundImage: `url(${SectionTenImg})`,
      }}
    >
      <div>
        <img
          src={SectionTenLogo}
          alt='SectionTenLogo'
          className='md:w-full w-[120px]'
        />
      </div>
      <h1 className='md:text-7xl text-4xl font-serif font-semibold text-white text-center'>
        Ready to Begin Your Journey?
      </h1>
      <p className='md:text-2xl text-xl font-sans text-white text-center w-[92%] md:w-[100%]'>
        Reconnect with nature, with yourself, and with the quiet beauty of the
        Western Ghats.
      </p>
      <div className='flex flex-row items-center justify-center gap-3 mt-8'>
        <div className='w-fit'>
          <Button>Book a Cottage</Button>
        </div>
        <div className='border-2 border-[#E5DBC7] p-1 rounded-full cursor-pointer'>
          <p className='px-6 py-2 rounded-full text-white md:text-[18px] text-[12px]'>
            View Packages
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionNine
