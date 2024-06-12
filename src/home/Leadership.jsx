import React, { useEffect } from "react";
import resume from "../assets/BillieZhangResume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Leadership = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const leadership = [
    {
      id: 1,
      experience: "VP Finance",
      company: "Professional Engineers of Ontario - Student Conference",
      time: "Jan 2023 - Present",
      point1:
        " - Developed comprehensive budget portfolios and invoices, ensuring precise financial management.",
      point2:
        " - Refined contingency plans to address potential financial challenges and ensure business continuity. ",
      point3:
        " - Worked with each division to ensure that budgets were being met and making adjustments as necessary.",
    },
    {
      id: 2,
      experience: "Sponsorship & Finance Director",
      company: "Conference in Diversity in Engineering Organizing Committee",
      time: "Jan - Dec 2023",
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
      className="h-[1650px] sm:h-[1200px] md:h-[1200px] lg:h-[700px] w-full pt-[110px] bg-almost-black text-light-grey"
    >
      <div
        className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-auto"
        data-aos="fade-up"
        data-aos-once
      >
        <div>
          <h2 className="font-signature text-4xl font-bold inline ">
            leadership experience
          </h2>
        </div>
        <div>
          {leadership.map(
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

export default Leadership;
