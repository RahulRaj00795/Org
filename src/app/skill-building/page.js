"use client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white mt-[130px]">
      {/* Vision & Intro Section */}
      <section
        className="max-w-[1200px] mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center"
        style={{
          backgroundImage: "url('/images/newsbg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Vision Card */}
        <div className="bg-white border shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-4">VISION</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            We will uphold, practise and propagate the highest standards of
            teaching and skill-building with a view to shaping our youth to
            become responsible and productive members of society.
            <br />
            <br />
            In fostering learning and the development of skills, we will equip
            our youth to address the challenges they are likely to encounter in
            the professional world.
            <br />
            <br />
            We will remain committed to the principles and ideals of our
            founding family and strive to ensure that the benefits of
            interventions reach the largest number of people.
          </p>
        </div>

        {/* Intro Text */}
        <div>
          <p className="text-gray-700 leading-relaxed">
            The Pandya Foundation is the first to introduce the concept of skill
            training to villages in south Gujarat. Since inception, has over 500
            male students and 100 female students have graduated from various
            colleges of maharashtra.
            <br />
            <br />
            The Centre was envisioned by Dr. Rajesh C. Pandya, whose passion for
            advancing skill development is widely recognized across industries.
            He also served as the Chairman of the National Skill Development
            Corporation (NSDC) under the Government of India from 2018 to 2022.
          </p>
        </div>
      </section>

      {/* Trades Offered */}
      <section
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: "url('/images/sb1.webp')",
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative max-w-[1000px] mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-8">TRADES OFFERED</h2>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {/* Technical & Vocational Trades */}
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-blue-800 mb-4">
                Technical & Vocational Trades
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Welder</li>
                <li>Auto-Mechanic</li>
                <li>Office Assistantship</li>
                <li>Fitter</li>
                <li>Solar Technician</li>
                <li>Electrician</li>
              </ul>
            </div>

            {/* Special Trades for Women */}
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-pink-700 mb-4">
                Special Trades for Women
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Tailor</li>
                <li>Assistant Beauty Therapist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
