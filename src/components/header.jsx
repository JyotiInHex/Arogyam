import React from "react";
import logo from "../../public/icon/logo-svg.svg";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2" aria-label="LOGO">
        <figure className="w-auto h-auto pointer-events-none">
          <img
            className="w-10 h-auto object-cover"
            src={logo}
            alt="Company Logo"
          />
        </figure>
        <figcaption>
          <h2 className="text-2xl font-bold font-poppins text-[#4bb092]">Arogyam</h2>
        </figcaption>
      </div>
      <ul className="flex items-center justify-between gap-4" aria-label="Navigation Links">
        <li className="navLinks navActive">Home</li>
        <li className="navLinks">About us</li>
        <li className="navLinks">Features</li>
        <li className="navLinks">Contact</li>
      </ul>
      <ul className="flex items-center justify-between gap-3" aria-label="Join Links">
        <li className="cursor-pointer border-2 border-solid border-zinc-900 px-7 py-2 rounded-full text-zinc-900 font-opensans font-semibold">Sing in</li>
        <li className="cursor-pointer border-2 border-solid border-zinc-900 px-7 py-2 rounded-full text-zinc-100 bg-zinc-900 font-opensans font-semibold">Sing up</li>
      </ul>
    </nav>
  );
};

export default Header;
