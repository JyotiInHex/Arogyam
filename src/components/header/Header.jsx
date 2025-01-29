import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo_img from "/logo-svg.svg";

const Header = ({onActionBtnClick}) => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];
  const actionLinks = [
    { name: "Sign up", action: "showSignupFrom" },
    { name: "Sign in", action: "showLoginFrom" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header fixed md:static left-0 top-0 mb-10 p-7 md:px-14 md:py-0 bg-blue-50 flex flex-col md:flex-row md:justify-between w-full h-auto z-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-1">
            <figure>
              <img src={logo_img} alt="logo_img" width={40} />
            </figure>
            <figcaption>
              <h1 className="text-4xl text-[#435a65] font-poppins font-semibold">
                Aroviya
              </h1>
            </figcaption>
          </div>
          <button
            type="button"
            className="md:hidden text-base text-[#263238] font-poppins font-semibold "
            onClick={handleOpenMenu}
          >
            {!isMenuOpen ? `Menu` : `Close`}
          </button>
        </div>
        <div
          className={`md:p-0 w-full md:w-[60%] md:h-full overflow-hidden bg-blue-50 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:gap-0 transition-all duration-700 ease-in-out ${
            isMenuOpen ? "max-h-[100vh] min-h-[100vh] " : "max-h-0 md:max-h-max min-h-0 md:min-h-min"
          }`}
          style={{ height: isMenuOpen ? "100%" : "0" }}
        >
          <nav className="w-full md:w-auto h-auto py-8 md:p-0">
            <ul className="md:mt-0 w-full flex flex-col md:flex-row gap-7">
              {navLinks.map((links, i) => {
                return (
                  <li
                    key={i}
                    className="text-3xl md:text-base text-zinc-500 font-normal font-poppins"
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
          <ul className="md:mt-0 w-full md:w-fit flex flex-col md:flex-row items-start gap-7 action-btns">
            {actionLinks.map((links, i) => {
              return (
                <li
                  key={i}
                  className="btn-hover-animation px-5 py-[0.4rem] rounded-md"
                >
                  <button
                    className="capitalize text-xl md:text-base text-[#435a65] font-normal font-poppins"
                    type="button"
                    value={links.action}
                    onClick={onActionBtnClick}
                  >
                    {links.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <span className="w-full text-base text-center font-poppins font-medium text-[#263238] md:hidden">
            Made with ❤ for Barpeta, Assam
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
