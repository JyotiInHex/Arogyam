import React, { useState, useEffect } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { testimonials } from "../../data/UIData";
import { FaPause, FaPlay } from "react-icons/fa";
import Odometer from "../odometer/Odometer";

const Testimonial = () => {
  const [currTestimonial, setCurrentTestimonial] = useState(0);
  const [animationDirection, setDirection] = useState("slide-in-left");
  const [autoPlayPause, setPlayPause] = useState(true);

  const detectLanguage = (text) => {
    const assameseRegex = /[\u0980-\u09FF]/;
    return assameseRegex.test(text) ? "assamese" : "english";
  };

  const ratingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <IoIosStar key={i} />
        ))}
        {halfStar && <IoIosStarHalf key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <IoIosStarOutline key={i + fullStars + 1} />
        ))}
      </>
    );
  };

  const prev = () => {
    setDirection("slide-in-left");
    setCurrentTestimonial((currTestimonial) =>
      currTestimonial === 0 ? testimonials.length - 1 : currTestimonial - 1
    );
  };

  const next = () => {
    setDirection("slide-in-right");
    setCurrentTestimonial((currTestimonial) =>
      currTestimonial === testimonials.length - 1 ? 0 : currTestimonial + 1
    );
  };

  const autoPlay = () => {
    setPlayPause((prev) => !prev);
  };

  useEffect(() => {
    let interval;
    if (autoPlayPause) {
      interval = setInterval(() => {
        next();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlayPause, currTestimonial]);

  return (
    <section className="relative z-0 my-28 px-10 md:px-20 py-14 md:py-20 w-full h-auto overflow-hidden">
      <h2 className="absolute -z-[1] top-12 -left-5 text-7xl md:text-8xl text-[#435a651c] font-playfair font-semibold">
        Testimonials
      </h2>
      <div className="translate-y-12 md:translate-y-9 w-full h-auto grid md:grid-cols-2 items-start gap-4">
        <h3 className="w-full md:w-2/3 text-3xl text-[#263238] font-semibold font-montserrat">
          In Their Words: Stories of Wellness
        </h3>
        <p className="justify-self-end w-full md:w-2/3 text-base text-right text-[#263238] font-semibold font-montserrat">
          Hear firsthand how Aroviya transforms lives with expert care and
          personalized wellness solutions. Our testimonials reflect the trust
          and positive impact we bring to our user's health journeys.
        </p>
      </div>
      <div className="translate-y-20 px-5 md:px-16 py-9 md:py-0 md:pt-10 bg-[#fe7f1821] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <figure className="select-none pointer-events-none">
          <img
            src="./testimonial_character.svg"
            alt="testimonial_character"
            width={450}
          />
        </figure>
        <div className="relative z-0 flex flex-col items-end justify-center gap-10 w-full h-auto min-h-[45vh] overflow-hidden">
          <h2
            key={currTestimonial}
            className={`animate ${animationDirection} absolute top-0 right-0 text-7xl text-blue-50 font-poppins font-semibold -z-[1] select-none pointer-events-none `}
          >
            <Odometer
              number={`${testimonials[currTestimonial].id}`
                .toString()
                .padStart(2, "0")}
            />
          </h2>
          <div
            key={testimonials[currTestimonial].id}
            className={`animate ${animationDirection} p-5 flex flex-col justify-center gap-10 transition-transform ease-out duration-300 w-auto h-auto min-h-[30vh]`}
          >
            <p
              className={`text-[#435a65] ${
                detectLanguage(testimonials[currTestimonial].testimonial) ===
                "assamese"
                  ? "text-lg font-medium font-notoSerifBengali"
                  : "text-base font-semibold font-poppins"
              }`}
            >
              {testimonials[currTestimonial].testimonial}
            </p>
            <div className="flex flex-col justify-between w-full">
              <h2 className="text-xl text-[#435a65] font-medium font-roboto">
                {testimonials[currTestimonial].name}
              </h2>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                  <span className="text-lg text-[#fe7f18] font-medium font-roboto flex justify-between items-center gap-1">
                    {ratingStars(testimonials[currTestimonial].rating)}
                  </span>
                  <h2 className="ml-2 text-base text-[#26323875] font-medium font-roboto">
                    {testimonials[currTestimonial].location}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-row items-center justify-center md:justify-between gap-2">
            <button
              type="button"
              className="text-2xl text-[#fe7f18] font-semibold w-10 h-10 bg-blue-50 flex items-center justify-center rounded-full "
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <RiArrowLeftSLine />
            </button>
            <button
              type="button"
              className="text-lg text-[#fe7f18] font-semibold w-10 h-10 bg-blue-50 flex items-center justify-center rounded-full "
              onClick={autoPlay}
              aria-label="Previous testimonial"
            >
              {autoPlayPause ? <FaPause /> : <FaPlay />}
            </button>
            <button
              type="button"
              className="text-2xl text-[#fe7f18] font-semibold w-10 h-10 bg-blue-50 flex items-center justify-center rounded-full "
              onClick={next}
              aria-label="Next testimonial"
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
