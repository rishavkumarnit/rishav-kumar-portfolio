"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", `${process.env.NEXT_PUBLIC_ACCESS_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div
      style={{ backgroundImage: `url("/footer-bg-color.png")` }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-15"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-xl mx-auto mt-5 mb-2 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            id=""
            className="p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            id=""
            className="p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows={4}
          placeholder="Enter your message"
          required
          id=""
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md  bg-white mb-6"
        ></textarea>
        <button
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500  cursor-pointer"
          type="submit"
        >
          Submit
          <Image alt="" src={assets.right_arrow_white} className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
