'use client'

import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const pages = [
    { name: 'ABOUT US', link: '/about-us' },
    { name: 'SKILL BUILDING', link: '/skill-building' },
    { name: 'EDUCATION', link: '/education' },
    { name: 'HEALTHCARE', link: '/healthcare' },
  ]

  return (

    <div className='w-full top-0 fixed z-10'>

      <div className="w-full text-center bg-[#fff] py-[20px] font-[600] flex items-center justify-center gap-[20px]">
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-[15px] md:mx-[50px] gap-[20px]">
          {/* Logo */}
          <div onClick={() => router.push('/')}>
            <img
              src="/images/logo1.png"
              alt="logo"
              className="h-[50px] md:h-[80px] limit cursor-pointer"
            />
          </div>

          <MenuOutlined onClick={() => setOpen(!open)} className='menu-icon' style={

            { fontSize: '30px', }
          } />


          {/* Menu Icon */}
          <Drawer
            title=""
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            width={250}
            className="drawer"
          >
            <div className='gap-[20px] flex flex-col'>

              <Button onClick={() => router.push('/')} className='w-full'>Home</Button>

              {pages.map((item, index) => (
                <div key={index} className="flex items-center ">
                  <Button
                    onClick={() => router.push(item.link)}

                    className={`w-full  ${pathname === item.link

                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-black'
                      } hover:text-blue-400 transition-colors`}
                  >
                    {item.name}
                  </Button>
                </div>
              ))}

            </div>
          </Drawer>


          {/* Navigation */}
          <div className='lg:flex hidden'>

            <div className="flex flex-wrap gap-[30px] justify-center">
              {pages.map((item, index) => (
                <div key={index} className="flex items-center">
                  <a
                    href={item.link}
                    className={`${pathname === item.link
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-black'
                      } hover:text-blue-400 transition-colors`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
