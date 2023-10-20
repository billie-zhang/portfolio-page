import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="about"
      className="w-full h-[1100px] sm:h-[900px] md:h-full lg:h-[700px] pt-[110px] bg-almost-black text-light-grey"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8" data-aos="fade-up">
          <h2 className="font-signature text-4xl font-bold inline ">
            about me
          </h2>
          {/* border-b-4 for underline */}
        </div>

        <p className="text-l leading-relaxed" data-aos="fade-up">
          I'm a{" "}
          <b>
            second year Systems Design Engineering student at the University of
            Waterloo.
          </b>{" "}
          As a quick learner with a natural curiosity for technology, I have a
          keen interest in both software development and design. I thrive in
          fast-paced environments and am always exploring new opportunities to
          learn and grow.
        </p>

        <br />

        <p className="text-l leading-relaxed" data-aos="fade-up">
          In my current role as a Full Stack Developer at RBC, I am working with
          React and Typescript applications, and using CSS to style for optimal
          user experiences and accessibility. The main application I am working
          on is a chatbot that is able to help RBC employees with their tech
          inquiries, including laptop issues, ticket lookup, VPN lockout, and
          much more. Additionally, I'm designing components of our applications
          on Figma and implementing conversation flows to improve the user
          experience.
        </p>

        <br />

        <p className="text-l leading-relaxed" data-aos="fade-up">
          Beyond learning and growing in the professional realm, I also enjoy
          reading, baking, early morning runs, spending time with family and
          friends, learning new languages, crocheting, learning music and being
          outside with nature. Feel free to reach out if you have any questions
          or just want to chat! I love to connect with like-minded individuals.
          <b> Currently seeking Summer 2024 opportunities.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
