import React from "react";

const GetStarted = () => {
  return (
    <section className="relative z-0 my-28 px-10 md:px-20 py-14 md:py-10 w-full h-auto bg-[#fe7f18] overflow-hidden">
      <figure className="absolute left-0 right-0 -bottom-[80%] -z-[1] w-full h-auto select-none pointer-events-none mix-blend-multiply opacity-40">
        <img src="/32293468_mk8.png" alt="bg_graphic" />
      </figure>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-5xl text-white font-poppins font-semibold">Get Started with Aroviya</h2>
          <h4 className="text-xl text-white font-poppins font-medium">Your Health Journey Begins Here</h4>
          <h6 className="text-lg text-white font-roboto font-medium">Experience seamless doctor searches, easy appointment booking, and access to pharmacies right at your fingertips.</h6>
          <button type="button" className="px-10 py-3 bg-[#263238] text-base font-poppins font-medium text-blue-50 rounded-md">Install Now</button>
        </div>
        <figure className="w-fit h-auto select-none pointer-events-none">
            <img src="/Onboarding-Screen.png" alt="graphic" width={350}/>
        </figure>
      </div>
    </section>
  );
};

export default GetStarted;
