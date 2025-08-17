"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";

const newsData = [
  {
    img: "/images/news1.png",
    title:
      "Pandya foundation continues to support Covid-19 Testing as life starts to come under control in Nj",
    snippet: `Covid-19 Saliva Testing organized by Indian Business Association (IBA) with partnerships from Accurate Diagnostics, PANDYA Foundation & others have continued to provide support for saliva testing.

A drive-through site allows pre-registration @ iba.adlabscovidtest.com to drive in and get tested. Edison Mayor Tom Lankey, Freeholder Charlie Tomaro, Assemblyman Rob Karabinchek, Councilman Ajay Patil, Councilman Richard Brescher & school board President Ralph Errico have provided unconditional support.

Other community leaders who have worked on this initiative include Dr. Raj Pandya (Pandya Foundation Inc.), Yash Pandya, IBA President Dhiren Amin, Nilesh Dasondi, Ms Parul Amin & former councilman Michael Lombardi.

For more information please visit iba.adlabscovidtest.com.`,
  },
  {
    img: "/images/g3.jpg",
    title:
      "Pandya Foundation launches new program to promote health and wellness",
  },
  {
    img: "/images/p1.jpg",
    title: "Celebrating Culture, Community & Connection",
  },
];

const Page = () => {
  return (
    <>
      <Head>
        <title>News & Updates - Pandya Foundation | Latest Initiatives & Community Events</title>
        <meta name="description" content="Stay updated with the latest news and initiatives from Pandya Foundation. Read about our Covid-19 testing support, health programs, cultural events, and community development projects in New Jersey and India." />
        <meta name="keywords" content="Pandya Foundation news, Covid-19 testing, community events, health programs, cultural events, New Jersey, community development, latest updates" />
        <link rel="canonical" href="https://pandyafoundation.org/news" />

        {/* Open Graph */}
        <meta property="og:title" content="News & Updates - Pandya Foundation" />
        <meta property="og:description" content="Latest news and initiatives from Pandya Foundation including Covid-19 testing support, health programs, and cultural events." />
        <meta property="og:url" content="https://pandyafoundation.org/news" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Updates - Pandya Foundation" />
        <meta name="twitter:description" content="Latest news and initiatives from Pandya Foundation including Covid-19 testing support, health programs, and cultural events." />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "name": "Pandya Foundation News",
              "description": "Latest news and updates from Pandya Foundation's community development initiatives",
              "url": "https://pandyafoundation.org/news",
              "publisher": {
                "@type": "Organization",
                "name": "Pandya Foundation"
              },
              "newsArticle": [
                {
                  "@type": "NewsArticle",
                  "headline": "Pandya foundation continues to support Covid-19 Testing as life starts to come under control in Nj",
                  "description": "Covid-19 Saliva Testing organized by Indian Business Association (IBA) with partnerships from Accurate Diagnostics, PANDYA Foundation & others",
                  "image": "https://pandyafoundation.org/images/news1.png",
                  "datePublished": "2024-01-01",
                  "author": {
                    "@type": "Organization",
                    "name": "Pandya Foundation"
                  }
                },
                {
                  "@type": "NewsArticle",
                  "headline": "Pandya Foundation launches new program to promote health and wellness",
                  "image": "https://pandyafoundation.org/images/g3.jpg",
                  "datePublished": "2024-01-01",
                  "author": {
                    "@type": "Organization",
                    "name": "Pandya Foundation"
                  }
                },
                {
                  "@type": "NewsArticle",
                  "headline": "Celebrating Culture, Community & Connection",
                  "image": "https://pandyafoundation.org/images/p1.jpg",
                  "datePublished": "2024-01-01",
                  "author": {
                    "@type": "Organization",
                    "name": "Pandya Foundation"
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <div className="max-w-[1200px] mx-auto mt-[90px] md:mt-[130px] mb-[130px] px-4 m">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Main News */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Image
                src={newsData[0].img}
                alt={newsData[0].title}
                width={800}
                height={500}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{newsData[0].title}</h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {newsData[0].snippet}
                </p>
              </div>
            </div>
          </div>

          {/* Right Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gray-200 pb-2">
              <span className="border-b-2 border-blue-500 pb-1">
                Recent Posts
              </span>
            </h3>
            <ul className="space-y-4">
              {newsData.slice(1).map((news, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 items-center border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="w-[70px] h-[50px] relative flex-shrink-0">
                    <Image
                      src={news.img}
                      alt={news.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="text-sm leading-snug">{news.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
