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
  { src: "/images/p2.jpg", category: "healthcare" },
  { src: "/images/p3.jpg", category: "healthcare" },
  { src: "/images/p4.jpg", category: "healthcare" },
  { src: "/images/p5.jpg", category: "healthcare" },
  { src: "/images/p6.jpg", category: "healthcare" },
];

const Photo = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
   <div className="flex justify-center ">
     <div className="py-10 max-w-[1200px] mx-[50px]">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`font-semibold ${
              activeCategory === cat.value
                ? "bg-blue-800 text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-blue-800"
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
   </div>
  );
};

export default Photo;
