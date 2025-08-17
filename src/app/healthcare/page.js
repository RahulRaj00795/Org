"use client";
import React from "react";
import {
  HeartOutlined,
  MedicineBoxOutlined,
  SmileOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Head from "next/head";

const programs = [
  {
    icon: <MedicineBoxOutlined className="text-4xl text-red-500" />,
    title: "Free Medical Camps",
    description:
      "Organizing regular health check-up camps for children and families in need.",
  },
  {
    icon: <HeartOutlined className="text-4xl text-pink-500" />,
    title: "Life-Saving Treatments",
    description:
      "Providing access to surgeries, medicines, and emergency care for critical cases.",
  },
  {
    icon: <SmileOutlined className="text-4xl text-green-500" />,
    title: "Health Awareness Programs",
    description:
      "Educating communities on hygiene, nutrition, and disease prevention.",
  },
];

const stats = [
  { number: "50+", label: "Medical Camps Organized" },
  { number: "10,000+", label: "Families Benefited" },
  { number: "300+", label: "Volunteers Engaged" },
];

const testimonials = [
  {
    name: "Riya, 12 yrs",
    feedback:
      "Thanks to the free medical camp, I was able to get proper treatment and return to school healthy.",
  },
  {
    name: "Arjun, Volunteer",
    feedback:
      "Volunteering in these programs has been a life-changing experience. Together, we're making a real difference.",
  },
];

const HealthcarePage = () => {
  return (
    <>
      <Head>
        <title>Healthcare Programs - Pandya Foundation | Medical Camps, Treatments & Health Awareness</title>
        <meta name="description" content="Pandya Foundation's healthcare initiatives include free medical camps, life-saving treatments, and health awareness programs. We've organized 50+ medical camps benefiting 10,000+ families." />
        <meta name="keywords" content="healthcare programs, medical camps, free health checkups, life-saving treatments, health awareness, medical assistance, Pandya Foundation, healthcare initiatives" />
        <link rel="canonical" href="https://pandyafoundation.org/healthcare" />

        {/* Open Graph */}
        <meta property="og:title" content="Healthcare Programs - Pandya Foundation" />
        <meta property="og:description" content="Free medical camps, life-saving treatments, and health awareness programs for families in need." />
        <meta property="og:url" content="https://pandyafoundation.org/healthcare" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Programs - Pandya Foundation" />
        <meta name="twitter:description" content="Free medical camps, life-saving treatments, and health awareness programs for families in need." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Healthcare Programs",
              "description": "Healthcare initiatives including free medical camps, life-saving treatments, and health awareness programs",
              "provider": {
                "@type": "Organization",
                "name": "Pandya Foundation"
              },
              "serviceType": "Healthcare",
              "areaServed": ["India", "United States"],
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Free Medical Camps",
                  "description": "Organizing regular health check-up camps for children and families in need"
                },
                {
                  "@type": "Offer",
                  "name": "Life-Saving Treatments",
                  "description": "Providing access to surgeries, medicines, and emergency care for critical cases"
                },
                {
                  "@type": "Offer",
                  "name": "Health Awareness Programs",
                  "description": "Educating communities on hygiene, nutrition, and disease prevention"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50 mt-[90px] md:mt-[130px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 py-16 px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Healthcare for All</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Our foundation is dedicated to ensuring that every child and family
            has access to quality healthcare, regardless of their financial
            situation.
          </p>
        </div>

        {/* Programs Section */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Healthcare Programs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((item, index) => (
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

        {/* Impact Stats */}
        <div className="bg-white py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6">
                <h3 className="text-4xl font-bold text-red-500">{stat.number}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 py-12 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Stories of Hope
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
                <h4 className="text-lg font-semibold text-red-500">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-50 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Support Our Healthcare Mission
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-6">
            With your help, we can bring hope and healing to thousands of children
            and families in need.
          </p>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HealthcarePage;
