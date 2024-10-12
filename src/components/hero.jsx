import React, { useContext, useState } from "react";
import appProfile from "../assets/images/appLanding screen.png";
import { FiPhone } from "react-icons/fi";
import { FormContext } from "../context/formContext";
import Process from "./process";
import Benefits from "./benefits";
import Different from "./different";
import Features from "./features";

const Hero = () => {
  const {formData, setFormData, handleFormData} = useContext(FormContext)  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <main>
      <section
        aria-label="Hero Section"
        className="grid grid-cols-2 justify-items-center mt-24"
      >
        <div className="w-[41vw] mt-10">
          <h1 className="w-fit text-6xl text-zinc-900 font-medium font-poppins leading-tight">
            Quality Healthcare at Your Fingertips with{" "}
            <b className="relative z-10 font-playfair">
              Arogyam
              <svg
                height={20}
                className="absolute -bottom-3 left-0 -z-[1] w-fit"
              >
                <path
                  d="M 0 12 Q 50 0, 250 2"
                  stroke="#4bb092"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
            </b>
            .
          </h1>
          <p className="mt-7 w-fit text-[1.05rem] text-zinc-600 text-justify font-semibold font-opensans">
            Easily find doctors, book appointment, and access emergency services
            in Barpeta. Arogyam makes healthcare simple and accessible for
            everyone.
          </p>
          <div className="mt-9 flex items-center gap-3">
            <form method="POST" className="flex items-center border-2 border-solid border-zinc-900 rounded-full overflow-hidden" onSubmit={handleFormData}>
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
            <span className="text-base text-zinc-900 font-semibold font-poppins">
              Or
            </span>
            <button
              type="button"
              className="w-[13rem] px-0 py-3 text-lg font-medium font-poppins border-2 border-solid border-zinc-900 rounded-full"
            >
              Install Now
            </button>
          </div>
        </div>
        <figure className="w-full h-auto pointer-events-none">
          <img
            src={appProfile}
            alt="app screen"
            className="w-[125%] h-[70vh] object-contain"
          />
        </figure>
      </section>
      <Process />
      <Benefits/>
      <Different/>
      <Features/>
    </main>
  );
};

export default Hero;
