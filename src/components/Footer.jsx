import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div name="footer" className="pt-[70px] pb-4 bg-almost-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-10">
        <ul className="flex flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/billie-zhang"
            className="group w-9 h-9 items-center justify-center rounded-full border-2 inline-flex border-pale-blue mx-3 my-2 hover:border-light-blue ease-in-out"
          >
            <FaGithub className="w-8 h-8 rounded-full items-center justify-center inline-flex bg-pale-blue group-hover:bg-light-blue ease-in-out" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/billiezhang/"
            className="group w-9 h-9 items-center justify-center rounded-full border-2 inline-flex border-pale-blue mx-3 my-2 hover:border-light-blue ease-in-out"
          >
            <FaLinkedinIn className="w-5 h-5 items-center justify-center inline-flex fill-pale-blue group-hover:fill-light-blue ease-in-out" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:billie.zhang@uwaterloo.ca"
            className="group w-9 h-9 items-center justify-center rounded-full border-2 inline-flex border-pale-blue mx-3 my-2 hover:border-light-blue ease-in-out"
          >
            <HiOutlineMail className="w-9 h-6 items-center justify-center fill-pale-blue group-hover:fill-light-blue ease-in-out" />
          </a>
        </ul>

        <p className="text-pale-blue py-2">
          &#169; Designed and built with love by Billie Zhang 2023.
        </p>
      </div>
    </div>
  );
};

export default Footer;
