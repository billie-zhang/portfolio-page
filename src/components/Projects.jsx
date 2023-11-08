import React, { useEffect } from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import bzwebsite from "../assets/website.png";
import bbl from "../assets/bbl.png";
import eco from "../assets/ecothreads.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const projects = [
    {
      id: 1,
      src: bzwebsite,
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing my professional journey, skills, and accomplishments. The site serves as a comprehensive snapshot of my abilities.",
      lang: "react.js, tailwind CSS",
      github: "https://github.com/billie-zhang/portfolio",
      link: "https://billiezhang.vercel.app/",
    },
    {
      id: 2,
      src: eco,
      title: "EcoThreads",
      desc: "A website that displays an interactive Figma prototype of a fashion sustainability app and serves as a web preview for the app, built for HackTheGlobe.",
      lang: "react.js, tailwind CSS, Figma",
      github: "https://github.com/billie-zhang/EcoThreads",
      link: "https://billie-zhang.github.io/EcoThreads/",
    },
    {
      id: 3,
      src: bbl,
      title: "Billie's Baking Life",
      desc: "A food blog where I spill the beans (and sugar) on all things delicious, from pretty cakes to the chewiest cookies! I'm the recipe developer, taste-tester and photographer.",
      lang: "Wordpress, HTML, CSS",
      github: "https://github.com/billie-zhang/billies-baking-life",
      link: "https://www.billiesbakinglife.com/",
    },
  ];

  return (
    <div
      name="projects"
      className="h-full pt-[110px] bg-almost-black w-full text-light-grey"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full">
        <div className="pb-10" data-aos="fade-up" data-aos-once>
          <h2 className="font-signature text-4xl font-bold inline">projects</h2>
          {/* <p className="py-4">some fun stuff I've created!</p> */}
        </div>
        <div
          className="grid sm:grid-cols-2 gap-16 px-12 sm:px-0"
          data-aos="fade-up"
          data-aos-once
        >
          {projects.map(({ id, src, title, desc, lang, github, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 rounded-lg duration-500 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-md" />
              <div>
                <h4 className="px-4 pt-3 font-bold text-xl">{title}</h4>
                <p className="px-4 py-3 text-sm/relaxed line-clamp-4">{desc}</p>
              </div>
              <div>
                <div className="flex flex-row justify-between items-center px-4 ">
                  <p className="items-center pb-3 text-sm italic ">{lang}</p>
                  <div className="flex ">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={github}
                      className="px-3 pb-3 duration-200 hover:scale-105"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link}
                      className="pb-3 duration-200 hover:scale-105"
                    >
                      <MdOpenInNew className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
