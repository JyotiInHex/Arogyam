import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhyUsData = () => {
  const whyChoose = [
    "All-in-One Health Platform.",
    "Expert Medical Guidance.",
    "Affordable and Accessible.",
    "24/7 Healthcare Support.",
    "Data Security Guaranteed.",
  ];

  return (
    <section className="my-24 px-10 md:px-20 py-14 md:py-20 w-full h-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white">
      <div className="w-full h-full flex flex-col items-start justify-center gap-7">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl text-[#fe7f18] font-playfair font-semibold  ">
            Why Choose Us?
          </h3>
          <h2 className="text-4xl text-[#435a65] font-poppins font-semibold   ">
            Empowering Your Journey to Holistic Health and Wellness.
          </h2>
          <h5 className="text-xl text-[#263238] font-montserrat font-medium">
            Experience the Perfect Blend of Expertise, Technology, and Care.
          </h5>
        </div>
        <p className="text-lg text-[#263238] font-roboto font-medium">
          At Aroviya, we redefine healthcare by combining cutting-edge
          technology with compassionate care. Our mission is to make wellness
          accessible, personalized, and effective for everyone. <br />
          <br />
          Here's why we're trusted by countless individuals in their health
          journey:
        </p>
        <ul className="flex flex-col gap-2">
          {whyChoose.map((f, i) => {
            return (
              <li
                key={i}
                className="flex flex-row gap-2 items-center font-roboto font-medium"
              >
                <span className="text-xl text-[#fe7f18]">
                  <IoMdCheckmarkCircleOutline />
                </span>
                <h5 className="text-[#435a65] text-lg">{f}</h5>
              </li>
            );
          })}
        </ul>
      </div>
      <figure className="w-full h-auto select-none pointer-events-none">
        <img
          src="/Img_Graphics_2.jpg"
          alt="hero_img"
          width={600}
          loading="lazy"
        />
      </figure>
    </section>
  );
};

export default WhyUsData;
