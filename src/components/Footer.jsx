import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="py-16 px-20 w-full h-auto min-h-[60vh] max-h-max bg-zinc-900 rounded-t-2xl">
        <div className="mb-14 flex items-start gap-24 ">
          <div className=" flex flex-col justify-between w-full h-[25vh]">
            <div className="w-fit h-fit">
              <h2 className="text-4xl text-zinc-100 font-merriweather font-medium tracking-normal">
                Arogyam
              </h2>
              <h6 className="mt-2 text-lg text-zinc-100 font-poppins font-medium">
                Your Health, Our Priority
              </h6>
            </div>
            <ul className="w-fit h-auto flex items-center gap-3 text-2xl text-zinc-400">
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
            </ul>
          </div>
          <div className="w-full h-auto flex justify-end gap-28">
            <ul className="text-zinc-100 flex flex-col gap-1">
              <h2 className="text-2xl font-poppins font-semibold mb-3">
                Quick Links
              </h2>
              <NavLink to="/" className="text-base font-poppins font-normal">Home</NavLink>
              <NavLink to="/about" className="text-base font-poppins font-normal">About Us</NavLink>
              <NavLink to="/features" className="text-base font-poppins font-normal">Features</NavLink>
              <NavLink to="/contact" className="text-base font-poppins font-normal">Contact Us</NavLink>
            </ul>
            <ul className="text-zinc-100 flex flex-col gap-1">
              <h2 className="text-2xl font-poppins font-semibold mb-3">
                Explore More
              </h2>
              <NavLink className="text-base font-poppins font-normal">
                Find a Doctor
              </NavLink>
              <NavLink className="text-base font-poppins font-normal">
                Book an Appointment
              </NavLink>
              <NavLink className="text-base font-poppins font-normal">
                Pharmacy Search
              </NavLink>
              <NavLink className="text-base font-poppins font-normal">
                Emergency Services
              </NavLink>
            </ul>
          </div>
        </div>
        <hr className="border border-solid border-zinc-700 rounded-full mt-10" />
        <div className="text-zinc-100 flex items-start justify-between mt-7">
          <ul className="flex items-center gap-5">
            <NavLink to="/privacyPolicy" className="text-base font-poppins font-normal">
              Privacy Policy
            </NavLink>
            <NavLink to="/termsAndCondition" className="text-base font-poppins font-normal">
              Terms & Conditions
            </NavLink>
            <NavLink to="/helpCenter" className="text-base font-poppins font-normal">Help Center</NavLink>
          </ul>
          <div>
            <h5 className="text-base font-poppins font-normal">
              &copy; {new Date().getFullYear()} Arogyam Health Solutions
            </h5>
            <p className="text-sm text-right font-poppins font-normal">
              Crafted in Assam, designed for all.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
