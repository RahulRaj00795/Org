// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const categories = [
//   { label: 'ALL', value: 'all' },
//   { label: 'HEALTHCARE', value: 'healthcare' },
//   { label: 'EDUCATION', value: 'education' },
//   { label: 'SKILL BUILDING', value: 'skill-building' },
// ];

// const images = [
//   { src: '/images/health1.jpg', category: 'healthcare' },
//   { src: '/images/health2.jpg', category: 'healthcare' },
//   { src: '/images/health3.jpg', category: 'healthcare' },
//   { src: '/images/health4.jpg', category: 'healthcare' },
//   { src: '/images/edu1.jpg', category: 'education' },
//   { src: '/images/edu2.jpg', category: 'education' },
//   { src: '/images/edu3.jpg', category: 'education' },
//   { src: '/images/edu4.jpg', category: 'education' },
//   { src: '/images/skill1.jpg', category: 'skill-building' },
//   { src: '/images/skill2.jpg', category: 'skill-building' },
//   { src: '/images/skill3.jpg', category: 'skill-building' },
//   { src: '/images/skill4.jpg', category: 'skill-building' },

// ];

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState('healthcare');

//   const filteredImages =
//     activeCategory === 'all'
//       ? images
//       : images.filter((img) => img.category === activeCategory);

//   return (
//     <div className=" py-10 max-w-[1200px]">

//      <div className=''>

//          <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

//       {/* Tabs */}
//       <div className="flex !flex-wrap justify-center gap-6 mb-8 ">
//         {categories.map((cat) => (
//           <button
//             key={cat.value}
//             onClick={() => setActiveCategory(cat.value)}
//             className={`font-semibold ${
//               activeCategory === cat.value
//                 ? 'bg-blue-800 text-white px-4 py-2 rounded-lg'
//                 : 'text-black hover:text-blue-800'
//             }`}
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* Image Grid with Animation */}
//       {/* <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> */}
//       <motion.div  className="flex flex-wrap">
//         <AnimatePresence>
//           {filteredImages.map((img, index) => (
//             <motion.div
//               key={img.src}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={img.src}
//                 alt=""
//                 className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//      </div>
//     </div>
//   );
// };

// export default Gallery;


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { label: 'ALL', value: 'all' },
  { label: 'HEALTHCARE', value: 'healthcare' },
  { label: 'EDUCATION', value: 'education' },
  { label: 'SKILL BUILDING', value: 'skill-building' },
];

const images = [
  { src: '/images/health1.jpg', category: 'healthcare' },
  { src: '/images/health2.jpg', category: 'healthcare' },
  { src: '/images/health3.jpg', category: 'healthcare' },
  { src: '/images/health4.jpg', category: 'healthcare' },
  { src: '/images/edu1.jpg', category: 'education' },
  { src: '/images/edu2.jpg', category: 'education' },
  { src: '/images/edu3.jpg', category: 'education' },
  { src: '/images/edu4.jpg', category: 'education' },
  { src: '/images/skill1.jpg', category: 'skill-building' },
  { src: '/images/skill2.jpg', category: 'skill-building' },
  { src: '/images/skill3.jpg', category: 'skill-building' },
  { src: '/images/skill4.jpg', category: 'skill-building' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('healthcare');

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="py-10 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`font-semibold ${
              activeCategory === cat.value
                ? 'bg-blue-800 text-white px-4 py-2 rounded-lg'
                : 'text-black hover:text-blue-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Flex Image Layout */}
      <motion.div className="flex flex-wrap gap-4 justify-center">
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-lg flex-[1_1_calc(25%-1rem)] min-w-[250px] max-w-[300px]"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Gallery;
