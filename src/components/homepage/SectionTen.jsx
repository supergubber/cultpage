import React from 'react'

const SectionTen = () => {
  return (
    <div className='w-full bg-[#FFFAF0] md:px-10 md:py-10 p-5 flex md:flex-row flex-col'>
      <div className='md:w-[50%] w-[100%]'>
        <h1 className='text-5xl text-[#100C08] mb-5'>Our Newsletter</h1>
        <p className='text-lg text-[#191919]'>
          Reconnect with nature, with yourself, and with the quiet beauty of the
          Western Ghats. Book Your Stay
        </p>
      </div>
      <div className='flex flex-row items-end md:justify-center md:w-[50%] w-[100%] py-5'>
        <form className='flex md:flex-row flex-col md:items-center gap-3 items-start'>
          <input
            type='email'
            required
            placeholder='Enter Email'
            className='px-4 text-lg border py-2 rounded-full'
          />
          <div className='w-fit md:mx-auto'>
            <div className='border-2 border-[#333A1B] p-1 rounded-full cursor-pointer'>
              <p className='bg-[#333A1B] px-6 py-2 rounded-full text-[#E6A32B]'>
                Know More
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SectionTen
