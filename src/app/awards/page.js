// import React from "react";
// import Head from "next/head";

// const AwardsPage = () => {
//   return (
//     <>
//       <Head>
//         <title>
//           Awards & Recognitions - Pandya Foundation | Community Service &
//           Humanitarian Impact
//         </title>
//         <meta
//           name="description"
//           content="Discover the prestigious awards and recognitions received by Pandya Foundation for community service, cultural preservation, and humanitarian impact in India and the United States."
//         />
//         <meta
//           name="keywords"
//           content="Pandya Foundation awards, Save Indian Farmer Medal, Brahm Gaurav Award, humanitarian recognition, community service awards, Indian culture preservation"
//         />
//         <link rel="canonical" href="https://pandyafoundation.org/awards" />

//         {/* Open Graph */}
//         <meta
//           property="og:title"
//           content="Awards & Recognitions - Pandya Foundation"
//         />
//         <meta
//           property="og:description"
//           content="Discover the prestigious awards and recognitions received by Pandya Foundation for community service and humanitarian impact."
//         />
//         <meta property="og:url" content="https://pandyafoundation.org/awards" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Awards & Recognitions - Pandya Foundation"
//         />
//         <meta
//           name="twitter:description"
//           content="Discover the prestigious awards and recognitions received by Pandya Foundation for community service and humanitarian impact."
//         />

//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "Pandya Foundation",
//               description:
//                 "A non-profit organization honored with numerous awards for community service, cultural preservation, and humanitarian impact",
//               url: "https://pandyafoundation.org/awards",
//               award: [
//                 "Save Indian Farmer Medal of Honor",
//                 "Brahm Gaurav Award",
//                 "Humanitarian Recognition",
//                 "Educational Philanthropy Recognition",
//                 "Friends of Gujarat - Mera India, New India Award",
//                 "Indian Business Association (IBA) Honor",
//                 "India House Medal of Honor",
//                 "Mayor's Award",
//                 "Law Enforcement Partnership Award",
//                 "Long Service Award (L&T Infotech)",
//               ],
//               sameAs: ["https://pandyafoundation.org"],
//             }),
//           }}
//         />
//       </Head>

//       <div className="mt-[90px] md:mt-[130px] flex justify-center ">
//         <div className="max-w-[1200px] mx-[20px] md:mx-[50px] ">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Awards & Recognitions
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//               The Pandya Foundation has been honored with numerous awards that
//               celebrate its commitment to community service, cultural
//               preservation, and humanitarian impact. These recognitions stand as
//               a testament to our mission of serving with compassion and building
//               stronger, more united communities.
//             </p>
//           </div>

//           {/* Awards Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Save Indian Farmer Medal */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Save Indian Farmer Medal of Honor
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 For valuable contributions and support towards improving the
//                 lives of poor and underprivileged farmers in India.
//               </p>
//             </div>

//             {/* Brahm Gaurav Award */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Brahm Gaurav Award
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Honored for outstanding community service in helping
//                 underprivileged families in India.
//               </p>
//             </div>

//             {/* Humanitarian Recognition */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Humanitarian Recognition
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 For leading efforts in rebuilding a flood-impacted village in
//                 Maharashtra, restoring homes and hope.
//               </p>
//             </div>

//             {/* Educational Philanthropy */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9 12a1 1 0 01-2 0V9a1 1 0 012 0v3zm3-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Educational Philanthropy Recognition
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 For providing access to education and resources to
//                 underprivileged students in India.
//               </p>
//             </div>

//             {/* Friends of Gujarat */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Friends of Gujarat – Mera India, New India Award
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Celebrated for promoting the vision of a brighter, noble, and
//                 community-focused India.
//               </p>
//             </div>

//             {/* IBA Honor */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Indian Business Association (IBA) Honor
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 For demonstrating leadership, supporting the India Day Parade,
//                 and fostering the Indian American community.
//               </p>
//             </div>

//             {/* India House Medal */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   India House Medal of Honor
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Awarded for promoting Indian culture and festivals,
//                 strengthening cultural pride in the diaspora.
//               </p>
//             </div>

//             {/* Mayor's Award */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Mayor's Award
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Recognition for advancing diversity, unity, and cultural
//                 celebrations across New Jersey.
//               </p>
//             </div>

