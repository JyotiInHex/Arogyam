import React from "react";
import { featuresList } from "../data/UIData";

const Features = () => {
  return (
    <section
      aria-label="Features Section"
      className="mt-[7.5rem] flex flex-col items-center justify-items-center w-full h-auto "
    >
      <div className="px-10 flex flex-col w-full h-auto  pb-20">
        <div className="px-20 w-1/2 h-auto flex flex-col items-start ">
          <h3 className="w-fit flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900">
            <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
            Features
          </h3>
          <h2 className="mt-3 text-[2.5rem] font-merriweather text-zinc-900">
            What do you get.
          </h2>
          <p className="text-lg text-zinc-900 font-poppins font-normal">
            Powerful Features at Your Fingertips
          </p>
        </div>
        <ol className="mt-5 px-[3rem] w-full h-auto flex flex-col gap-2">
          {featuresList.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <li className="px-5 m-2 w-full grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2">
                  <h3 className="w-4 h-4 p-4 flex items-center justify-center rounded-full bg-zinc-700 text-base text-zinc-50 font-poppins font-semibold">
                    {data.slNo}
                  </h3>
                  <h2 className="text-xl text-zinc-900 font-merriweather font-semibold">
                    {data.name}
                  </h2>
                  <p className="col-span-2 px-11 text-base text-zinc-800 font-poppins font-normal">
                    {data.description}
                  </p>
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Features;
