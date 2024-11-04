import React, { useEffect, useRef } from "react";
import logo from "/icon/logo-svg.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({timeline}) => {
  const logoRef = useRef(null);
  const navLinks = ["home", "about", "features", "contact"];
  const navLinksRef = useRef([]);
  const joinLinks = ["signUp", "signIn"];
  const joinLinksRef = useRef([]);

  useEffect(() => {
    timeline.to(
      logoRef.current,
      {
        y: 0,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        stagger: 0.15,
      },
      "<"
    )
      .to(
        navLinksRef.current,
        {
          y: 0,
          duration: 1,
          delay: 0.6,
          opacity: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        joinLinksRef.current,
        {
          y: 0,
          duration: 1,
          delay: 0.9,
          opacity: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
        "<"
      );
  }, []);

  return (
    <header className="p-7 px-20">
      <nav className="flex justify-between items-center">
        <div
          className="flex items-center gap-2 opacity-0 -translate-y-[2rem]"
          aria-label="LOGO"
          ref={logoRef}
        >
          <figure className="w-auto h-auto pointer-events-none">
            <img
              className="w-10 h-auto object-cover"
              src={logo}
              alt="Company Logo"
            />
          </figure>
          <figcaption>
            <h2 className="text-2xl font-bold font-poppins text-[#4bb092]">
              Arogyam
            </h2>
          </figcaption>
        </div>
        <ul
          className="flex items-center justify-between gap-4"
          aria-label="Navigation Links"
        >
          {navLinks.map((links, index) => {
            return (
              <NavLink
                to={`/${links === "home" ? "" : links}`}
                key={index}
                ref={(el) => (navLinksRef.current[index] = el)}
                className={({ isActive }) =>
                  `navLinks ${isActive ? "navActive" : ""}`
                }
              >
                {links}
              </NavLink>
            );
          })}
        </ul>
        <ul
          className="flex items-center justify-between gap-3 joinLinks"
          aria-label="Join Links"
        >
          {joinLinks.map((links, index) => {
            return (
              <NavLink
                key={index}
                ref={(el) => (joinLinksRef.current[index] = el)}
                className="border-2 border-solid border-zinc-900 px-7 py-2 rounded-full text-zinc-900 font-opensans font-semibold capitalize opacity-0 -translate-y-[2rem] buttonEffect"
              >
                {links}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
