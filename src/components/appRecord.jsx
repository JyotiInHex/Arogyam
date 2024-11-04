import React, { useEffect } from "react";
import gsap from "gsap";
import { appRecordList } from "../data/UIData";

const AppRecord = ({}) => {
  
  useEffect(() => {
    gsap.fromTo(
      "#recordPoint-0",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#recordPoint-0",
          start: "0% 80%",
          end: "0% 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#recordPoint-1",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#recordPoint-1",
          start: "50% 80%",
          end: "50% 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#recordPoint-2",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#recordPoint-2",
          start: "100% 80%",
          end: "100% 50%",
          scrub: true,
        },
      }
    );
  });

  return (
    <ol className="w-fit flex flex-row items-center gap-12">
      {appRecordList.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <li className="w-fit" id={`recordPoint-${index}`}>
              <h3 className="text-4xl pt-3 text-zinc-900 font-semibold font-poppins">
                {data.record}
              </h3>
              <h5 className="text-lg text-zinc-400 font-medium font-opensans">
                {data.name}
              </h5>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  );
};

export default AppRecord;
