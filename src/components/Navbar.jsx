import React from "react";
import Logo from "../../public/icon/logo-svg.svg";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navLinks = ['Home', 'About', 'Features', 'Contact'];

  return (
    <nav id="nav">
      <div className="flex items-center gap-1">
        <figure>
          <img src={Logo} alt="Logo" width={35} />
        </figure>
        <figcaption className="text-2xl text-zinc-700 font-poppins font-semibold">
          Arogyam{" "}
          <sub className="text-base text-zinc-400 font-poppins font-medium">
            v1.0
          </sub>
        </figcaption>
      </div>
      
      <ul className="flex gap-5 items-center">
        {
          navLinks.map((links, index) => {
            return (
              <NavLink to={`/${links === "Home" ? "" : links}`} key={index} className="text-base text-zinc-800 font-poppins font-semibold">{links}</NavLink>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;
