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
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-6">
          {ourTeams.map((team) => (
            <div
              key={team.name}
              className="flex mx-auto lg:mx-0 flex-col gap-6 p-4 xl:p-10"
            >
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

                {team.phone && (
                  <div className="mt-2 flex items-center gap-2">
                    <LucidePhoneCall className="text-gold-app w-5 h-5" />
                    <a href={`tel:${team.phone}`} className="cursor-pointer">
                      {team.phone}
                    </a>
                  </div>
                )}

                <div className="mt-1 flex items-center gap-2">
                  <MailIcon className="text-gold-app w-5 h-" />
                  <a href={`mailto:${team.mail}`} className="cursor-pointer">
                    {team.mail}
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
