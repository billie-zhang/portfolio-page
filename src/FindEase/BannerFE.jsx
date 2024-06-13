import React from "react";

const BannerFE = () => {
  return (
    <div
      name="bannerFE"
      className="h-screen sm:h-[1000px] md:h-screen bg-almost-black pt-[80px] md:pt-[40px] lg:pt-[100px]"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center w-full h-full px-6 md:flex-row">
        <h1 className="font-signature mt-10 md:pt-0 lg:mt-24 py-4 lg:text-6xl text-5xl font-bold text-light-grey">
          FindEase
        </h1>
      </div>
    </div>
  );
};

export default BannerFE;
