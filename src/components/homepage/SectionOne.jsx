import React from 'react'
import VideoData from '../../assets/sectionone.mp4'
import Button from '../common/Button'
import bothSizeArrow from '../../assets/both size arrow.svg'
import glassroom1 from '../../assets/glassroom1.png'
const SectionOne = () => {
  return (
    <div className='relative w-full h-[550px] bg-amber-200 overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute w-full h-full object-cover'
      >
        <source src={VideoData} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Optional Content Overlay */}
      <div className='relative z-10 flex md:flex-row flex-col items-center justify-center h-full bg-[rgba(0,0,0,0.8)]'>
        {/* Add your content here */}
        <div className='md:w-[50%] w-full h-[550px] items-center justify-center flex'>
          <div className='w-[90%] mx-auto flex flex-col gap-7 text-white'>
            <div>
              <h1 className='text-7xl font-mono'>
                Stay <br />
                Reflect
                <br />
                Connect
              </h1>
              {/* <h1 className='text-7xl'>Reflect </h1> */}
              {/* <h1 className='text-7xl'>Connect.</h1> */}
            </div>
            <p className='text-4xl'>
              Your Eco-Luxury Escape in the Heart of the Western Ghats
            </p>
            <div className='w-fit '>
              <Button>View Cottages</Button>
            </div>
          </div>
        </div>
        <div className='w-[50%] md:block hidden  h-[550px]'>
          <div className='flex items-center justify-end w-[80%] h-full mx-auto'>
            <div className='p-3 rounded-l-full rounded-r-full rounded-b-none border-2 border-[#fffaf0] w-fit '>
              <div
                className='p-3 rounded-l-full rounded-r-full rounded-b-none 
              border border-[#ffffff33] backdrop-blur-lg bg-[#ffffff33] 
              shadow-lg shadow-[#00000010] flex flex-col items-center justify-center gap-4 pt-10 px-8 text-white'
              >
                {/* Your content here */}
                <h1>Packages</h1>
                <img src={bothSizeArrow} alt='bothsizearrow' />
                <p>Nov, 2025 - Mar, 2026</p>
                <p>Winter Wellness Escape</p>
                <img src={glassroom1} alt='glassroom1' />
                <div className='flex flex-row gap-4 items-center justify-center'>
                  <p className='text-lg'>View Detail</p>
                  <Button>View Packages</Button>
                </div>
                <div className='flex flex-row items-center justify-center gap-1 mt-3'>
                  {Array(3)
                    .fill(0)
                    .map((item, index) => (
                      <div
                        className={`${
                          index === 0
                            ? 'px-4 py-1 rounded-full bg-amber-50'
                            : 'py-1 px-1 rounded-full bg-gray-400'
                        }  `}
                        key={index}
                      ></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
