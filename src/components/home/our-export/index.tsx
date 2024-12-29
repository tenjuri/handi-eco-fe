import React from "react";
import { type getDictionary } from "../../../../get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const OurExport: React.FC<Props> = ({ dictionary }) => {
  return (
    <div className="w-full bg-white mt-10">
      <div className="max-w-[1440px] m-auto mt-10">
        <div className="block md:flex items-center gap-16 px-10 lg:py-10">
          <h1 className="text-3xl font-bold italic uppercase">
            {dictionary.ourExport.title}
          </h1>
          <div className="flex flex-col mt-5 md:mt-0">
            <p className="font-semibold">{dictionary.ourExport.slogan}</p>
            <span className="font-medium">
              {dictionary.ourExport.description}
            </span>
          </div>
        </div>
        <div className="block xl:flex flex-grow w-full items-center">
          <div className="w-[100%] xl:w-[50%] h-full p-10 flex flex-grow items-center">
            <video
              className="xl:h-[405px] w-full object-cover"
              loop
              autoPlay
              muted
              playsInline
            >
              <source
                src="https://media.handi-eco.vn/videos/logistics.mp4"
                type="video/mp4"
                className="f-full"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full xl:w-[50%] grid grid-cols-2 xl:flex flex-wrap h-max p-10 xl:p-0 gap-4 xl:gap-0">
            <img
              src={`https://media.handi-eco.vn/images/global-logistics-1.jpg`}
              alt=""
              className="w-full xl:w-1/2 xl:p-10"
            />
            <img
              src={`https://media.handi-eco.vn/images/global-logistics-2.jpg`}
              alt=""
              className="w-full xl:w-1/2 xl:p-10"
            />
            <img
              src={`https://media.handi-eco.vn/images/global-logistics-3.jpg`}
              alt=""
              className="w-full xl:w-1/2 xl:p-10"
            />
            <img
              src={`https://media.handi-eco.vn/images/global-logistics-4.jpg`}
              alt=""
              className="w-full xl:w-1/2 xl:p-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExport;
