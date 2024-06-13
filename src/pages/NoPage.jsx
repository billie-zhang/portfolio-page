import React from "react";
import Contact from "../home/Contact";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div
      name="about"
      className="w-full h-full pt-[220px] bg-almost-black text-light-grey"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <h2 className="font-signature text-5xl font-bold flex items-center justify-center ">
            Page 404 not found
          </h2>
        </div>
        <Link
          to={"/"}
          className="text-3xl font-bold flex items-center justify-center py-4 hover:scale-105 hover:text-medium-blue duration-200 ease-in-out"
        >
          Return to homepage
        </Link>
      </div>
      <Contact />
    </div>
  );
};

export default NoPage;
