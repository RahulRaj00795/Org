'use client'
import { MailOutlined, RightCircleOutlined, RightOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const router = useRouter()

    const pages = [
        {
            name: 'ABOUT US',
            link: '/about-us'
        },
        {
            name: 'SKILL BUILDING',
            link: '/skill-building'

        },
        {
            name: 'EDUCATION',
            link: '/education'
        },
        {
            name: 'HEALTHCARE',
            link: '/healthcare'
        },

    ]



    return (
        <div className='w-full flex flex-col  '>
            <div className='w-full text-center bg-[#3E3E3E] text-white py-[20px] font-[600] flex items-center justify-center gap-[20px]'>

                <div className='flex justify-center md:justify-between items-center w-full max-w-[1200px] mx-[50px] flex-wrap gap-[20px]'>

                    <div onClick={() => router.push('/')} className='cursor-pointer'>


                        <img src="/images/logo1.png" alt="logo" className=' h-[80px] limit' />
                    </div>

                    <div>
                        <div className='flex flex-wrap gap-[10px] justify-center max-w-[500px]'>

                            {
                                pages.map((item, index) => (
                                    <div key={index} className='flex items-center gap-[10px]'>
                                        <RightOutlined style={{
                                            fontSize: '10px'
                                            , color: '#000',
                                            backgroundColor: '#6EC1E4',
                                            padding: '5px',
                                            borderRadius: '50%',

                                        }} />
                                        <a href={item.link} className='text-white'>
                                            {item.name}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className='flex gap-[10px]'>
                        <MailOutlined style={{

                            color: '#6EC1E4',


                        }} />

                        <a href="mailto:contactus@pandyafoundation.org">contactus@pandyafoundation.org</a>

                    </div>
                </div>

            </div>
            <div className='w-full text-center bg-[#0073D0] text-white py-[20px] font-[600] limit-center'>

                <p className='limit'>
                    &copy; 2025 Pandya Foundation. All rights reserved.
                </p>

            </div>
        </div>

    )
}

export default Footer
