import React from "react";
import appHome from "../assets/images/mockrocket-capture.png";
import { benefitsList } from "../data/pageData";

const Benefits = () => {
  return (
    <section
      aria-label="Benefits Section"
      className="mt-[11.5rem] flex flex-col items-center justify-items-center w-full h-auto"
    >
      <div className="px-10 flex w-full h-auto">
        <div className="px-20 w-1/2 h-auto flex flex-col items-start ">
          <h3 className="w-fit flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900">
            <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
            Benefits
          </h3>
          <h2 className="mt-3 text-[2.5rem] font-merriweather text-zinc-900">
            <b className="font-playfair">Arogyam, </b> all your health needs in one app.
          </h2>
          <ol className="mt-5 w-full h-auto flex flex-col items-start gap-5">
            {benefitsList.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="w-fit grid grid-cols-[5%_1fr] justify-items-center gap-3">
                    <span className="applyListStyle"></span>
                    <p className="text-zinc-800 text-base font-poppins font-normal">
                      {data.benefit}
                    </p>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </div>
        <figure className="w-1/2 h-[60vh]">
          <img src={appHome} alt="" className="w-full h-full object-contain" />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
