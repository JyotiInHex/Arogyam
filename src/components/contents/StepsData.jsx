import React from "react";
import userPlus from "/user_plus.svg";
import medicalTeam from "/medical_team.svg";
import checkMarkCalendar from "/check_mark_calendar.svg";

const StepsData = () => {
  const stepsData = [
    {
      icon: userPlus,
      name: "Register Yourself",
      description:
        "Sign up with basic details to create your personalized Aroviya Profile.",
    },
    {
      icon: medicalTeam,
      name: "Find Doctors",
      description:
        "Search for trusted doctors based on specializations, location or reviews.",
    },
    {
      icon: checkMarkCalendar,
      name: "Book Appointment",
      description:
        "Choose your preferred doctor and schedule an appointment with easy.",
      button: "Book Now",
    },
  ];

  return (
    <section className="my-24 w-full h-auto rounded-3xl flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl text-[#263238] text-center font-montserrat font-semibold ">
          3 Easy Steps to a Healthier You
        </h2>
        <h5 className="text-2xl text-[#435a65] text-center font-playfair font-medium ">
          Discover Solutions with Easy and Confidence.
        </h5>
      </div>
      <div className="mt-16 pr-16 md:px-16 md:pt-20 pb-0 w-full h-auto bg-white border-[5px] border-solid border-[#fe7f180f] rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-16 steps_Container">
        {stepsData.map((s, i) => {
          return (
            <div
              key={i}
              className="p-10 md:pt-20 w-full h-full flex flex-col items-start justify-start gap-10 md:rounded-tl-3xl rounded-tr-3xl rounded-br-3xl md:rounded-br-none step_Cards"
            >
              <figure>
                <img src={s.icon} alt="icon_name" width={100} />
              </figure>
              <h2 className="text-2xl text-[#263238] font-poppins font-semibold">
                {s.name}
              </h2>
              <p className="text-lg text-[#435a65] font-roboto font-medium  ">
                {s.description}
              </p>
              {s.button && (
                <button
                  type="button"
                  className="bg-[#fe7f18] px-5 py-2 text-base font-poppins text-blue-50 font-medium rounded-md"
                >
                  {s.button}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StepsData;
