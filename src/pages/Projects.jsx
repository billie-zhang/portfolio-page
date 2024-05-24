import React, { useEffect } from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import seasonal from "../assets/Seasonal.png";
import bzwebsite from "../assets/website.png";
import bbl from "../assets/bbl.png";
import eco from "../assets/ecothreads.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: seasonal,
      title: "Seasonal",
      desc: "An app that helps you pick the perfect fruits at the perfect time. Seasonal scans fruits and informs consumers on the fruit ripeness, seasonality, and recipe recommendations.",
      lang: "react.js, tailwind CSS, OpenAI, Figma",
      github: "https://github.com/billie-zhang/Seasonal",
      link: "https://seasonal-app.vercel.app/",
    },
    {
      id: 2,
      src: bzwebsite,
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing my professional journey, skills, and accomplishments. The site serves as a comprehensive snapshot of my abilities.",
      lang: "react.js, tailwind CSS",
      github: "https://github.com/billie-zhang/portfolio",
      link: "https://billiezhang.vercel.app/",
    },
    {
      id: 3,
      src: eco,
      title: "EcoThreads",
      desc: "A website that displays an interactive Figma prototype of a fashion sustainability app and serves as a web preview for the app, built for HackTheGlobe.",
      lang: "react.js, tailwind CSS, Figma",
      github: "https://github.com/billie-zhang/EcoThreads",
      link: "https://billie-zhang.github.io/EcoThreads/",
    },
    {
      id: 4,
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
      className="h-full pt-[130px] bg-almost-black w-full text-light-grey"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full">
        <div className="pb-10">
          <h2 className="font-signature text-4xl font-bold inline">projects</h2>
          {/* <p className="py-4">some fun stuff I've created!</p> */}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-4 px-12 sm:px-0">
          {projects.map(({ id, src, title, desc, lang, github, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 rounded-lg duration-500 hover:scale-105"
            >
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <img src={src} alt="" className="rounded-t-md" />
              </a>
              <div>
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  <h4 className="px-4 pt-3 font-bold text-xl">{title}</h4>
                </a>
                <p className="px-4 py-3 text-sm/relaxed lg:text-xs/relaxed line-clamp-4">
                  {desc}
                </p>
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
