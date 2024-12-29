import React from "react";
import { useOurTeam } from "@/hooks/useOurTeam";
import { LucidePhoneCall, MailIcon } from "lucide-react";
import { type getDictionary } from "../../../../get-dictionary";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const OurTeam: React.FC<Props> = ({ dictionary }) => {
  const { ourTeams } = useOurTeam();
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 mx-auto p-10">
        <span className="text-3xl font-bold">{dictionary.ourTeam.title}</span>
        <p className="mt-5">{dictionary.ourTeam.description}</p>
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
