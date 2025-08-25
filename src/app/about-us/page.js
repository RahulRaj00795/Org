import React from "react";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>
          About Us - Pandya Foundation | Dr. Rajesh C. Pandya | Community
          Development
        </title>
        <meta
          name="description"
          content="Learn about Dr. Rajesh C. Pandya, founder of Pandya Foundation. A technology executive and humanitarian dedicated to community development, cultural preservation, and charitable initiatives in New Jersey and India."
        />
        <meta
          name="keywords"
          content="Dr. Rajesh C. Pandya, Pandya Foundation founder, about us, community development, Indian culture, Garba Night, New Jersey, charity, technology executive"
        />
        <link rel="canonical" href="https://pandyafoundation.org/about-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Us - Pandya Foundation | Dr. Rajesh C. Pandya"
        />
        <meta
          property="og:description"
          content="Learn about Dr. Rajesh C. Pandya, founder of Pandya Foundation. Dedicated to community development and cultural preservation."
        />
        <meta
          property="og:url"
          content="https://pandyafoundation.org/about-us"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Pandya Foundation | Dr. Rajesh C. Pandya"
        />
        <meta
          name="twitter:description"
          content="Learn about Dr. Rajesh C. Pandya, founder of Pandya Foundation. Dedicated to community development and cultural preservation."
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Rajesh C. Pandya",
              jobTitle: "Founder & CEO",
              worksFor: {
                "@type": "Organization",
                name: "Pandya Foundation",
              },
              description:
                "Technology executive, strategist, and humanitarian with over 32 years of experience in Information Technology and business services",
              url: "https://pandyafoundation.org/about-us",
              sameAs: ["https://pandyafoundation.org"],
              knowsAbout: [
                "Technology",
                "Business Strategy",
                "Community Development",
                "Cultural Preservation",
                "Philanthropy",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Chief Executive Officer",
                occupationalCategory: "Technology Executive",
              },
            }),
          }}
        />
      </Head>
      <div className="mt-[90px] md:mt-[130px]">
        <div className="intro bg-no-repeat ">
          <div className="flex justify-center items-center gap-8  flex-col">
            <div className="flex  max-w-[1200px]  mx-[20px]  md:mx-[50px]   flex-col md:flex-row">
              {/* Image - Left to center */}
              <div className=" w-full md:w-[460px]">
                <img
                  src="/images/person2.jpg"
                  alt="Dr. Rajesh C. Pandya - Founder of Pandya Foundation"
                  className=" h-[360px] object-cover "
                />
              </div>

              {/* Text - Right to center */}
              <div className=" w-full leading-relaxed text-[20px]">
                <a href="" className="text-[#68C17C]">
                  Dr. Rajesh C. Pandya
                </a>{" "}
                is the founder of{" "}
                <a href="" className="text-[#68C17C]">
                  Pandya Foundation
                </a>{" "}
                & a globally respected technology executive, strategist, and
                humanitarian whose career spans over 32 years across the
                Information Technology and business services landscape. As the
                current Chief Executive Officer of Quantum Integrators, and
                former Country Head – Americas for L&T Infotech (LTI), Dr.
                Pandya has led transformative business initiatives, scaled
                global delivery operations, and built technology partnerships
                that have not only reshaped enterprises but also significantly
                contributed to economic and employment growth in India and the
                United States.
              </div>
            </div>
            <div className="  max-w-[1200px] mx-[20px]  md:mx-[50px]   leading-relaxed text-[20px]">
              <a href="" className="font-[600] text-[#68C17c]">
                Pandya Foundation
              </a>{" "}
              is more than just a non-profit — it is a movement of compassion,
              responsibility, and family-driven service. Officially established
              in March 2020 as a registered 501(c)(3) organization in New
              Jersey, the Foundation carries forward a legacy of community
              service that began in 2008. Founded by{" "}
              <a href="" className="font-[600] text-[#68C17c]">
                Dr. Rajesh C. Pandya
              </a>{" "}
              and{" "}
              <a href="" className="font-[600] text-[#68C17c]">
                Shilpa Pandya
              </a>
              , it was born out of their shared vision to create meaningful
              change and uplift lives through selfless service. From the very
              beginning, the Pandya family believed in the power of kindness and
              the importance of standing by the community in times of need. Long
              before its formal registration, the Foundation’s efforts included
              food drives, youth engagement, senior citizen support, and
              healthcare assistance — always guided by the principle that “no
              act of service is too small.” When the world faced the COVID-19
              pandemic, Pandya Foundation became a pillar of hope. It organized
              community testing sites, distributed essential healthcare
              supplies, and provided food and relief support to families and
              senior citizens at a time when help was needed most. These efforts
              not only strengthened the Foundation’s bond with the community but
              also expanded its mission to create sustainable, long-term impact.
              Today, under the leadership of its founders, Dr. Rajesh C. Pandya
              and Shilpa Pandya, the Foundation continues to grow as a beacon of
              service. Its work spans across healthcare, education, youth
              empowerment, senior care, and social welfare initiatives, while
              also collaborating with other organizations to magnify its reach.
              By actively involving the next generation in volunteerism, the
              Foundation ensures that the values of compassion, empathy, and
              responsibility remain alive for years to come. At its heart,
              Pandya Foundation remains a family-led initiative with a global
              vision. It is built on the belief that small acts of kindness can
              create lasting waves of change — and through every project, drive,
              and initiative, the Foundation strives to build a stronger,
              healthier, and more compassionate world for all.
            </div>

            <div className="max-w-[1200px] w-full mx-[20px] md:mx-[50px] mt-10 grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center border border-gray-100">
                <h2 className="text-3xl font-bold text-[#68C17C] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
                  To serve humanity with compassion by uplifting communities,
                  empowering youth, supporting seniors, and providing
                  healthcare, education, and social welfare. We are committed to
                  transforming small acts of kindness into lasting change that
                  strengthens society locally and globally.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center border border-gray-100">
                <h2 className="text-3xl font-bold text-[#68C17C] mb-6">
                  Our Vision
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
                  To build a world where every individual has the opportunity to
                  live with dignity, hope, and support — creating stronger,
                  healthier, and more compassionate communities for generations
                  to come.
                </p>
              </div>
            </div>

            <div className="flex  max-w-[1200px] mx-[20px]  md:mx-[50px]   leading-relaxed text-[20px]">
              Celebrating Culture, Community & Connection Pandya Foundation
              Presents: Garba Night in New Jersey For the past several years,
              the Pandya Foundation has proudly organized Garba Night in New
              Jersey — a vibrant celebration of Indian music, dance, and
              tradition. What started as a community event has now become one of
              the most anticipated cultural gatherings in the area. Founded by
              Rajesh C. Pandya, the Pandya Foundation is deeply committed to
              supporting organizations both in New Jersey and across India. Our
              mission is rooted in service, cultural preservation, and community
              engagement. We are actively involved in major events across New
              Jersey, continuously working to promote Indian culture, support
              local initiatives, and bring people together through shared
              heritage and values. What We Stand For: Supporting charitable
              organizations in the U.S. and India Promoting Indian festivals,
              traditions, and cultural awareness Creating spaces for community
              connection and celebration Encouraging the next generation to stay
              rooted in culture Whether you've been part of our Garba Night in
              the past or are joining us for the first time, we welcome you with
              open arms. Let's keep the spirit of tradition alive — together.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
