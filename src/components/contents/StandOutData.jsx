import React from "react";
import Benefits from "/bg_graphic_1.svg";
import Features from "/bg_graphic_2.svg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const StandOutData = () => {
  const standOutData = [
    {
      title: "Benefits of Choosing Aroviya.",
      features: [
        "Instant Doctor Access.",
        "Detailed Profile & verified Doctors.",
        "Easy Appointment Booking and reminder.",
        "24/7 Accessibility.",
        "Top-Level Data Security.",
      ],
      graphicImg: Benefits,
    },

    {
      title: "Discover Aroviya's Key Features.",
      features: [
        "Doctor Finder",
        "Appointment Booking.",
        "Pharmacy & Clinic Locator.",
        "Emergency Services Access.",
      ],
      graphicImg: Features,
    },
  ];
  return (
    <section className="my-24 px-10 md:px-20 py-14 md:py-20 w-full h-auto flex flex-col md:items-center bg-white">
      <h3 className="text-2xl text-[#fe7f18] font-playfair font-semibold  ">
        Why Aroviya Stands Out?
      </h3>
      <h2 className="text-4xl text-[#435a65] font-poppins font-semibold md:max-w-[60%] md:text-center">
        Your journey to better health starts with Aroviya.
      </h2>
      <h5 className="text-xl text-[#263238] font-montserrat font-medium">
        Key Benefits and Features
      </h5>
      <div className="mt-16 md:mt-24 w-full h-auto flex flex-col md:flex-row justify-evenly items-start gap-5">
        {standOutData.map((d, i) => {
          return (
            <div
              key={i}
              className="relative z-0 overflow-hidden p-10 w-full md:max-w-[35%] h-auto min-h-[50vh] md:min-h-[90vh] flex flex-col items-start gap-5 bg-[#26323809] rounded-2xl"
            >
              <h2 className="text-4xl text-[#263238] font-poppins font-semibold">
                {d.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {d.features.map((f, i) => {
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
              <figure className="absolute right-0 bottom-0 -z-[1] opacity-40 md:opacity-60 select-none pointer-events-none blur-[1px] md:blur-none">
                <img src={d.graphicImg} alt="bg_graphic" loading="lazy" />
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StandOutData;
