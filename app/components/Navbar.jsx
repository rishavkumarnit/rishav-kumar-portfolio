"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="-z-10 fixed top-0 right-0 w-11/12 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`flex w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 items-center justify-between z-50 ${
          isScroll ? "bg-white/40 opacity-90 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top" className="text-3xl w-52 font-semibold">
          Rishav Kumar
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white opacity-70">
          <li>
            <a href="#top" className="font-Ovo font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo font-semibold">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo font-semibold">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          {/* <button>
            <Image src={assets.moon_icon} className="w-6" alt="" />
          </button> */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 border border-gray-400"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt=""></Image>
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 -right-64 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              className="w-5 cursor-pointer"
              alt=""
            />
          </div>
          <li>
            <a
              href="#top"
              className="font-Ovo font-semibold"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-Ovo font-semibold"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="font-Ovo font-semibold"
              onClick={closeMenu}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-Ovo font-semibold"
              onClick={closeMenu}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
