import React from "react";

const OurExport: React.FC = () => {
  return (
    <div className="w-full bg-white mt-10">
      <div className="max-w-[1440px] m-auto mt-10">
        <div className="block md:flex items-center gap-16 px-10 lg:py-10">
          <h1 className="text-3xl font-bold italic">
            Our <br className="hidden md:block" /> Export
          </h1>
          <div className="flex flex-col mt-5 md:mt-0">
            <p className="font-semibold">
              Handi&Co: Your go-to partner for premium Vietnamese agricultural
              exports
            </p>
            <span className="font-medium">
              With over a decade of specialized experience in Europe, Asia, and
              the Middle East, Handi&Co stands as a trusted expert in delivering
              top-quality Vietnamese agricultural products. Our dedicated team
              is committed to ensuring flawless, on-time deliveries to every
              corner of the globe
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
