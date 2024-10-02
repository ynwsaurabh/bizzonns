"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-[rgb(0,0,0)] h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/file.mp4" // Replace with your video file
        autoPlay
        loop
        muted
        style={{ opacity: 0.5 }} // Adjust opacity as needed
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full p-4 md:p-8 lg:p-12 text-left">
        {/* <Image
          src="/agro1.png"
          alt="logo"
          width={50}
          loading="lazy"
          height={50}
        /> */}
        <h1 className="md:text-7xl slidein300 text-5xl lg:text-9xl font-bold text-center relative z-20 dark:text-white text-white">
          Welcome to
        </h1>
        <h1 className="md:text-7xl slidein500 text-5xl lg:text-9xl font-bold text-center relative z-20 dark:text-white text-white">
          Bizzoons
        </h1>
        <div className="relative slidein500 w-full max-w-[12rem] md:max-w-3xl h-auto">
          {/* Gradients */}
          <div className="absolute inset-x-4 md:inset-x-12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mr-8 h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-4 md:inset-x-12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mr-8 h-px w-3/4" />
          <div className="absolute inset-x-6 md:inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent mr-8 h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-6 md:inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent mr-8 h-px w-1/4" />
        </div>
        <div className="text-center text-[2rem] md:text-[4rem] text-blue-950 dark:text-[#73b66b] m-5">
          <TypeAnimation
            sequence={[
              "Trusted Accounting",
              2000,
              "Expert Tax Solutions",
              2000,
              "Grow Your Business",
              2000,
              "Elevate Your Success",
              2000,
              "Get Started Today!",
              2000,
            ]}
            speed={50} // Typing speed
            style={{ fontWeight: "bold", display: "block" }}
            wrapper="h2"
            repeat={Infinity} // Loop the animation
          />
        </div>
        <p className="max-w-full slidein700 md:max-w-2xl text-sm md:text-base lg:text-lg xl:text-xl dark:text-neutral-200 text-white">
          Get Regulatory Assistance to Audit, Advisory, Taxation and also Expert
          Consultation to transform your business. Accelerate your start-up
          business or established enterprise with a technology driven platform
          with all the legal services.
        </p>
        <Link href="/contact">
          <div className="relative  cursor-pointer mt-4 flex space-x-2 text-white dark:text-black items-center z-10 rounded-full animate-pulse bg-black dark:bg-white py-2 px-4 ring-1 ring-white/10">
            <span>Book Free Consultation </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
                opacity="1"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
