import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-5 pb-32 scroll-mt-30">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-12">
        <div className="flex-1">
          <p className=" mb-10 font-Ovo">
            I&apos;m a Full-Stack Software Engineer specializing in Java,
            Javascript, and React with Tailwind CSS. I build scalable APIs,
            clean backend architectures, and modern, responsive UIs. I&apos;m
            passionate about solving real-world problems, writing maintainable
            code, and creating fast, user-focused digital experiences.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-16">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1  duration-500 hover:shadow-black"
                key={index}
              >
                <h3 className="text-center text-2xl text-gray-700 py-4 font-semibold">
                  {title}
                </h3>
                <p className="text-center text-gray-600 text-sm">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
