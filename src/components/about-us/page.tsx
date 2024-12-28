import React from "react";
import Image from "next/image";
import { useOurTeam } from "@/hooks/useOurTeam";

const AboutUs: React.FC = () => {
  const { ourTeams } = useOurTeam();

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-green-app about-us">
        About Us - Handi&Eco
      </h1>
      <p className="max-w-[90%] md:max-w-[70%] mx-auto text-center mt-4 bg-gold-app/50 p-6 border border-gold-app rounded-lg shadow-lg italic">
        At Handi&Eco, our mission is to bring the timeless beauty of handcrafted
        bamboo and rattan products into modern living, while contributing to a
        sustainable future. Rooted in the traditions of skilled artisans and
        inspired by the harmony of nature, we create eco-friendly solutions that
        seamlessly blend with contemporary lifestyles.
      </p>
      <h1 className="text-lg md:text-2xl font-bold mt-8 w-max title-underlined">
        Trusted Expertise in Global Export
      </h1>
      <p>
        With over a decade of experience, Handi&Eco has successfully exported to
        some of the world’s most demanding markets, including Europe, the United
        States, and Japan. Each region comes with its own rigorous requirements:
      </p>
      <div className="flex gap-2">
        <div className="w-2 min-w-2 h-2 bg-black rounded-full mt-2"></div>
        <p>
          Europe: Compliance with BSCI standards for social responsibility and
          REACH regulations for chemical safety. We ensure that our products are
          free from harmful substances such as formaldehyde and chlorinated
          phenols (PCP, TeCP, TCP).
        </p>
      </div>
      <div className="flex gap-2">
        <div className="w-2 min-w-2 h-2 bg-black rounded-full mt-2"></div>
        <p>
          United States: Adherence to FDA guidelines for food-contact products
          and CPSIA regulations for consumer goods.
        </p>
      </div>
      <div className="flex gap-2">
        <div className="w-2 min-w-2 h-2 bg-black rounded-full mt-2"></div>
        <p>
          Japan: Meeting meticulous quality standards, including MHLW (Ministry
          of Health, Labour and Welfare) requirements for food-contact safety.
        </p>
      </div>
      <p>
        Our ability to navigate these complex standards ensures that our
        products meet the highest benchmarks of safety, quality, and
        sustainability.
      </p>
      <h1 className="text-lg md:text-2xl font-bold mt-8 w-max title-underlined">
        Artistry Backed by Generations of Skill
      </h1>
      <p>
        The artisans behind Handi&Eco’s creations are the heart of our brand.
        Many of them hail from renowned craft villages, bringing 5-10 years of
        experience and a deep understanding of their craft. This expertise
        shines through in every detail, making our products both beautiful and
        durable.
      </p>
      <h1 className="text-lg md:text-2xl font-bold mt-8 w-max title-underlined">
        Why Partner with Handi&Eco?
      </h1>
      <p>
        Customizable Designs: Tailored solutions to meet your specific needs.
      </p>
      <p>
        Consistent Quality: Rigorous quality control ensures every item exceeds
        expectations.
      </p>
      <p>
        Eco-conscious Practices: Sustainable sourcing and production methods
        align with global green initiatives.
      </p>
      <p>
        Reliable Logistics: Streamlined export processes for timely deliveries
        worldwide.
      </p>
      <h1 className="text-lg md:text-2xl font-bold mt-8 w-max title-underlined">
        Contact Us
      </h1>
      <p>We’d love to hear from you and discuss how we can collaborate:</p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 mt-8">
        {ourTeams.map((ourTeam) => (
          <div
            key={ourTeam.name}
            className="flex flex-col md:flex-row items-center gap-4 mt-8"
          >
            <Image
              src={ourTeam.image.src}
              alt={ourTeam.name}
              width={200}
              height={200}
              className="min-w-40 max-w-40 h-40 object-cover rounded-3xl"
            />
            <div className="flex flex-col">
              <p className="font-bold">{ourTeam.name}</p>
              <p className="title-underlined">{ourTeam.position}</p>
              <p>{ourTeam.phone}</p>
              <p>{ourTeam.mail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[90%] md:max-w-[70%] mx-auto text-center mt-8 bg-green-app/50 p-6 border border-green-app rounded-lg shadow-lg italic">
        <p>
          Join us in celebrating craftsmanship and sustainability. Together, we
          can create a greener, more beautiful world.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
