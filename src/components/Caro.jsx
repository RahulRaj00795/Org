// 'use client';
// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { LeftCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { motion } from 'framer-motion';

// const quotes = [
//   {
//     text: 'Skill training is a vital input in development. It transforms individuals who in turn can transform society.',
//     author: 'Dr. Rajesh C. Pandya',
//   },
//   {
//     text: 'Education is the most powerful weapon which you can use to change the world.',
//     author: 'Dr. Rajesh C. Pandya',
//   },
//   {
//     text: 'The future belongs to those who prepare for it today.',
//     author: 'Dr. Rajesh C. Pandya',
//   },
// ];

// const Caro = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     arrows: false, // disable built-in arrows
//     infinite: true,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//   };

//   return (
//    <div className='top-b flex w-full '>
//       <div
//       className="flex items-center justify-between w-full  gap-6"
//       style={{ padding: '20px' }}
//     >
//      <div className='flex gap-[100px] items-center'>
//        {/* Left Button */}
//       <button
//         onClick={() => sliderRef.current.slickPrev()}
//         className="text-[#004f8c] text-2xl font-bold bg-white rounded-[50%] h-fit p-[10px]  flex  items-center justify-center cursor-pointer hover:bg-transparent"

//       >
//         <LeftOutlined />

//       </button>

//       {/* Slider */}
//       <div style={{ flex: '1 1 auto', maxWidth: '500px' }}>
//         <Slider ref={sliderRef} {...settings}>
//           {quotes.map((q, i) => (
//             <div key={i}>
//               {/* <div
//                 style={{
//                   background: 'linear-gradient(90deg, #004f8c, #0066b3)',
//                   color: '#fff',
//                   padding: '30px',
//                   borderRadius: '8px',
//                   height: '300px',

//                 }}
//               >
//                 <div style={{ fontSize: '40px', marginBottom: '10px' }}>❝</div>
//                 <p style={{ fontSize: '18px', lineHeight: '1.5' }}>{q.text}</p>
//                 <p
//                   style={{
//                     marginTop: '50px',
//                     fontWeight: 'bold',
//                     color: '#99c',
//                   }}
//                 >
//                   {q.author}
//                 </p>
//               </div> */}
//                <div key={i}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: -30, scale: 0.95 }}
//                     transition={{ duration: 0.6, ease: 'easeOut' }}
//                     style={{
//                       background: 'linear-gradient(90deg, #004f8c, #0066b3)',
//                       color: '#fff',
//                       padding: '30px',
//                       borderRadius: '8px',
//                       height: '300px',
//                     }}
//                   >
//                     <div style={{ fontSize: '40px', marginBottom: '10px' }}>
//                       ❝
//                     </div>
//                     <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
//                       {q.text}
//                     </p>
//                     <p
//                       style={{
//                         marginTop: '50px',
//                         fontWeight: 'bold',
//                         color: '#99c',
//                       }}
//                     >
//                       {q.author}
//                     </p>
//                   </motion.div>
//                 </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//      </div>

//       {/* Right Button */}
//       <button
//         onClick={() => sliderRef.current.slickNext()}
//         className="text-[#004f8c] text-2xl font-[600] bg-white rounded-[50%] h-fit p-[10px]  flex  items-center justify-center cursor-pointer hover:bg-transparent"
//       >
//        <RightOutlined />
//       </button>
//     </div>
//    </div>
//   );
// };

// export default Caro;


'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: 'Skill training is a vital input in development. It transforms individuals who in turn can transform society.',
    author: 'Dr. Rajesh C. Pandya',
  },
  {
    text: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Dr. Rajesh C. Pandya',
  },
  {
    text: 'The future belongs to those who prepare for it today.',
    author: 'Dr. Rajesh C. Pandya',
  },
];

const Caro = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <div className="top-b flex w-full max-w-[1600px] mx-auto mt-[120px]">

      <div
        className="flex items-center justify-between w-full gap-6"
        style={{ padding: '20px' }}
      >
        <div className="flex gap-[100px] items-center">
          {/* Left Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-[#004f8c] text-2xl font-bold hidden bg-white rounded-[50%] h-fit p-[10px] flex items-center justify-center cursor-pointer hover:bg-transparent  md:block"

          >
            <LeftOutlined />
          </button>

          {/* Slider */}
          <div className='slider'>
            <Slider ref={sliderRef} {...settings}>
              {quotes.map((q, i) => (
                <div key={i}>
                  <AnimatePresence mode="wait">
                    {activeSlide === i && (

                      <motion.div
                        key={i}
                        initial={{
                          x: 100, // Start from right
                          opacity: 0,
                          backgroundColor: '#fff',
                        }}
                        animate={{
                          x: 0, // Slide to position
                          opacity: 1,
                          background: 'linear-gradient(90deg, #004f8c, #0066b3)',
                          transition: {
                            background: { delay: 0.6, duration: 2 },
                            x: { duration: 2, ease: 'easeOut' },
                            opacity: { duration: 0.4 },
                          },
                        }}
                        exit={{
                          x: -100, // Exit to left
                          opacity: 0,
                          transition: { duration: 2, ease: 'easeIn' },
                        }}
                        style={{
                          color: '#fff',
                          padding: '30px',
                          borderRadius: '4px',
                          height: '300px',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1, duration: 2 }}
                        >
                          <div className='w-full mb-[20px]'><img src="/images/qoutes.png" alt="" className='w-[50px] h-[50px]' /></div>

                          <div className='flex flex-col gap-[10px] md:gap-10 w-fit'>
                            <p style={{ lineHeight: '1.5' }} className='text-[18px] md:text-[20px]'>{q.text}</p>

                            <p
                              style={{
                                marginTop: '10px',
                                fontWeight: 'bold',
                                color: '#99c',
                                fontSize: '20px',

                              }}
                            >
                              {q.author}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>

                    )}
                  </AnimatePresence>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="text-[#004f8c] text-2xl font-[600] bg-white rounded-[50%] h-fit p-[10px] flex items-center justify-center cursor-pointer hover:bg-transparent hidden md:block"
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default Caro;
