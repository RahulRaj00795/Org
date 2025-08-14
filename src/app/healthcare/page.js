"use client";
import React from "react";
import {
  HeartOutlined,
  MedicineBoxOutlined,
  SmileOutlined,
} from "@ant-design/icons";

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

const HealthcarePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
  );
};

export default HealthcarePage;
