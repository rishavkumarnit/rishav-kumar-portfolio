import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Rishav Kumar
        <Image alt="" src={assets.hand_icon} className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        full stack developer.
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo">
        I&apos;m a Full-Stack Engineer specializing in Java and Node.js for
        backend development and React with Tailwind CSS for building clean,
        responsive front-end interfaces.
      </p>
      <div className="flex felx-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white items-center bg-black text-white flex items gap-2"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            className="w-4 h-3"
            alt=""
          ></Image>
        </a>
        <a
          href="/RishavResume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 items-center flex items gap-2"
        >
          my resume
          <Image src={assets.download_icon} className="w-4 h-4" alt=""></Image>
        </a>
      </div>
      <div className="flex mt-4 flex-wrap justify-center gap-8 opacity-80">
        <a href="https://www.linkedin.com/in/rishavkumarnit/" target="_blank">
          <Image
            className="h-6 w-6"
            src="/LinkedInlogo.png"
            alt="LinkedIn"
            width={1}
            height={1}
          />
        </a>
        <a
          href="https://github.com/rishavkumarnit?tab=repositories"
          target="_blank"
        >
          <Image
            className="h-6 w-6"
            src="/githublogo.png"
            alt="GitHub"
            width={1}
            height={1}
          />
        </a>
        <a href="https://leetcode.com/u/user3574LS/" target="_blank">
          <Image
            className="h-6 w-6"
            src="/leetcodelogo.png"
            alt="LeetCode"
            width={1}
            height={1}
          />
        </a>
        <a href="https://x.com/RishavKumar_25" target="_blank">
          <Image
            className="h-6 w-6"
            src="/twitter.png"
            alt="Twitter"
            width={1}
            height={1}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
