import React from 'react'

const TermAndCondition = () => {
  const data = [
    {
      name: 'Terms of Service',
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Cookies',
    },
  ]
  return (
    <div className='bg-[#100C08] py-8 px-10 w-full border-2 border-[gray] border-l-0 border-r-0 border-b-0 flex flex-col md:flex-row justify-between items-center'>
      <p className='text-[#939393] text-xl mb-3'>© 2025 Rizwan khan</p>
      <div className='flex flex-row items-center justify-center md:gap-4 gap-1'>
        {data.map((item, index) => (
          <p
            className='md:text-xl text-sm text-[#939393] font-bold'
            key={index + index}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default TermAndCondition
