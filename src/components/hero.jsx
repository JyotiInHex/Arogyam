import React, { useState } from "react";
import appProfile from "../assets/images/Splash Screen iPhone 2.png";
import { FiPhone } from "react-icons/fi";
import Process from "./process";

const Hero = () => {
  return (
    <main>
      <section
        aria-label="Hero Section"
        className="grid grid-cols-2 justify-items-center mt-16"
      >
        <div aria-label="Title" className="w-[40vw] mt-16">
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
            </b>.
          </h1>
          <p className="mt-6 w-fit text-[1.05rem] text-zinc-800 font-semibold font-opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium error quae repellat officia esse natus sequi iusto ad
            inventore. Commodi.
          </p>
          <form className="mt-16 flex items-center border-2 border-solid border-zinc-900 rounded-full overflow-hidden">
            <label htmlFor="phoneNumInput" className="pl-4 flex items-center gap-2 w-full">
              <FiPhone className="text-lg text-zinc-900 font-semibold"/>
              <input type="number" name="" id="" placeholder="Enter your phone number" className="px-3 py-[0.35rem] w-full outline-none text-lg text-zinc-900 font-semibold font-opensans"/>  
            </label>
            <button type="button" className="w-[13rem] px-3 py-2 bg-zinc-900 text-zinc-50 text-lg font-normal font-poppins rounded-full">
              Get Start
            </button>  
          </form>         
        </div>
        <figure className="w-full h-[75vh] pointer-events-none relative z-20 before:absolute before:bottom-0 before:left-[50%] before:w-[50%] before:h-6 before:-translate-x-[50%] before:-translate-y-[150%] before:rounded-[50%] before:bg-zinc-900 before:blur-lg before:opacity-35">
          <img
            src={appProfile}
            alt="app screen"
            className="w-full h-[90%] object-contain relative z-10"
          />
        </figure>
      </section>
      <Process />
    </main>
  );
};

export default Hero;
