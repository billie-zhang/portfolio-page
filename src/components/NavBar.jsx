import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [nav, setNav] = useState(false);
  // eslint-disable-next-line
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowNav(false);
        setNav(false);
      } else if (window.innerWidth < 767) {
        setShowNav(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
      url: "/",
    },
    {
      id: 2,
      link: "projects",
      url: "/projects",
    },
    {
      id: 3,
      link: "about",
      url: "/about",
    },
  ];
  return (
    <div>
      <div
        className={
          scrolled
            ? "flex z-50 justify-between items-center w-full h-24 px-4 text-pale-blue bg-dark-navy/80 backdrop-blur-md fixed ease-in-out duration-500"
            : "flex z-50 justify-between items-center w-full h-24 px-4 text-pale-blue bg-transparent fixed ease-in-out duration-500 "
        }
        data-aos="fade-down"
        data-aos-once
      >
        <div>
          <Link
            to={"/"}
            smooth
            duration={2000}
            className="font-semibold font-signature text-4xl ml-10 mt-10 mb-9 cursor-pointer"
          >
            bz
          </Link>
        </div>

        <ul className="hidden md:flex px-5 ">
          {links.map(({ id, link, url }) => (
            <li
              key={id}
              className="px-7 py-6 cursor-pointer font-medium text-xl text-light-blue hover:scale-105 hover:text-medium-blue duration-200 ease-in-out"
            >
              <Link to={url} smooth duration={2000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile nav open/close  */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 md:hidden"
        >
          <div
            className={
              nav
                ? "w-9 h-[0.2rem] m-2 duration-300 ease-in bg-light-blue -rotate-45 -translate-x-[4px] translate-y-[5px]"
                : "w-9 h-[0.2rem] m-2 duration-300 ease-in bg-light-blue"
            }
          ></div>
          <div
            className={
              nav
                ? "opacity-0"
                : "w-9 h-[0.2rem] m-2 duration-300 ease-in bg-light-blue"
            }
          ></div>
          <div
            className={
              nav
                ? "w-9 h-[0.2rem] m-2 duration-300 ease-in bg-light-blue rotate-45 -translate-x-[4px] -translate-y-[5px]"
                : "w-9 h-[0.2rem] m-2 duration-300 ease-in bg-light-blue"
            }
          ></div>
        </div>

        {nav && (
          <ul className="flex flex-col items-center absolute pt-20 top-0 right-0 transform translate-x-5 duration-500	h-screen bg-dark-navy text-light-grey ">
            {links.map(({ id, link, url }) => (
              <li key={id} className="px-16 cursor-pointer py-4 text-xl">
                <Link
                  onClick={() => setNav(!nav)}
                  to={url}
                  smooth
                  duration={2000}
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
