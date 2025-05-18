import React from 'react'
import { menuData, MenuWithImage } from '../../data/menu'
import Logo from '../../assets/logo.png'
import Button from './Button'
import { FiMenu } from 'react-icons/fi'

import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import MenuCard from '../homepage/MenuCard'
const Header = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full h-[80px] bg-[#333A1B]'>
        <div className='w-[95%] h-[80px] mx-auto flex flex-row  items-center justify-between'>
          <div>
            <img src={Logo} alt='logo' className='cursor-pointer' />
          </div>
          <MediaQuery minWidth={768}>
            <div className='flex flex-row items-center justify-center lg:gap-10 sm:gap-6 lg:text-xl sm:text-sm font-serif'>
              {menuData.map((item, index) => (
                <div key={index}>
                  <Link className='cursor-pointer text-[#fffaf0] hover:text-[#d8d2c6]'>
                    {item.name}
                  </Link>
                </div>
              ))}
              <Button>Talk To Us</Button>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <FiMenu className='text-white text-3xl cursor-pointer' />
          </MediaQuery>
        </div>
      </div>
      <div className='w-full h-[80px] bg-[#fffaf0]  '>
        <div className='lg:w-5xl w-auto h-full mx-auto flex flex-row justify-evenly '>
          {MenuWithImage.map((items) => (
            <MenuCard items={items} key={items.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
