import React, { useEffect } from "react";
import resume from "../assets/BillieZhangResume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const experience = [
    {
      id: 1,
      experience: "Full Stack Developer",
      company: "Royal Bank of Canada",
      time: "Sept 2023 - Present",
      project:
        "Project: Tia, an AI-based tech-support tool that can help RBC employees resolve common technology issues, including escalating tech issues, restoring corporate data, providing status updates on incident tickets and myMarketPlace requests and much more!",
      point1:
        " - Designed and implemented dark mode in conversational chat bot using react.js, TypeScript, CSS.",
      point2:
        " - Implemented an intuitive conversational flow in the backend using TypeScript, allowing new hires and students to have a more seamless onboarding process.",
      point3:
        " - Designed and executed UI components using Figma, striking a balance between aesthetics and functionality.",
      point4:
        " - Collaborated in cross-functional teams, utilizing Agile methodologies and Jira, to ensure streamlined project management.",
    },
    {
      id: 2,
      experience: "Technical Systems Analyst",
      company: "Royal Bank of Canada",
      time: "Jan - Apr 2023",
      point1:
        " - Processed over 2000 user access and permissions requests on ServiceNow platform. ",
      point2:
        " - Improved task efficiency as measured by tracking completion times and error rates, by streamlining and automating processes and eliminating unnecessary steps, resulted in faster turnaround times and increased capacity.",
      point3:
        " - Trained coworkers on processes and procedures, promoting a culture of continuous learning and improvement.",
    },
    {
      id: 3,
      experience: "Sponsorship & Finance Director",
      company: "Conference in Diversity in Engineering Organizing Committee",
      time: "Jan 2023 - Present",
      point1:
        " - Secured conference sponsorships through proposal presentations and effective communication with potential sponsor representatives, resulting in 20% increase in revenue.",
      point2:
        " - Created invoices for delegates, maintained records of cash flow and follow up with invoice payments, including managing cheques and EFT.",
      point3: "",
    },
  ];

  return (
    <div
      name="experience"
      className="h-[1650px] sm:h-[1200px] md:h-[1200px] lg:h-[1000px] w-full pt-[110px] bg-almost-black text-light-grey"
    >
      <div
        className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-auto"
        data-aos="fade-up"
        data-aos-once
      >
        <div>
          <h2 className="font-signature text-4xl font-bold inline ">
            experience
          </h2>
        </div>
        <div>
          {experience.map(
            ({
              id,
              experience,
              company,
              time,
              project,
              point1,
              point2,
              point3,
              point4,
            }) => (
              <div key={id}>
                <div className=" flex pt-8 items-center">
                  <p className=" text-xl font-bold pr-3 text-medium-blue">
                    {experience}
                  </p>
                  <hr class="flex-grow border-t bg-gray-400 " />
                  <p className=" pl-3 text-medium-blue">{time}</p>
                </div>
                <p className=" font-bold py-1">{company}</p>
                <div className="text-sm pt-1 leading-relaxed">
                  <p className="pb-1">
                    <i>{project}</i>
                  </p>
                  <p>{point1}</p>
                  <p>{point2}</p>
                  <p>{point3}</p>
                  <p>{point4}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="py-8">
          <a
            className=" text-light-blue border border-light-blue w-fit px-6 py-3 my-3 flex items-center rounded-md transition ease-in-out duration-500 hover:text-white hover:bg-light-blue cursor-pointer"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
