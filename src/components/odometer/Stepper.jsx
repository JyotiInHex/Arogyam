import React from "react";

const Stepper = ({ numVal }) => {
  const num = Array.from(new Array(10));
  return (
    <div
      data-num={numVal.padStart(2, "0")}
      className="flex flex-col items-center h-[65px] relative bottom-0 transition-bottom duration-300 ease-linear  "
      id="stepper"
    >
      {num.map((_, i) => {
        return (
          <span key={i} className="h-[65px] leading-[65px] font-semibold">
            {i}
          </span>
        );
      })}
    </div>
  );
};

export default Stepper;
