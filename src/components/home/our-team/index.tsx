import React from "react";
import { useOurTeam } from "@/hooks/useOurTeam";
import { LucidePhoneCall, MailIcon } from "lucide-react";

const OurTeam: React.FC = () => {
  const { ourTeams } = useOurTeam();
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 mx-auto p-10">
        <span className="text-3xl font-bold">OUR TEAM</span>
        <p className="mt-5">
          At Handi&Eco, our mission is to bring the timeless beauty of
          handcrafted bamboo and rattan products into modern living, while
          contributing to a sustainable future. Rooted in the traditions of
          skilled artisans and inspired by the harmony of nature, we create
          eco-friendly solutions that seamlessly blend with contemporary
          lifestyles.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-4 mt-6">
          {ourTeams.map((team) => (
            <div key={team.name} className="flex flex-col gap-6 p-4 xl:p-10">
              <img
                src={team.image.src}
                alt={team.name}
                width={200}
                height={200}
                className="rounded-3xl w-full h-full max-w-[360px] max-h-[450px] object-cover shadow-2xl"
              />
              <div>
                <p className="font-bold text-lg">{team.name}</p>
                <p className="title-underlined w-max">{team.position}</p>
                <div className="mt-2 flex items-center gap-2">
                  <LucidePhoneCall className="text-gold-app w-5 h-5" />
                  <a href={`tel:${team.phone}`} className="cursor-pointer">
                    +84-823-666-533
                  </a>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <MailIcon className="text-gold-app w-5 h-" />
                  <a href={`mailto:${team.mail}`} className="cursor-pointer">
                    andree@handieco.com
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
