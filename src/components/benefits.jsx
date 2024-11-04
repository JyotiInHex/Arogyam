import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import appHome from "../assets/images/mockrocket-capture.png";
import { benefitsList } from "../data/UIData";

const Benefits = () => {
  const sectionTitleRef = useRef(null);
  const titleRef = useRef(null);
  const appScreenRef = useRef(null);

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
          start: "200% 80%",
          end: "200% 50%",
          scrub: true,
        },
      }
    ); // title

    gsap.fromTo(
      "#keyPoints-0",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "70% 80%",
          end: "70% 50%",
          scrub: true,
        },
      }
    ); // point 1

    gsap.fromTo(
      "#keyPoints-1",
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
          trigger: "#keyPoints-0",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    ); // point 2

    gsap.fromTo(
      "#keyPoints-2",
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
          trigger: "#keyPoints-1",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    ); // point 3

    gsap.fromTo(
      "#keyPoints-3",
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
          trigger: "#keyPoints-2",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    ); // point 4

    gsap.fromTo(
      appScreenRef.current,
      {
        y: -150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#keyPoints-0",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  });

  return (
    <section
      aria-label="Benefits Section"
      className="mt-[11.5rem] flex flex-col items-center justify-items-center w-full h-auto"
    >
      <div className="px-10 flex w-full h-auto">
        <div className="px-20 w-1/2 h-auto flex flex-col items-start ">
          <h3
            ref={sectionTitleRef}
            className="w-fit flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900"
          >
            <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
            Benefits
          </h3>
          <h2
            ref={titleRef}
            className="mt-3 text-[2.5rem] font-merriweather text-zinc-900"
          >
            <b className="font-playfair">Arogyam, </b> all your health needs in
            one app.
          </h2>
          <ol className="mt-5 w-full h-auto flex flex-col items-start gap-5">
            {benefitsList.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className="w-fit grid grid-cols-[5%_1fr] justify-items-center gap-3"
                    id={`keyPoints-${index}`}
                  >
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
        <figure ref={appScreenRef} className="w-1/2 h-[60vh]">
          <img src={appHome} alt="" className="w-full h-full object-contain" />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
