import React from 'react'
import sectionFourHeader from '../../assets/sectionfourheader.png'
import sectionFourBottom from '../../assets/sectionfourbottom.png'
import Logo from '../../assets/sectionfourlogo.png'
import { sectionFourData } from '../../data/menu'
const SectionFour = () => {
  return (
    <div
      className='w-full bg-[#100C08] py-30 text-white'
      style={{
        backgroundImage: `url(${sectionFourHeader}), url(${sectionFourBottom})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right bottom, left top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-[93%] mx-auto'>
        <div className='w-full'>
          <div className='mx-auto w-fit mb-8'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='md:text-7xl text-3xl font-sans text-center'>
              Unique Eco-Luxury Cottages for Reflection and Celebration
            </h1>
            <div className='border border-white w-0 h-10 mx-auto'></div>
            <p className='md:text-xl font-mono leading-8 text-center w-[96%] mx-auto font-extralight'>
              Each cottage at Aranyaban offers a sanctuary that brings you
              closer to nature while providing modern comforts. Thoughtfully
              designed to harmonize with the lush surroundings, our cottages are
              named after indigenous trees, symbolizing our deep connection to
              the land. Whether you’re seeking solitude, a romantic escape, a
              unique treehouse experience, or a family retreat, there’s a
              perfect space waiting for you.
            </p>
          </div>
          <div className='flex flex-row gap-14 flex-wrap w-[95%] mx-auto items-center justify-between mt-15'>
            {sectionFourData.map((items, index) => (
              <div key={index} className=' md:w-[46%] w-[100%]'>
                <img
                  src={items.img}
                  alt={items.name}
                  className='w-[100%] h-[320px]'
                />
                <div className='flex flex-col gap-6'>
                  <h2 className='text-center -mt-6 text-4xl'>{items.name}</h2>
                  <p className='text-center w-[80%] mx-auto md:leading-8 font-serif'>
                    {items.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour
