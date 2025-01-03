import React from "react";
import { getDictionary } from "../../../../get-dictionary";
import Image from "next/image";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};
const OurStory: React.FC<Props> = ({ dictionary }) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 mx-auto bg-[#124049]">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white pt-10">
          <div className="px-10">
            <span className="text-3xl font-bold uppercase">
              {dictionary.ourStory.title}
            </span>
            <p className="text-justify">{dictionary.ourStory.description}</p>
          </div>
          <div className="">
            <Image
              src="https://media.handi-eco.vn/images/our-story/our-story.png"
              alt=""
              width={1118}
              height={720}
              className="w-full h-full object-cover hidden lg:block"
            />
            <Image
              src="https://media.handi-eco.vn/images/our-story/our-story-2.png"
              alt=""
              width={1284}
              height={1249}
              className="w-full h-full object-cover lg:hidden"
            />
          </div>
        </div>
        <div className="bg-gold-app  text-green-app p-4 mx-10 mt-10 hidden lg:block">
          PHONE/WHATSAPP/LINE/WECHAT: +84-823-666-533/ +84-34-223-6789/
          +84-968-230-564
        </div>
      </div>
    </div>
  );
};

export default OurStory;
