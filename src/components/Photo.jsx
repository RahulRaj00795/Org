import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { label: "ALL", value: "all" },
  { label: "HEALTHCARE", value: "healthcare" },
  //   { label: "EDUCATION", value: "education" },
  //   { label: "SKILL BUILDING", value: "skill-building" },
];

const images = [
  { src: "/images/p1.jpg", category: "healthcare" },
  { src: "/images/p3.jpg", category: "healthcare" },
  { src: "/images/p5.jpg", category: "healthcare" },
  { src: "/images/p2.jpg", category: "healthcare" },
  { src: "/images/p4.jpg", category: "healthcare" },
  { src: "/images/p6.jpg", category: "healthcare" },
  { src: "/images/g1.jpg", category: "healthcare" },
  { src: "/images/g2.jpg", category: "healthcare" },
  { src: "/images/g3.jpg", category: "healthcare" },
  { src: "/images/g4.jpg", category: "healthcare" },
  { src: "/images/g5.jpg", category: "healthcare" },
  { src: "/images/g6.jpg", category: "healthcare" },
  { src: "/images/g9.jpg", category: "healthcare" },
  { src: "/images/g8.jpg", category: "healthcare" },

  { src: "/images/g77.jpg", category: "healthcare" },
  { src: "/images/g88.jpg", category: "healthcare" },
  { src: "/images/g99.jpg", category: "healthcare" },

];
const imagesWithText = [
  { src: "/images/g11.jpg", text: 'Award given by Padma Bhushan Mr AM Naik, Chairman of Larsen & Toubro' },
  { src: "/images/g22.jpg", text: 'Organizing Indian, keeping alive Hindi cultural heritage and traditions alive in USA by inviting various artists from India and to USA' },
  { src: "/images/g33.jpg", text: 'Honourable Minister of Maharashtra, Industries Department,Shri Uday Samant ,' },
  { src: "/images/g44.jpg", text: 'With Vivek Ramaswamy, USA Presidential candidate' },
  { src: "/images/g55.jpg", text: 'New Jersey State house with Gorvenor Phil Murphy, Speaker of the house Craig Coughlin' },
  { src: "/images/g66.jpg", text: 'With NJ State Assemblymen Sterley Stanley and Assemblymen Robert Karabincheck' },

]

const Photo = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="flex justify-center ">
      <div className="py-10 max-w-[1200px] mx-[10px]  md:mx-[50px]">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

        {/* Tabs */}

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {imagesWithText.map((item, idx) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl shadow-lg overflow-hidden bg-white"
            >
              <img
                src={item.src}
                alt={item.text}
                className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center text-[16px] font-bold #e0e0e0">
                {item.text}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
                className="overflow-hidden rounded-lg shadow-lg flex-[1_1_calc(25%-1rem)] w-full min-w-[250px] md:max-w-[300px]"
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
    </div>
  );
};

export default Photo;
