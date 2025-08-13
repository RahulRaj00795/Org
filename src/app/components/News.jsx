'use client'
import React from 'react'

const newsData = [
    {
        id: 1,
        title: ' Pandya foundation continues to support Covid-19 Testing as life starts to come under control in Nj',
        pic: '/images/news1.png',
    },
    {
        id: 2,
        title: 'Pandya Foundation launches new program to promote health and wellness',
        pic: '/images/g3.jpg',
    },
    {
        id: 3,
        title: 'Celebrating Culture, Community & Connection',
        pic: '/images/p1.jpg',
    },



]

const News = () => {
    return (
        <section className='w-full max-w-[1600px] mx-auto newsbg justify-center flex py-[50px] flex-col '>
            <div className='w-full max-w-[1200px] mx-auto flex flex-col gap-2 items-center'>

                <h1 className='text-[16px] font-bold text-[#004f8c]'>LATEST NEWS</h1>
                <p className='text-[35px] text-[#000333]'>Read latest Updates</p>
            </div>

            <div className='w-full  flex flex-col items-center justify-center '>
                <div className='w-full  justify-center flex gap-4 mx-[50px] py-10  flex-wrap '>

                    {
                        newsData.map((item) => (
                            <div key={item.id} className='w-[400px] flex flex-col gap-2 items-center bg-white card '  >
                                <img src={item.pic} alt={item.title} className='w-full h-[200px] ' />

                                <p className='text-[20px] text-center  p-2 font-[400] text-[#000333]'>{item.title}</p>
                            </div>
                        ))
                    }


                </div>

                <button className='w-[150px] h-[50px] cursor-pointer bg-[#004f8c] text-white rounded-[10px]'>Read More</button>



            </div>

        </section>
    )
}

export default News
