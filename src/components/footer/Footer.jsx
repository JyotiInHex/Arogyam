import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const QuickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  const Support = [
    { name: "FAQs", path: "/faqs" },
    { name: "Help Center", path: "/helpCenter" },
    { name: "Community Forum", path: "/communityForum" },
  ];

  const Legals = [
    { name: "Privacy & Policy", path: "/privacyPolicy" },
    { name: "Terms & Conditions", path: "/TermsAndConditions" },
  ];

  return (
    <footer className="mb-0 p-7 md:px-14 md:py-0 w-full h-auto">
      <div className="w-full h-auto bg-[#263238] rounded-3xl p-14 md:grid md:grid-cols-2 gap-y-8">
        <div className="flex flex-col gap-10 md:gap-20 mb-10 md:mb-0">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-6xl text-[#fe7f18] font-montserrat font-semibold">
              Aroviya
            </h2>
            <h5 className="text-lg text-blue-50 font-poppins font-medium">
              Wellness Simplified, Lives Transformed.
            </h5>
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-2xl text-blue-50 font-montserrat font-medium">
              Follow Us
            </h3>
            <ul className="flex flex-row gap-2">
              <li className="text-xl text-blue-50 font-medium ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li className="text-xl text-blue-50 font-medium ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-5 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-5">
          <ul className="flex flex-col gap-2">
            <h3 className="text-2xl font-poppins font-medium text-blue-50">
              Quick Links
            </h3>
            {QuickLinks.map((l, i) => {
              return (
                <li
                  key={i}
                  className="text-lg text-blue-50 font-medium font-roboto"
                >
                  <Link to={l.path}>{l.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-2xl font-poppins font-medium text-blue-50">
              Support
            </h3>
            {Support.map((l, i) => {
              return (
                <li
                  key={i}
                  className="text-lg text-blue-50 font-medium font-roboto"
                >
                  <Link to={l.path}>{l.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-2xl font-poppins font-medium text-blue-50">
              Contact
            </h3>
            <li className="text-lg text-blue-50 font-medium font-roboto">
              <a href="mailto:support@aroviya.online">Support@aroviya.online</a>
            </li>
            <li className="text-lg text-blue-50 font-medium font-roboto">
              <span>Barpeta Town, Assam, India 781301</span>
            </li>
          </ul>
        </div>

        <div className="col-span-2 w-full h-auto">
          <hr className="w-full h-1 bg-blue-50 rounded-full" />
          <div className="py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <ul className="flex flex-col md:flex-row gap-4">
              {Legals.map((l, i) => {
                return (
                  <li
                    key={i}
                    className="text-base text-blue-50 font-medium font-roboto"
                  >
                    <Link to={l.path}>{l.name}</Link>
                  </li>
                );
              })}
            </ul>
            <span className="mt-7 md:mt-0 text-base text-blue-50 font-medium font-roboto">
                Copyright &copy; {new Date().getFullYear()} Aroviya All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
