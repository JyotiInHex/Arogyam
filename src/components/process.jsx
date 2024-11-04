import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { processList } from "../data/UIData";


const Process = () => {
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
          start: "-350% 80%",
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
    ); // sub title

    gsap.fromTo(
      "#step-0",
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
          trigger: "#step-0",
          start: "0% 80%",
          end: "0% 50%",
          scrub: true,
        },
      }
    ); // step 1

    gsap.fromTo(
      "#step-1",
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
          trigger: "#step-1",
          start: "50% 80%",
          end: "50% 50%",
          scrub: true,
        },
      }
    ); // step 2

    gsap.fromTo(
      "#step-2",
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
          trigger: "#step-2",
          start: "100% 80%",
          end: "100% 50%",
          scrub: true,
        },
      }
    ); // step 3

    gsap.fromTo(
      "#stepLine-1",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#stepLine-1",
          start: "100% 80%",
          end: "100% 50%",
          scrub: true,
        },
      }
    ); // step line 1

    gsap.fromTo(
      "#stepLine-2",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1,

        ease: "expo.out",
        scrollTrigger: {
          trigger: "#step-1",
          start: "50% 80%",
          end: "50% 50%",
          scrub: true,
        },
      }
    ); // step line 2
  });

  return (
    <section
      aria-label="Process Section"
      className="mt-[6.5rem] flex flex-col items-center justify-items-center w-full h-auto"
    >
      <h3
        ref={sectionTitleRef}
        className="-ml-6 w-full flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900"
      >
        <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
        Process
      </h3>
      <h2
        ref={titleRef}
        className="mt-3 text-[2.5rem] font-poppins text-zinc-900"
      >
        How <b className="font-playfair">Arogyam</b> works.
      </h2>
      <p
        ref={subTitleRef}
        className="text-lg text-zinc-900 font-poppins font-normal"
      >
        Get started in three easy steps.
      </p>
      <ol className="mt-12 px-10 w-full h-auto flex items-start progressSteps">
        {processList.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <hr
                className="mt-5 w-[30%] border-[1.5px] border-dashed border-zinc-700 progressLine"
                id={`stepLine-${index}`}
              />
              <li
                className="text-center flex flex-col gap-2 items-center"
                id={`step-${index}`}
              >
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
