"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Photo from "./components/Photo";

const categories = [
  { label: "ALL", value: "all" },
  // { label: "HEALTHCARE", value: "healthcare" },
  // { label: "EDUCATION", value: "education" },
  // { label: "SKILL BUILDING", value: "skill-building" },
];

const images = [
  { src: "/images/health1.jpg", category: "healthcare" },
  { src: "/images/health2.jpg", category: "healthcare" },
  { src: "/images/health3.jpg", category: "healthcare" },
  { src: "/images/health4.jpg", category: "healthcare" },
  { src: "/images/edu1.jpg", category: "education" },
  { src: "/images/edu2.jpg", category: "education" },
  { src: "/images/edu3.jpg", category: "education" },
  { src: "/images/edu4.jpg", category: "education" },
  { src: "/images/skill1.jpg", category: "skill-building" },
  { src: "/images/skill2.jpg", category: "skill-building" },
  { src: "/images/skill3.jpg", category: "skill-building" },
  { src: "/images/skill4.jpg", category: "skill-building" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);
  return (
    <>
      <Intro />

      <Photo />
    </>
  );
}
