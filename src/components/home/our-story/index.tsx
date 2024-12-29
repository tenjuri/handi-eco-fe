import React from "react";
import { getDictionary } from "../../../../get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};
const OurStory: React.FC<Props> = ({ dictionary }) => {
  const images = Array.from(Array(4).keys());
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="px-10">
            <span className="text-3xl font-bold uppercase">
              {dictionary.ourStory.title}
            </span>
            <p className="mt-5">{dictionary.ourStory.slogan}</p>
            <p>{dictionary.ourStory.description}</p>
          </div>
          <div className="grid grid-cols-2 px-10 lg:p-0">
            {images.map((image, index) => (
              <img
                key={image}
                src={`https://media.handi-eco.vn/images/story-${index}.jpg`}
                alt={index.toString()}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
