'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const pages = [
    { name: 'ABOUT US', link: '/about-us' },
    { name: 'SKILL BUILDING', link: '/skill-building' },
    { name: 'EDUCATION', link: '/education' },
    { name: 'HEALTHCARE', link: '/health-care' },
  ]

  return (
    <div className='w-full top-0 fixed z-10'>

      <div className="w-full text-center bg-[#fff] py-[20px] font-[600] flex items-center justify-center gap-[20px]">
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-[50px]">
          {/* Logo */}
          <div>
            <img
              src="/images/logo1.png"
              alt="logo"
              className="h-[80px] limit"
            />
          </div>

          {/* Navigation */}
          <div>
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
