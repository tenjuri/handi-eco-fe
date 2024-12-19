import React from "react";

const OurExport: React.FC = () => {
  return (
    <div className="w-full bg-white mt-10">
      <div className="max-w-[1440px] m-auto mt-10">
        <div className="flex items-center gap-16 p-10">
          <h1 className="text-3xl font-bold italic">
            Our <br /> Export
          </h1>
          <div className="flex flex-col">
            <p className="font-semibold">
              Handi&Co: Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            <span className="font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>
        <div className="flex flex-grow w-full mt-10">
          <div className="w-[42%] h-full p-10">
            <img
              src={`https://picsum.photos/300/300?v=11`}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-[57%] flex flex-wrap h-max">
            <img
              src={`https://picsum.photos/300/200?v=1`}
              alt=""
              className="w-1/2 p-10"
            />
            <img
              src={`https://picsum.photos/300/200?v=2`}
              alt=""
              className="w-1/2 p-10"
            />
            <img
              src={`https://picsum.photos/300/200?v=3`}
              alt=""
              className="w-1/2 p-10"
            />
            <img
              src={`https://picsum.photos/300/200?v=4`}
              alt=""
              className="w-1/2 p-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExport;
