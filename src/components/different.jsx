import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { differentList } from "../data/UIData";
import AppRecord from "./AppRecord";

const Different = () => {
  const sectionTitleRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionTitleRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    ); // section title

    gsap.fromTo(
      titleRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "bottom 80%",
          end: "bottom 50%",
          scrub: true,
        },
      },
      "a"
    ); // title

    gsap.fromTo(
      subTitleRef.current,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "bottom 80%",
          end: "bottom 50%",
          scrub: true,
        },
      },
      "a"
    ); // subtitle

    gsap.fromTo(
      "#diffPoints-0",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#diffPoints-0",
          start: "0% 80%",
          end: "0% 50%",
          scrub: true,
        },
      }
    ); // different point 1

    gsap.fromTo(
      "#diffPoints-1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#diffPoints-1",
          start: "50% 80%",
          end: "50% 50%",
          scrub: true,
        },
      }
    ); // different point 2

    gsap.fromTo(
      "#diffPoints-2",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#diffPoints-2",
          start: "100% 80%",
          end: "100% 50%",
          scrub: true,
        },
      }
    ); // different point 3
  });

  return (
    <section
      aria-label="Different Section"
      className="mt-[7.5rem] flex flex-col items-center justify-items-center w-full h-auto "
    >
      <div className="px-10 flex flex-col w-full h-auto">
        <div className="flex justify-between items-center">
          <div className="px-20 w-1/2 h-auto flex flex-col items-start ">
            <h3
              ref={sectionTitleRef}
              className="w-fit flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900"
            >
              <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
              Difference
            </h3>
            <h2
              ref={titleRef}
              className="mt-3 text-[2.5rem] font-merriweather text-zinc-900"
            >
              What makes <b className="font-playfair">Arogyam</b> Unique.
            </h2>
            <p
              ref={subTitleRef}
              className="text-lg text-zinc-900 font-poppins font-normal"
            >
              A healthcare solution design for you, no app installation
              required!
            </p>
          </div>
          <AppRecord subTitleRef={subTitleRef.current} />
        </div>
        <ol className="mt-10 px-[3rem] w-full h-auto flex items-start whyDifferent">
          {differentList.slice(0, 3).map((data, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  className="px-5 w-fit grid grid-cols-[10%_1fr] justify-items-center gap-2 border-2 border-solid border-zinc-400 border-t-0 border-l-0 border-b-0"
                  id={`diffPoints-${index}`}
                >
                  <span className="applyListStyle"></span>
                  <p className="text-zinc-800 text-base font-poppins font-normal">
                    {data.different}
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

export default Different;
