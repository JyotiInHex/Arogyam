import React from "react";
import { FiUser } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { testimonials } from "../data/UIData";

const Testimonial = () => {
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
          <BsStarFill key={i} />
        ))}
        {halfStar && <BsStarHalf key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <BsStar key={i + fullStars + 1} />
        ))}
      </>
    );
  };

  return (
    <section aria-label="Testimonial Section" className="w-full h-auto px-[4rem]">
      <div className=" grid grid-cols-[25%_1fr] gap-5">
        <div>
          <h3 className="w-fit flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900">
            <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
            Testimonials
          </h3>
          <h2 className="mt-3 text-[2.5rem] font-merriweather text-zinc-900">
            <b className="font-playfair">Arogyam, </b> Your Partner in Health.
          </h2>
          <p className="text-lg text-zinc-900 font-poppins font-normal">
            Real Experiences, Transformative Care - Hear How Arogyam Supports
            Health and Well-being in Our Community.
          </p>
          <div className="mt-20 ml-28 relative">
            <span className="absolute left-0 top-1/2 -translate-x-2/4 -translate-y-2/4 w-24 h-24 bg-gradient-to-b from-[#4bb092] to-transparent rounded-full"></span>
            <h6 className="text-2xl text-zinc-50 font-poppins font-medium mix-blend-difference">
              View All
            </h6>
          </div>
        </div>
        <div className="listColumn mt-20">
          {[...testimonials].splice(0, 7).map((data, index) => {
            const language = detectLanguage(data.testimonial);
            return (
              <React.Fragment key={index}>
                <div className="relative mt-5 p-5 w-fit h-fit max-w-[300px] bg-zinc-50 rounded-md border-2 border-solid border-zinc-200 flex flex-col gap-2">
                  <div className="relative z-10">
                    <div className="flex gap-2 items-center">
                      <FiUser className="w-10 h-10 p-2 bg-[#4bb09236] text-lg text-zinc-900 rounded-full mix-blend-hard-light" />
                      <h2 className="text-lg text-zinc-800 font-poppins font-semibold">
                        {data.name}
                      </h2>
                    </div>
                    <p
                      className={`mt-4 text-base text-zinc-800 font-normal ${
                        language === "english"
                          ? "font-poppins"
                          : "font-native text-lg"
                      }`}
                    >
                      {data.testimonial}
                    </p>
                    <div className="flex items-center justify-between mt-5">
                      <h3 className="flex items-center gap-2 text-sm text-[#4bb092] font-poppins font-semibold">
                        {ratingStars(data.rating)}
                      </h3>
                      <h2 className="text-sm text-zinc-800 font-poppins font-medium">
                        {data.location}
                      </h2>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
