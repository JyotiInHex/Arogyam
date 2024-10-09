import React from "react";

const Process = () => {
  return (
    <section
      aria-label="Process Section"
      className="mt-16 flex flex-col items-center justify-items-center w-full h-auto"
    >
      <h3
        aria-label="section title"
        className="-ml-10 w-full flex items-center justify-center text-lg font-opensans font-semibold text-zinc-900"
      >
        <hr className="w-4 h-[0.20rem] bg-zinc-900 mr-2" />
        Process
      </h3>

      <h2
        className="text-[2rem] font-poppins text-zinc-900"
        aria-label="Heading Title"
      >
        How <b className="font-playfair">Arogyam</b> works
      </h2>
    </section>
  );
};

export default Process;
