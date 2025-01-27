import React from "react";
import Banner from "../home/Banner";
import Experience from "../home/Experience";
import Leadership from "../home/Leadership";
import Projects from "../home/ProjectsPreview";
// import Contact from "../home/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Experience />
      <Leadership />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
