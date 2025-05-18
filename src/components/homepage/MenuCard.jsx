import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const MenuCard = ({ items }) => {
  return (
    <div
      className={`flex md:flex-row  md:items-center md:justify-center md:gap-3 md:w-auto w-full flex-col items-center ${
        items.id === 6 ? 'border-l-0' : 'border-l-1'
      } md:border-l-0`}
    >
      <img
        src={items.Image}
        alt={items.name}
        className='md:h-16 md:w-16 w-10 h-10 object-cover rounded'
      />
      <div
        style={{ color: items.color }}
        className='flex-1 md:flex md:flex-col md:gap-1.5 '
      >
        <p className='font-semibold text-sm font-serif'>{items.name}</p>
        <div className='flex md:flex-row md:items-center md:gap-2 md:justify-start justify-center items-center'>
          <p className='text-sm font-serif md:block hidden'>{items.decr}</p>
          <HiOutlineArrowLongRight className='text-xl md:block hidden' />
        </div>
      </div>
    </div>
  )
}

export default MenuCard
