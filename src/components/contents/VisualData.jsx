import React from "react";
import Odometer from "../odometer/odometer";

const VisualData = () => {
  const visualData = [
    {
      name: "Satisfaction Rate",
      value: 95,
      suffix: "%",
    },
    {
      name: "True Verified Doctors",
      value: 8,
      suffix: "K+",
    },
    {
      name: "Query Supports",
      value: 24,
      suffix: "hr",
    },
  ];
  return (
    <section className="relative overflow-hidden py-9 my-24 w-full h-auto min-h-[50vh] bg-[#fe7f18] rounded-3xl flex items-center justify-center">
      <figure className="absolute -z-0 mix-blend-screen opacity-55 w-full h-auto select-none pointer-events-none">
        <img src="/32293468_mk8.png" alt="bg_graphic"  className="w-full"/>
      </figure>
      <ul className="w-full h-auto grid md:grid-cols-3 gap-10 p-5">
        {visualData.map((d, i) => {
          return (
            <li className="w-full flex flex-col items-center justify-center ">
              <h2 className="flex items-center gap-2 font-semibold font-poppins text-5xl text-blue-50">
                <Odometer number={`${d.value}`.padStart(2, "0")} />
                {d.suffix}
              </h2>
              <h3 className="text-center text-2xl text-blue-50 font-roboto font-medium">
                {d.name}
              </h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default VisualData;
