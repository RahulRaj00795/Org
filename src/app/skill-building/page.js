"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>Skill Building Programs - Pandya Foundation | Vocational Training & Technical Skills</title>
        <meta name="description" content="Pandya Foundation's skill-building programs offer vocational training in technical trades like welding, auto-mechanics, electrician work, and special programs for women. Over 600 students have graduated from our skill development initiatives." />
        <meta name="keywords" content="skill building, vocational training, technical trades, welding, auto-mechanics, electrician, solar technician, women empowerment, skill development, Pandya Foundation, NSDC" />
        <link rel="canonical" href="https://pandyafoundation.org/skill-building" />

        {/* Open Graph */}
        <meta property="og:title" content="Skill Building Programs - Pandya Foundation" />
        <meta property="og:description" content="Vocational training in technical trades and special programs for women. Over 600 students have graduated from our skill development initiatives." />
        <meta property="og:url" content="https://pandyafoundation.org/skill-building" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skill Building Programs - Pandya Foundation" />
        <meta name="twitter:description" content="Vocational training in technical trades and special programs for women. Over 600 students have graduated from our skill development initiatives." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Pandya Foundation Skill Building Center",
              "description": "Vocational training and skill development programs offering technical trades and special programs for women",
              "url": "https://pandyafoundation.org/skill-building",
              "foundingDate": "2010",
              "founder": {
                "@type": "Person",
                "name": "Dr. Rajesh C. Pandya"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Gujarat",
                  "addressCountry": "IN"
                }
              },
              "educationalProgram": [
                {
                  "@type": "EducationalProgram",
                  "name": "Technical & Vocational Trades",
                  "description": "Training in welding, auto-mechanics, office assistantship, fitting, solar technology, and electrical work"
                },
                {
                  "@type": "EducationalProgram",
                  "name": "Special Trades for Women",
                  "description": "Training in tailoring and beauty therapy for women empowerment"
                }
              ],
              "numberOfStudents": "600+",
              "alumni": "500+ male students, 100+ female students"
            })
          }}
        />
      </Head>
      <div className="bg-white mt-[90px] md:mt-[130px]">
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
    </>
  );
};

export default Page;
