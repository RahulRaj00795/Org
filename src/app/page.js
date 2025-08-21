"use client";
import React, { useState } from "react";
import Intro from "../components/Intro";
import Photo from "../components/Photo";
import Caro from "../components/Caro";
import News from "../components/News";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Pandya Foundation - Home | Empowering Communities Through Education,
          Healthcare & Skill Building
        </title>
        <meta
          name="description"
          content="Welcome to Pandya Foundation. We support education, healthcare, and skill-building initiatives in India and the United States. Promoting Indian culture and community development."
        />
        <meta
          name="keywords"
          content="Pandya Foundation, home, education, healthcare, skill building, community development, Indian culture"
        />
        <link rel="canonical" href="https://pandyafoundation.org" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Pandya Foundation - Empowering Communities"
        />
        <meta
          property="og:description"
          content="Supporting education, healthcare, and skill-building initiatives in India and the United States."
        />
        <meta property="og:url" content="https://pandyafoundation.org" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pandya Foundation - Empowering Communities"
        />
        <meta
          name="twitter:description"
          content="Supporting education, healthcare, and skill-building initiatives in India and the United States."
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonProfit",
              name: "Pandya Foundation",
              description:
                "A non-profit organization dedicated to supporting education, healthcare, and skill-building initiatives in India and the United States.",
              url: "https://pandyafoundation.org",
              logo: "https://pandyafoundation.org/images/logo.png",
              foundingDate: "2010",
              founder: {
                "@type": "Person",
                name: "Dr. Rajesh C. Pandya",
                jobTitle: "Founder & CEO",
                description:
                  "Technology executive, strategist, and humanitarian with over 32 years of experience",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "New Jersey",
              },
              sameAs: ["https://pandyafoundation.org"],
              areaServed: ["India", "United States"],
              serviceType: [
                "Education",
                "Healthcare",
                "Skill Building",
                "Cultural Preservation",
              ],
            }),
          }}
        />
        <Analytics />
      </Head>
      <Caro />
      <Intro />
      <News />
      <Photo />
    </>
  );
}
