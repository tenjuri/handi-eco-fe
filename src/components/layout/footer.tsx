import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="bg-green-app text-white p-4">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 grid grid-cols-2 gap-10">
          <div className="h-10 bg-white"></div>
          <div className="flex flex-col">
            <p className="font-bold text-lg leading-[100%]">QUICK LINKS</p>
            <div className="w-12 h-1 bg-base mt-1"></div>
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
        <div className="col-span-1 grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <p className="font-bold text-lg leading-[100%]">CONTACT US</p>
            <div className="w-12 h-1 bg-base mt-1"></div>
            <p className="mt-2">123 Street, City, Country</p>
            <p className="mt-1">Phone: (123) 456-7890</p>
            <p className="mt-1">Email: 2wW7f@example.com</p>
          </div>
        </div>
      </div>
      <p className="text-base text-center mt-4">Copyright &copy; 2024</p>
    </div>
  );
};

export default Footer;
