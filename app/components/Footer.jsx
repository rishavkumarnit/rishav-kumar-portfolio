import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto font-semibold flex flex-col items-center justify-center gap-4 px-4 py-2 sm:flex-row sm:justify-between">
        <p className="text-center text-sm sm:text-left ">
          © 2025 <span className="font-semibold text-black">Rishav Kumar</span>.
          All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex gap-2 items-center justify-center">
            <Image className="h-3 w-4" src={assets.mail_icon} alt="" />
            rishavkumar.nit@gmail.com
          </div>
          <a href="#" className="transition hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-gray-500">
            Terms of Service
          </a>
          <a href="#contact" className="transition hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
