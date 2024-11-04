import React, { useContext, useEffect, useRef, useState } from "react";
import appProfile from "../assets/images/Multiscreens iPhones.png";
import { FiPhone } from "react-icons/fi";
import { FormContext } from "../context/FormContext";
import Process from "../components/Process";
import Benefits from "../components/Benefits";
import Different from "../components/Different";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import GetStarted from "../components/GetStarted";

const Home = ({ timeline }) => {
  const gsapTimeline = timeline;
  const { formData, setFormData, handleFormData } = useContext(FormContext);
  const mainTitleRef = useRef(null);
  const subTitleRef = useRef(null);
  const strokeRef = useRef(null);
  const appProfileRef = useRef(null);
  const numberFormRef = useRef(null);
  const orRef = useRef(null);
  const installBtnRef = useRef(null);
  

  useEffect(() => {
    timeline
      .to(
        mainTitleRef.current,
        {
          x: 0,
          duration: 1,
          opacity: 1,
        },
        "a"
      )
      .to(
        strokeRef.current,
        {
          width: 250,
          duration: 0.5,
        },
        "b"
      )
      .to(
        subTitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "b"
      )
      .to(
        appProfileRef.current,
        {
          x: 0,
          duration: 1,
          opacity: 1,
        },
        "a"
      )
      .to(
        numberFormRef.current,
        {
          y: 0,
          opacity: 1,
          delay: 0.3,
          duration: 1,
        },
        "b"
      )
      .to(
        orRef.current,
        {
          y: 0,
          opacity: 1,
          delay: 0.35,
          duration: 1,
        },
        "b"
      )
      .to(
        installBtnRef.current,
        {
          y: 0,
          opacity: 1,
          delay: 0.42,
          duration: 1,
        },
        "b"
      );
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="w-full h-auto p-7 px-20">
      <section
        aria-label="Hero Section"
        className="grid grid-cols-2 justify-items-center mt-14"
      >
        <div className="w-[41vw] mt-10">
          <h1
            ref={mainTitleRef}
            className="w-fit text-6xl text-zinc-900 font-medium font-poppins leading-tight -translate-x-[150%]"
          >
            Quality Healthcare at Your Fingertips with{" "}
            <b className="relative z-10 font-playfair">
              Arogyam
              <svg
                ref={strokeRef}
                width={0}
                height={20}
                className="absolute -bottom-3 left-0 -z-[1] w-fit"
              >
                <path
                  d="M 0 12 Q 50 0, 250 2"
                  stroke="#4bb092"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
            </b>
            .
          </h1>
          <p
            ref={subTitleRef}
            className="mt-7 w-fit text-[1.05rem] text-zinc-600 text-justify font-semibold font-opensans opacity-0 -translate-y-10"
          >
            Easily find doctors, book appointment, and access emergency services
            in Barpeta. Arogyam makes healthcare simple and accessible for
            everyone.
          </p>
          <div className="mt-9 flex items-center gap-3">
            <form
              ref={numberFormRef}
              method="POST"
              className="flex items-center border-2 border-solid border-zinc-900 rounded-full overflow-hidden opacity-0 -translate-y-[5rem]"
              onSubmit={handleFormData}
            >
              <label
                htmlFor="phoneNumInput"
                className="pl-4 flex items-center gap-2 w-full"
              >
                <FiPhone className="text-lg text-zinc-900 font-semibold" />
                <input
                  className="px-1 py-3 w-full outline-none text-base text-zinc-900 font-semibold font-opensans"
                  id="phoneNumInput"
                  type="number"
                  name="userPhone"
                  value={formData.userPhone < 0 || formData.userPhone}
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  required
                />
              </label>
              <button
                type="button"
                className="w-[13rem] px-0 py-3 bg-zinc-900 text-zinc-50 text-lg font-normal font-poppins rounded-full"
              >
                Get Start
              </button>
            </form>
            <span
              ref={orRef}
              className="text-base text-zinc-900 font-semibold font-poppins opacity-0 -translate-y-[5rem]"
            >
              Or
            </span>
            <button
              ref={installBtnRef}
              type="button"
              className="w-[13rem] px-0 py-3 text-lg font-medium font-poppins border-2 border-solid border-zinc-900 rounded-full opacity-0 -translate-y-[5rem]"
            >
              Install Now
            </button>
          </div>
        </div>
        <figure
          ref={appProfileRef}
          className="w-full h-auto pointer-events-none translate-x-[150%]"
        >
          <img
            src={appProfile}
            alt="app screen"
            className="w-[125%] h-[70vh] object-contain"
          />
        </figure>
      </section>
      <Process timeline={gsapTimeline}/>
      <Benefits />
      <Different />
      <Features />
      <Testimonial />
      <GetStarted />
    </main>
  );
};

export default Home;
