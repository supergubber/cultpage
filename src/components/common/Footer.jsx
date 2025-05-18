import React from 'react'
import sectionelevenlogo from '../../assets/sectionelevenlogo.png'
import instalogo from '../../assets/instalogo.png'
import linklogo from '../../assets/linklogo.png'
import facelogo from '../../assets/facelogo.png'
import twitlogo from '../../assets/twitlogo.png'
import footerarraw from '../../assets/fotterarraw.png'
import { CgArrowLongRightL } from 'react-icons/cg'

const Footer = () => {
  const data = [
    {
      name: 'AranyaBan',
      img: linklogo,
    },
    {
      name: 'VanaManthan',
      img: facelogo,
    },
    {
      name: 'VanaRatna ',
      img: twitlogo,
    },
    {
      name: '',
      img: instalogo,
    },
  ]
  const rightData = [
    {
      name: 'Virtual Tour',
    },
    {
      name: 'Cottage',
    },
    {
      name: 'Packages',
    },
    {
      name: 'About',
    },
    {
      name: 'Careers',
    },
  ]
  return (
    <div className='w-full bg-[#100C08]  flex md:flex-row flex-col items-center md:justify-between justify-center'>
      <div className='px-10 py-10 flex flex-col gap-8'>
        <img
          src={sectionelevenlogo}
          alt='sectionelevenlogo'
          className='w-[220px] mx-auto'
        />
        <div className='flex flex-row gap-4 cursor-pointer'>
          {data.map((item, index) => (
            <div key={item.name} className='flex flex-col'>
              <p className='text-[#FFFAF0] text-lg'>{item.name}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-row  items-center justify-center gap-4 cursor-pointer'>
          {data.map((items, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center'
            >
              <img
                src={items.img}
                alt={items.img}
                className='w-12 h-12 md:w-full md:h-full'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='px-10 flex flex-col items-center justify-center gap-8'>
          <div className='flex felx-row gap-5 text-lg text-[#FFFAF0]'>
            {rightData.map((items, index) => (
              <div key={index}>
                <p className='text-[#FFFAF0] font-extralight'>{items.name}</p>
              </div>
            ))}
          </div>

          <div className='flex felx-row items-center gap-8'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-white text-2xl cursor-pointer font-serif'>
                Navigate to -
              </h3>
              <p className='text-[#FFFAF0] text-sm cursor-pointer font-extralight'>
                Aranyaban, 5th Avenue <br /> Hood, Mumbai, India{' '}
              </p>
              <CgArrowLongRightL className='text-[#FFFAF0] text-3xl cursor-pointer' />
            </div>
            <div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.523644465511!2d72.83973144999999!3d19.046983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6554fbfb889%3A0xaf4c3778ab35d3f9!2sLucky%20Restaurant!5e0!3m2!1sen!2sin!4v1747585475708!5m2!1sen!2sin'
                width='290'
                height='170'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
