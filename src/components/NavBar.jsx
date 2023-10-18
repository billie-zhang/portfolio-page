import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// eslint-disable-next-line
import moon from "../assets/moon.svg";
// eslint-disable-next-line
import sun from "../assets/sun.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [nav, setNav] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div>
      <div
        className={
          scrolled
            ? "flex z-50 justify-between items-center w-full h-24 px-4 text-pale-blue bg-dark-navy/70 backdrop-blur-sm fixed ease-in-out duration-500"
            : "flex z-50 justify-between items-center w-full h-24 px-4 text-pale-blue bg-transparent fixed ease-in-out duration-500 "
        }
      >
        <div>
          <Link
            to="home"
            smooth
            duration={1000}
            className="font-semibold font-signature text-4xl ml-8 mt-10 mb-9 cursor-pointer"
          >
            bz
          </Link>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-7 py-6 cursor-pointer font-medium text-lg text-light-blue hover:scale-105 hover:text-medium-blue duration-200 ease-in-out"
            >
              <Link to={link} smooth duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* <div>
          <img
            src={moon}
            alt="moon"
            className=" ml-5 mr-6 cursor-pointer w-[30px] text-light-blue"
          />
        </div> */}

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-light-blue md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col items-center absolute pt-20 top-0 right-0 transform translate-x-5 duration-500	h-screen bg-dark-navy text-light-grey ">
            {links.map(({ id, link }) => (
              <li key={id} className="px-16 cursor-pointer py-4 text-xl">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
