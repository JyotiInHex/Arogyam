import React from "react";
import getStartedBg from "../assets/images/32293468_mk8.png";
import appScreen from "../assets/images/appLanding screen.png";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const GetStarted = () => {
  return (
    <section className="relative mt-[7.5rem] mb-[7.5rem] p-5 w-full h-full min-h-[50vh] max-h-max bg-[#4bb092] rounded-xl">
      <figure
        className="absolute bottom-0 -z-[0] rotate-180 left-0 w-full h-full mix-blend-multiply 
        opacity-15"
      >
        <img
          src={getStartedBg}
          alt="overLay"
          className="w-[110%] h-full object-cover"
        />
      </figure>
      <div className="relative z-[1] w-full h-max text-zinc-50">
        <div className="grid grid-cols-[auto_45%] items-center gap-2 ">
          <figcaption className="mt-5 pl-20 flex flex-col gap-5">
            <h2 className="w-fit text-4xl text-zinc-100 font-merriweather font-semibold">
              Get Started with Arogyam Today!
            </h2>
            <p className="w-fit max-w-xl text-xl text-zinc-100 font-poppins font-normal">
              Experience seamless doctor searches, easy appointment bookings,
              and access to pharmacies right at your fingertips.
            </p>
            <div className="flex gap-5">
              <button
                type="button"
                className="mt-8 self-end flex items-center justify-center gap-3 w-[13rem] px-0 py-3 text-xl font-medium font-poppins border-2 border-solid border-zinc-1g00 rounded-full hover:!text-[#4bb092] after:!bg-zinc-100"
              >
                Get Started {<FiArrowRight className="font-bold" />}
              </button>
              <button
                type="button"
                className="mt-8 self-end flex items-center justify-center gap-3 w-[13rem] px-0 py-3 text-xl font-medium font-poppins border-2 border-solid border-zinc-100 rounded-full hover:!text-[#4bb092] after:!bg-zinc-100"
              >
                Install Now {<FiDownload className="font-bold" />}
              </button>
            </div>
          </figcaption>
          <figure className="w-fit h-fit">
            <img
              src={appScreen}
              alt="appScreen"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
