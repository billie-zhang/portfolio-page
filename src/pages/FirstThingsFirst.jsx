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
        <div>
          <h2 className="font-signature text-2xl font-bold text-light-grey">
            Inspired by Stephen R. Covey's "7 Habits of Highly Effective People"
          </h2>
          <h2 className="font-signature my-4 text-xl font-thin italic text-light-grey">
            "The key is not to prioritize what's on your schedule, but to
            schedule your priorities."
          </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default FirstThingsFirst;