//             {/* Law Enforcement Partnership */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M18 8A6 6 0 006 8c0 7-3 9-3 9s3 2 3 2 3-2 3-2 3-2 3-2 3 2 3 2 3-2 3-2 3-2 3-2c0-7-6-6-6-6zm-8 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Law Enforcement Partnership Award
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 For building strong partnerships and providing exceptional
//                 support to Asian American law enforcement officers.
//               </p>
//             </div>

//             {/* Long Service Award */}
//             <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#68C17C] hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-[#68C17C] rounded-full flex items-center justify-center mr-4">
//                   <svg
//                     className="w-6 h-6 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   Long Service Award (L&T Infotech)
//                 </h3>
//               </div>
//               <p className="text-gray-600 leading-relaxed">
//                 Celebrating over 25 years of leadership and excellence in the IT
//                 industry, reflecting the foundation's professional roots in
//                 integrity and innovation.
//               </p>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#68C17C] to-[#4CAF50] rounded-lg text-white">
//             <h2 className="text-3xl font-bold mb-4">
//               Join Us in Making a Difference
//             </h2>
//             <p className="text-xl mb-6 opacity-90">
//               These awards inspire us to continue our mission of serving
//               communities with compassion and dedication.
//             </p>
//             <a
//               href="/about-us"
//               className="inline-block bg-white text-[#68C17C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
//             >
//               Learn More About Our Mission
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AwardsPage;

import React from "react";
import Head from "next/head";

const awards = [
  {
    title: "Save Indian Farmer Medal of Honor",
    description:
      "For valuable contributions and support towards improving the lives of poor and underprivileged farmers in India.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Brahm Gaurav Award",
    description:
      "Honored for outstanding community service in helping underprivileged families in India.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Humanitarian Recognition",
    description:
      "For leading efforts in rebuilding a flood-impacted village in Maharashtra, restoring homes and hope.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Educational Philanthropy Recognition",
    description:
      "For providing access to education and resources to underprivileged students in India.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Friends of Gujarat – Mera India, New India Award",
    description:
      "Celebrated for promoting the vision of a brighter, noble, and community-focused India.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Indian Business Association (IBA) Honor",
    description:
      "For demonstrating leadership, supporting the India Day Parade, and fostering the Indian American community.",
    image: "/images/trophy.jpg",
  },
  {
    title: "India House Medal of Honor",
    description:
      "Awarded for promoting Indian culture and festivals, strengthening cultural pride in the diaspora.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Mayor's Award",
    description:
      "Recognition for advancing diversity, unity, and cultural celebrations across New Jersey.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Law Enforcement Partnership Award",
    description:
      "For building strong partnerships and providing exceptional support to Asian American law enforcement officers.",
    image: "/images/trophy.jpg",
  },
  {
    title: "Long Service Award (L&T Infotech)",
    description:
      "Celebrating over 25 years of leadership and excellence in the IT industry, reflecting the foundation's professional roots in integrity and innovation.",
    image: "/images/trophy.jpg",
  },
];

const AwardsPage = () => {
  return (
    <>
      <Head>
        <title>
          Awards & Recognitions - Pandya Foundation | Community Service &
          Humanitarian Impact
        </title>
        <meta
          name="description"
          content="Discover the prestigious awards and recognitions received by Pandya Foundation for community service, cultural preservation, and humanitarian impact in India and the United States."
        />
      </Head>

      <div className="mt-[90px] md:mt-[130px] max-w-[1200px] mx-auto px-6 bg-url('/images/tbanner2.jpg') bg-center bg-cover py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 tbanner">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Awards & Recognitions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Pandya Foundation has been honored with numerous awards that
            celebrate its commitment to community service, cultural
            preservation, and humanitarian impact.
          </p>
        </div>

        {/* Awards Rows (all left image + right text) */}
        {/* <div className="grid gap-12 md:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-shrink-0 w-40 h-40">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        {/* Awards Grid as Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.title}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="w-24 h-24 mb-4">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-[#231F20] mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600 text-[14px] font-[600] md:text-base">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center my-20 p-10 bg-gradient-to-r from-[#687ec1] to-[#4c70af] rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-6 opacity-90">
            These awards inspire us to continue our mission of serving
            communities with compassion and dedication.
          </p>
          <a
            href="/about-us"
            className="inline-block bg-white text-[#6875c1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Learn More About Our Mission
          </a>
        </div>
      </div>
    </>
  );
};

export default AwardsPage;
