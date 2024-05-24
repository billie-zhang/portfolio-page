import React, { useEffect } from "react";
import hero from "../assets/me3.svg";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/BillieZhangResume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="banner"
      className="h-screen sm:h-[1000px] md:h-screen bg-almost-black pt-[80px] md:pt-[40px] lg:pt-[100px]"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center w-full h-full px-6 md:flex-row">
        <div className="flex flex-col pt-5 md:pb-10 lg:pb-[70px] w-full h-auto md:h-full justify-center items-center md:items-start">
          <h1
            className="font-signature mt-10 md:pt-0 lg:mt-24 py-4 lg:text-6xl text-5xl font-bold text-light-grey"
            data-aos="fade"
            data-aos-once
          >
            Hi I'm Billie!
          </h1>
          <p
            className="font-signature text-3xl lg:text-4xl my-4 font-medium text-light-grey"
            data-aos="fade"
            data-aos-once
          >
            I'm{" "}
            <TypeAnimation
              sequence={[
                "a developer",
                1500,
                "a designer",
                1500,
                "a lifelong learner",
                1500,
                "an ice cream lover",
                1500,
                "a curious mind",
                1500,
                "a problem solver",
                1500,
                "a team player",
                1500,
              ]}
              wrapper="span"
              cursor={true}
              speed={200}
              deletionSpeed={150}
              repeat={Infinity}
            />
          </p>
          <div className="py-2" data-aos="zoom-in" data-aos-once>
            <a
              className=" text-light-blue border border-light-blue w-fit px-6 py-3 my-3 flex rounded-md transition ease-in-out duration-500 hover:text-white hover:bg-light-blue cursor-pointer"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <Link
              to="contact"
              smooth
              duration={2000}
              className="text-light-blue border border-light-blue w-fit px-6 py-3 my-3 flex items-center rounded-md transition ease-in-out duration-500 hover:text-white hover:bg-light-blue cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className=" w-full h-full pt-8 md:pt-60 lg:pt-[120px] items-center"
          data-aos="zoom-in"
          data-aos-once
        >
          <img
            src={hero}
            alt="studio portrait of me"
            className="rounded-2xl mx-auto w-3/4 md:w-full md:justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
