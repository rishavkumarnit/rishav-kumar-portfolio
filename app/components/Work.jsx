import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-15">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-xl  mx-auto mt-5 mb-6 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full-stack development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            className="aspect-square border border-gray-400 shadow-sm bg-no-repeat  bg-contain bg-center rounded-lg relative cursor-pointer"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute gap-2 bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex flex-col items-center justify-center">
              <div className="">
                <h2 className="font-semibold text-sm w-full">
                  {project.title}
                </h2>
                {/* <p className="text-sm text-gray-700">{project.description}</p> */}
              </div>
              <div className=" flex items-center gap-4 justify-center">
                <a href={project.live} target="blank">
          
                  <Image
                    src={assets.link}
                    alt=""
                    className=" border rounded-full p-2 bg-black border-black w-14 h-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition"
                  />
                </a>
                <a href={project.github} target="blank">
                  <Image
                    src={assets.github}
                    alt=""
                    className=" border rounded-full p-2 border-black w-14 h-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] duration-500 hover:bg-lime-300 transition"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <a
        href=""
        className="w-max flex items-center justify-center gap-2 mx-auto my-15 py-3 px-10 hover:bg-lightHover duration-500 text-gray-700 border-[0.5px] border-gray-700 rounded-full"
      >
        Show more
        <Image alt="" src={assets.right_arrow_bold} className="w-4" />
      </a> */}
    </div>
  );
};

export default Work;
