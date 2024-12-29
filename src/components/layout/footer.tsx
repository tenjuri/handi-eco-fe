import React from "react";
import Link from "next/link";
import { LucidePhoneCall, MailIcon, HomeIcon } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-green-app text-white p-4">
      <div className="max-w-[1440px] m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1 grid grid-cols-2 gap-10">
            <Image
              src="/logo-lg.jpg"
              alt="logo"
              className="w-36 h-36"
              width={144}
              height={144}
              style={{
                clipPath: "circle(60% at 50% 50%)",
              }}
            />
            <div className="flex flex-col">
              <p className="font-bold text-lg leading-[100%]">QUICK LINKS</p>
              <div className="w-12 h-1 bg-gold-app mt-1"></div>
              <Link
                href="/"
                className="cursor-pointer block hover:text-base mt-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="cursor-pointer block hover:text-base"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="cursor-pointer block hover:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold text-lg leading-[100%]">CONTACT US</p>
              <div className="w-12 h-1 bg-gold-app mt-1"></div>
            </div>
            <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
              <div className="flex flex-col">
                <p className="font-bold text-lg leading-[100%]">Peter Nguyen</p>
                <div className="mt-2 flex items-center gap-2">
                  <LucidePhoneCall className="text-gold-app w-5 h-5" />
                  +84-34-223-6789
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <MailIcon className="text-gold-app w-5 h-" />
                  Peter@handieco.com
                </div>
                <div className="mt-1 flex  gap-2">
                  <HomeIcon className="text-gold-app w-6 h-6 min-w-5" />
                  99 Cau Dien, Phuc Dien, Bac Tu Liem, Hanoi, Viet Nam
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg leading-[100%]">
                  Duc Thien Andree
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <LucidePhoneCall className="text-gold-app w-5 h-5" />
                  +84-823-666-533
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <MailIcon className="text-gold-app w-5 h-" />
                  andree@handieco.com
                </div>
                <div className="mt-1 flex  gap-2">
                  <HomeIcon className="text-gold-app w-6 h-6 min-w-5" />
                  99 Cau Dien, Phuc Dien, Bac Tu Liem, Hanoi, Viet Nam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
