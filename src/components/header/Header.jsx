import React from "react";
import { NavLink } from "react-router-dom";
import logo_img from "/logo-svg.svg";

const Header = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];
  const actionLinks = [
    {name: "Sign up", action: 'sign-up-form'},
    {name: "Sign in", action: 'sign-in-form'},
  ]
  return (
    <>
      <header className="flex justify-between items-center">
        <nav>
          <ul className="flex gap-7">
            {navLinks.map((links, i) => {
              return (
                <li
                  key={i}
                  className="text-base text-zinc-500 font-normal font-poppins"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "font-semibold" : ""}`
                    }
                    to={links.path}
                  >
                    {links.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <figure>
            <img src={logo_img} alt="logo_img" width={35} />
          </figure>
          <figcaption>
            <h1 className="text-xl text-[#435a65] font-poppins font-semibold">
              Aroviya
            </h1>
          </figcaption>
        </div>
        <ul className="flex gap-7 action-btns">
          {actionLinks.map((links, i) => {
            return (
              <li key={i} className="btn-hover-animation px-5 py-[0.4rem] rounded-md ">
                <button
                  className="capitalize text-base text-[#435a65] font-normal font-poppins"
                  type="button"
                >
                  {links.name}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;
