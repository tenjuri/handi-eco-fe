import OurTeam1 from "@/assets/images/our-team/our-team-1.jpg";
import OurTeam2 from "@/assets/images/our-team/our-team-2.jpg";
import OurTeam3 from "@/assets/images/our-team/our-team-3.jpg";

export const useOurTeam = () => {
  const ourTeams = [
    {
      name: "Peter Nguyen",
      position: "Co-Founder",
      phone: "+84-34-223-6789",
      mail: "peter@handi-eco.com",
      image: OurTeam1,
    },
    {
      name: "Duc Thien Andree",
      position: "Co-Founder",
      phone: "+84-823-666-533",
      mail: "andree@handi-eco.com",
      image: OurTeam2,
    },
    {
      name: "Elly Tran",
      position: "Co-Founder",
      phone: "+84-968-230-564",
      mail: " elly@handi-eco.com",
      image: OurTeam3,
    },
  ];
  return { ourTeams };
};
