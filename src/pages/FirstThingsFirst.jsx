import React from "react";

const FirstThingsFirst = () => {
  return (
    <div
      name="FirstThingsFirst"
      className="h-screen sm:h-[1000px] md:h-screen bg-almost-black pt-[80px] md:pt-[40px] lg:pt-[100px] text-light-grey"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col w-full h-full px-4">
        <div>
          <h1 className="font-signature my-10 md:pt-0 lg:mt-24 py-4 lg:text-6xl text-5xl font-bold text-light-grey">
            First Things First
          </h1>
        </div>
        <div className="mb-4">
          <h2 className="font-signature text-2xl font-bold text-light-grey">
            Inspired by Stephen R. Covey's "7 Habits of Highly Effective People"
          </h2>
          <p className="my-4 text-xl font-normal italic text-light-grey">
            "The key is not to prioritize what's on your schedule, but to
            schedule your priorities."
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-signature text-xl font-bold text-light-grey">
            Quadrant II
          </h2>
          <p className="my-3 text-l font-normal text-light-grey">
            - Important, but not urgent; requires more initiative, more
            proactivity <br />- building relationships, writing a personal
            mission statement, long range goals
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-signature text-xl font-bold text-light-grey">
            Important Components of a Quadrant II Planner
          </h2>
          <p className="my-3 text-l font-normal text-light-grey">
            1. Coherence{" "}
            <i> (unity of vision, mission statement, roles and goals)</i>
            <br />
            2. Balance <i>(career & growth; health & relationships)</i>
            <br />
            3. Quadrant II focus{" "}
            <i>(career & growth; health & relationships)</i>
            <br />
            4. A "People" Dimension{" "}
            <i>(career & growth; health & relationships)</i>
            <br />
            5. Flexibility <i>(career & growth; health & relationships)</i>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstThingsFirst;
