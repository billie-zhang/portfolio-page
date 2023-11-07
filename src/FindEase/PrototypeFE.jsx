import React from "react";

const PrototypeFE = () => {
  return (
    <div
      name="findease"
      className="h-full sm:h-[1000px] md:h-full bg-almost-black pt-[80px] md:pt-[40px] lg:pt-[100px]"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center w-full h-full px-6">
        <div>
          <h2 className="font-signature mt-10 md:pt-0 lg:mt-24 py-4 lg:text-4xl text-3xl font-bold text-light-grey">
            Prototype
          </h2>
        </div>

        <div className="justify-center items-center w-full">
          <div>
            <iframe
              title="FindEase Prototype"
              style={{
                width: "450px",
                height: "900px",
              }}
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH4hLhfd7E0qZGAMXx0DucR%2FFindEase%3Ftype%3Ddesign%26node-id%3D1-4%26t%3D4oJruC9O5smqpDcg-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A3%26mode%3Ddesign"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeFE;
