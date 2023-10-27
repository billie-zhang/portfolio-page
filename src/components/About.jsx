import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpg";
import about7 from "../assets/about7.jpg";
import about8 from "../assets/about8.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="about"
      className="w-full h-full pt-[110px] bg-almost-black text-light-grey"
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
          In my current role as a <b>Full Stack Developer at RBC</b>, I am
          working with React and Typescript applications, and using CSS to style
          for optimal user experiences and accessibility. The main application I
          am working on is a Tia, a chatbot that is able to help RBC employees
          with their tech inquiries, including laptop issues, ticket lookup, VPN
          lockout, and much more. Additionally, I'm designing components of our
          applications on Figma and implementing new conversation flows to
          improve the user experience.
        </p>

        <br />

        <p className="text-l leading-relaxed" data-aos="fade-up">
          Beyond learning and growing in the professional realm, I also enjoy
          exploring many other hobbies that spark my creativity. I can easily
          spend an entire day reading a book, immersed in a new journey. In the
          real world, I love traveling, being able to explore diverse cultures
          and landscapes excites me. Both reading and traveling transport me to
          different worlds, igniting my curiosity and fueling my passion for
          exploration.
        </p>

        <br />
        {/* insert photo gallery  */}
        <AliceCarousel autoplay autoPlayInterval="3000">
          <img src={about1} alt="alma" />
          <img src={about2} alt="alma" />
          <img src={about3} alt="alma" />
          <img src={about4} alt="alma" />
          <img src={about5} alt="alma" />
          <img src={about6} alt="nyc" />
          <img src={about7} alt="vancouver" />
          <img src={about8} alt="seattle" />
        </AliceCarousel>

        <p className="text-l leading-relaxed" data-aos="fade-up">
          I also find joy in learning new languages (besides programming), even
          if I'm not very good at it, I still find it fun. I'm currently
          learning Spanish and Korean! Another language I lose myself in is
          music. These days, I'm honing my skills with the guitar, a journey
          that truly resonates with my love for learning.
          <br />
          To unwind and reconnect with myself, I cherish the simple joys of
          baking, early morning runs, quality time with loved ones, crocheting
          and immersing in the serenity of nature.
        </p>

        <br />

        <p className="text-l leading-relaxed" data-aos="fade-up">
          Feel free to reach out if you have any questions or just want to chat!
          I love to connect with like-minded individuals who share common
          interests and passions.
          <b> Currently seeking Summer 2024 opportunities.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
