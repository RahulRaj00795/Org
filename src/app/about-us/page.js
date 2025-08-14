import React from "react";

const page = () => {
  return (
    <div className="mt-[90px] md:mt-[130px]">
      <div className="intro ">
        <div className="flex justify-center items-center gap-8  flex-col">
          <div className="flex  max-w-[1200px]  mx-[20px]  md:mx-[50px]   flex-col md:flex-row">
            {/* Image - Left to center */}
            <div className=" w-full md:w-[460px]">
              <img
                src="/images/person2.jpg"
                alt=""
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
              current Chief Executive Officer of Quantum Integrators, and former
              Country Head – Americas for L&T Infotech (LTI), Dr. Pandya has led
              transformative business initiatives, scaled global delivery
              operations, and built technology partnerships that have not only
              reshaped enterprises but also significantly contributed to
              economic and employment growth in India and the United States.
            </div>
          </div>
          <div className="flex  max-w-[1200px] mx-[20px]  md:mx-[50px]   leading-relaxed text-[20px]">
            Celebrating Culture, Community & Connection Pandya Foundation
            Presents: Garba Night in New Jersey For the past several years, the
            Pandya Foundation has proudly organized Garba Night in New Jersey —
            a vibrant celebration of Indian music, dance, and tradition. What
            started as a community event has now become one of the most
            anticipated cultural gatherings in the area. Founded by Rajesh C.
            Pandya, the Pandya Foundation is deeply committed to supporting
            organizations both in New Jersey and across India. Our mission is
            rooted in service, cultural preservation, and community engagement.
            We are actively involved in major events across New Jersey,
            continuously working to promote Indian culture, support local
            initiatives, and bring people together through shared heritage and
            values. What We Stand For: Supporting charitable organizations in
            the U.S. and India Promoting Indian festivals, traditions, and
            cultural awareness Creating spaces for community connection and
            celebration Encouraging the next generation to stay rooted in
            culture Whether you’ve been part of our Garba Night in the past or
            are joining us for the first time, we welcome you with open arms.
            Let’s keep the spirit of tradition alive — together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
