import React from "react";
import { processList } from "../data/pageData";

const Process = () => {
  return (
    <section
      aria-label="Process Section"
      className="mt-[6.5rem] flex flex-col items-center justify-items-center w-full h-auto"
    >
      <h3 className="-ml-6 w-full flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900">
        <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
        Process
      </h3>
      <h2 className="mt-3 text-[2.5rem] font-poppins text-zinc-900">
        How <b className="font-playfair">Arogyam</b> works.
      </h2>
      <p className="text-lg text-zinc-900 font-poppins font-normal">
        Get started in three easy steps.
      </p>
      <ol className="mt-12 px-10 w-full h-auto flex items-start progressSteps">
        {processList.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <hr className="mt-5 w-[30%] border-[1.5px] border-dashed border-zinc-700 progressLine" />
              <li className="text-center flex flex-col gap-2 items-center">
                <h6 className="w-5 h-5 p-5 flex items-center justify-center bg-zinc-700 text-base text-zinc-50 font-semibold font-poppins rounded-full">
                  {data.id}
                </h6>
                <h3 className="text-xl text-zinc-900 font-semibold font-merriweather">
                  {data.name}
                </h3>
                <p className="w-fit text-base text-zinc-900 font-medium font-poppins">
                  {data.description}
                </p>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </section>
  );
};

export default Process;
