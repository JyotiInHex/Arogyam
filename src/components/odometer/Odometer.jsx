import React from "react";
import { useEffect } from "react";
import Stepper from "./stepper";

const Odometer = ({ number }) => {
  useEffect(() => {
    setInterval(() => {
      requestAnimationFrame(animate);

      function animate() {
        const elem = document.querySelectorAll("#stepper");
        [...elem].forEach(function (e) {
          requestAnimationFrame(() => {
            const dataToStop = e.dataset.num;
            e.style.bottom = `${65 * parseInt(dataToStop)}px`;
            e.style.transitionDelay = `${100 * (10 - parseInt(dataToStop))}ms`;
          });
        });
      }
    }, 1000);
  }, []);

  const numVal = `${number}`.split("");
  return (
    <div className="flex h-[65px] overflow-hidden  ">
      {numVal.map((v, i) => {
        return <Stepper key={i} numVal={v} />;
      })}
    </div>
  );
};

export default Odometer;
