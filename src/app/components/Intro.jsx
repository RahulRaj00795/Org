'use client';

import React, { useState, useEffect, useRef } from 'react';
import { color, motion } from 'framer-motion';

const Intro = () => {



  const [inView, setInView] = useState(false);
  const ref = useRef(null);


  const data = [
    {
      img: '/images/healthb.webp',
      title: 'Health',
      desc: 'The Trust is committed to bringing the benefits of advanced medical technology to the disadvantaged and the needy. Its wide-ranging initiatives in south Gujarat and in Mumbai are extending a lifeline of hope to those in need.',
      link: '/health-care',
      color: '#77B9D1',
    },
    {
      img: '/images/edub.jpg',
      title: 'Education',
      desc: 'The Trust promotes education by setting up schools in rural and urban India, with special emphasis on creating learning opportunities for the girl child. Its schools in south Gujarat cater largely to children from the disadvantaged sections of society.',
      link: '/education',
      color: '#F2C012',
    },
    {
      img: '/images/skillb.jpg',
      title: 'Skill Building',
      desc: 'The Trust is the first to introduce the concept of skill training to villages in south Gujarat. Since inception, has over 2500 male students and 1100 female students have graduated from the Anil Naik Technical Training Centre. Most of those trained have found gainful employment',
      link: '/skill-building',
      color: '#78B8AA',
    },

  ]



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // run only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
   <>
    <div ref={ref} className='intro'>
      <div className="flex justify-center items-center gap-8 ">
        
   <div className='flex  max-w-[1200px]  mx-[50px]'>
         {/* Image - Left to center */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className=' w-full'

        >
          <img
            src="/images/person.jpg"
            alt=""
            className=" h-[360px]  "
          />
        </motion.div>

        {/* Text - Right to center */}
        <motion.div
          className=" w-full leading-relaxed text-[20px]"
          initial={{ x: '100%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
      

        >
          <a href="" className='text-[#68C17C]'>Dr. Pandya’s</a> work in the social sector is equally impactful. As a

          non-executive board member of organizations such as the Pandya
          Foundation, the Indian Business Association, and United Rudra, he has
          led critical initiatives in education, healthcare, community
          development, and animal welfare. His belief in a “community-first”
          approach drives his ongoing efforts to uplift underprivileged
          families, provide opportunities to aspiring youth, and support
          inclusive cultural and humanitarian causes. His leadership reflects a
          unique blend of business excellence and heartfelt service to society,
          making him a distinguished figure in both professional and
          philanthropic arenas.
        </motion.div>
   </div>

      </div>
    </div>

    <div className='banner py-[50px]'>
      <div className="flex justify-center items-center gap-8  ">
        <div className='flex  max-w-[1200px] justify-between w-full gap-[20px]  mx-[50px] flex-wrap lg:flex-nowrap '>

          {
            data.map((item, index) => (
              <div key={index} className={`w-full p-[20px]`}
              style={{ backgroundColor: item.color }}
              >
                <div className="w-full  justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full h-[230px] ">
                  <h2 className="text-3xl font-bold text-center my-6  text-[#fff]">
                    {item.title}
                  </h2>
                  <p className="text-center">
                    {item.desc}
                  </p>
            
                </div >
     <div className='flex justify-center'>

      <a  href={item.link} className="text-center bg-[#1C5888] py-[10px] px-[20px] rounded-[6px] text-[#fff]">

                    Learn More
                  </a>
     </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
   </>
  );
};

export default Intro;
