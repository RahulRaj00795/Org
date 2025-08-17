"use client";
import React from "react";
import { SmileOutlined, BookOutlined, HeartOutlined } from "@ant-design/icons";
import Head from "next/head";

const initiatives = [
  {
    icon: <BookOutlined className="text-4xl text-blue-500" />,
    title: "School Supplies Drive",
    description:
      "Providing books, uniforms, and stationery to children from underprivileged backgrounds.",
  },
  {
    icon: <SmileOutlined className="text-4xl text-green-500" />,
    title: "Scholarship Programs",
    description:
      "Offering full and partial scholarships to support bright young minds.",
  },
  {
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    title: "After-School Tutoring",
    description:
      "Helping children improve academic skills through volunteer-led sessions.",
  },
];

const EducationPage = () => {
  return (
    <>
      <Head>
        <title>Education Programs - Pandya Foundation | School Supplies, Scholarships & Tutoring</title>
        <meta name="description" content="Pandya Foundation's education initiatives include school supplies drives, scholarship programs, and after-school tutoring. We're committed to breaking the cycle of poverty through quality education for children in need." />
        <meta name="keywords" content="education programs, school supplies, scholarships, after-school tutoring, children education, poverty alleviation, Pandya Foundation, educational initiatives" />
        <link rel="canonical" href="https://pandyafoundation.org/education" />

        {/* Open Graph */}
        <meta property="og:title" content="Education Programs - Pandya Foundation" />
        <meta property="og:description" content="School supplies drives, scholarship programs, and after-school tutoring for children in need." />
        <meta property="og:url" content="https://pandyafoundation.org/education" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education Programs - Pandya Foundation" />
        <meta name="twitter:description" content="School supplies drives, scholarship programs, and after-school tutoring for children in need." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Education Programs",
              "description": "Educational initiatives including school supplies drives, scholarship programs, and after-school tutoring",
              "provider": {
                "@type": "Organization",
                "name": "Pandya Foundation"
              },
              "serviceType": "Education",
              "areaServed": ["India", "United States"],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "School Supplies Drive",
                  "description": "Providing books, uniforms, and stationery to children from underprivileged backgrounds"
                },
                {
                  "@type": "Offer",
                  "name": "Scholarship Programs",
                  "description": "Offering full and partial scholarships to support bright young minds"
                },
                {
                  "@type": "Offer",
                  "name": "After-School Tutoring",
                  "description": "Helping children improve academic skills through volunteer-led sessions"
                }
              ]
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50 mt-[90px] md:mt-[130px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Education for Every Child</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Our foundation is committed to breaking the cycle of poverty by
            providing access to quality education for children in need.
          </p>
        </div>

        {/* Initiatives Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Education Initiatives
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-50 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-6">
            Every contribution counts — together, we can ensure that no child is
            left behind in education.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationPage;
