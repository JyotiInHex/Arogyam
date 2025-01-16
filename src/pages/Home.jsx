import React from "react";
import VisualData from "../components/contents/VisualData";
import StepsData from "../components/contents/StepsData";
import WhyUsData from "../components/contents/WhyUsData";
import StandOutData from "../components/contents/StandOutData";
import Testimonial from "../components/contents/Testimonial";

const Home = () => {
  return (
    <React.Fragment>
      <section className="px-4 md:px-14">
        <section className="mt-20 md:mt-0 w-full h-auto  bg-[#fe7f182a] rounded-3xl ">
          <div className="p-5 pt-10 md:px-16 grid md:grid-cols-2 items-center justify-items-center">
            <div className="px-5 flex flex-col gap-5 md:gap-16">
              <div className="w-fit">
                <h2 className="text-4xl md:text-6xl font-montserrat font-semibold text-[#435a65]  ">
                  Your Gateway to Holistic Wellness.
                </h2>
                <h4 className="text-lg md:text-2xl font-poppins font-medium text-[#263238] mt-7">
                  Explore personalized healthcare solutions design to empower
                  your health journey.
                </h4>

                <div className="mt-11 md:mt-10 flex flex-col md:flex-row items-center justify-start gap-7">
                  <button
                    type="button"
                    className="border-2 border-solid border-[#fe7f18] px-6 py-3 rounded-full text-base text-[#fe7f18] font-poppins font-semibold tracking-wide uppercase  "
                  >
                    Learn more
                  </button>
                  <div className="relative">
                    <button
                      type="button"
                      className="border-2 border-solid border-[#fe7f18] bg-[#fe7f18]  px-6 py-3 rounded-full text-base text-blue-50 font-poppins font-semibold tracking-wide uppercase  "
                    >
                      Get Started
                    </button>
                    <figure className="select-none pointer-events-none w-fit h-auto">
                      <img
                        src="/its-free.svg"
                        alt="its_free"
                        className="absolute top-2 translate-x-[6rem] -rotate-[40deg]"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <ul className="mt-5 md:m-0 flex md:flex-row flex-wrap justify-start items-center gap-4">
                {["Accessible", "Affordable", "Anytime"].map((t, i) => {
                  return (
                    <li
                      key={i}
                      className="font-lato font-semibold uppercase text-[#435a65] text-base"
                    >
                      #{t}.
                    </li>
                  );
                })}
              </ul>
            </div>
            <figure className="w-full h-auto select-none pointer-events-none">
              <img
                src="/Img_Graphics.png"
                alt="hero_img"
                className="w-fit mix-blend-darken"
              />
            </figure>
          </div>
        </section>
        <VisualData />
        <StepsData />
      </section>
      <WhyUsData />
      <StandOutData/>
      <Testimonial/>
    </React.Fragment>
  );
};

export default Home;
