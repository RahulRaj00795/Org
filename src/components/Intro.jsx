"use client";

import React, { useState, useEffect, useRef } from "react";
import { color, motion } from "framer-motion";
import { Carousel } from "antd";

const Intro = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const data = [
    {
      img: "/images/h1.jpg",
      title: "Health",
      desc: "The Pandya Foundation is committed to bringing the benefits of advanced medical technology to the disadvantaged and the needy. Its wide-ranging initiatives in south Gujarat and in Mumbai are extending a lifeline of hope to those in need.",
      link: "/health-care",
      color: "#77B9D1",
    },
    {
      img: "/images/e1.jpg",
      title: "Education",
      desc: "The Pandya Foundation promotes education by setting up schools in rural and urban India, with special emphasis on creating learning opportunities for the girl child. Its schools in south Gujarat cater largely to children from the disadvantaged sections of society.",
      link: "/education",
      color: "#F2C012",
    },
    {
      img: "/images/skill1.png",
      title: "Skill Building",
      desc: "The Pandya Foundation is the first to introduce the concept of skill training to villages in south Gujarat. Since inception, has over 500 male students and 100 female students have graduated from various colleges of maharashtra.  ",
      link: "/skill-building",
      color: "#78B8AA",
    },
  ];

  const items = [
    {
      img: "/b1.jpg",
    },
    {
      img: "/b2.jpg",
    },
  ];

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


      <div ref={ref} className="intro py-[50px]">
        <div className="flex justify-center items-center gap-8 ">
          <div className="flex  max-w-[1200px]  mx-[15px]  gap-1.5 md:mx-[50px] flex-wrap lg:flex-nowrap ">
            {/* Image - Left to center */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className=" w-full md:w-[50%]"
            >
              <img src="/images/p6.jpg" alt="" className=" h-[460px]  " />
            </motion.div>

            {/* Text - Right to center */}
            <motion.div
              className=" w-full leading-relaxed text-[20px]"
              initial={{ x: "100%", opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <a href="" className="text-[#68C17C]">
                Dr. Rajesh C. Pandya
              </a>{" "}
              is the founder of{" "}
              <a className="text-[#68C17C]">
                Pandya Foundation
              </a>{" "}
              & a globally respected technology executive, strategist, and
              humanitarian whose career spans over 32 years across the
              Information Technology and business services landscape. As the
              current <a className="text-[#68C17C]"> Chief Executive Officer of Quantum Integrators</a> , and former
              Country Head – Americas for <a className="text-[#68C17C]">L&T Infotech (LTI)</a>, Dr. Pandya has led

              transformative business initiatives, scaled global delivery
              operations, and built technology partnerships that have not only
              reshaped enterprises but also significantly contributed to
              economic and employment growth in India and the United States.
              <p className="mt-4">
                A founding pillar of the <a className="text-[#68C17C]">L&T technology group</a> , Dr. Pandya played a vital

                role in the evolution of the business from its early startup phase to a globally
                recognized $4 billion enterprise. Under his leadership, LTI expanded its international footprint, secured high-value contracts with Fortune 500 companies, and established delivery excellence as a hallmark of India’s IT services reputation. His visionary approach to strategic outsourcing, digital transformation, and talent development created a sustainable model that continues to fuel global demand for Indian technology professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="banner py-[50px]">
        <div className="flex justify-center items-center gap-8  ">
          <div className="flex  max-w-[1200px] justify-between w-full gap-[20px] mx-[15px]  md:mx-[50px] flex-wrap lg:flex-nowrap ">

            {data.map((item, index) => (
              <div
                key={index}
                className={`w-full p-[20px]`}
                style={{ backgroundColor: item.color }}
              >
                <div className="w-full  justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[230px] w-full object-cover"

                  />
                </div>
                <div className="w-full h-[230px] ">
                  <h2 className="text-3xl font-bold text-center my-6  text-[#fff]">
                    {item.title}
                  </h2>
                  <p className="text-center">{item.desc}</p>
                </div>
                <div className="flex justify-center">
                  <a
                    href={item.link}
                    className="text-center bg-[#1C5888] py-[10px] px-[20px] rounded-[6px] text-[#fff]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
