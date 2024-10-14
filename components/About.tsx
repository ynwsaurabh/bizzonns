"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
const About = () => {
  useEffect(() =>{
    AOS.init({
      offset: 80,
      duration: 1000,
      // once: true,
    });
  }),[]
  return (
    <div id="aboutus" className="w-full h-full overflow-hidden  ">
      <div className="max-w-7xl md:max-w-[85%] mx-auto antialiased py-4 md:py-8 px-8 ">
        <div className="mt-4 text-xs z-10 w-fit bg-white dark:bg-gray-900 text-neutral-700 dark:text-neutral-300 rounded-full shadow-xl px-4 py-0.5 border border-neutral-100 dark:border-gray-700 relative">
          <span>#1 CONSULTING COMPANY</span>
          <div className="absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full"></div>
        </div>
        <h1 data-aos="fade-down" className="text-2xl md:text-4xl text-neutral-800 dark:text-white mt-4 text-left">
          About Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:h-auto relative max-w-7xl md:max-w-[85%] mx-auto">
        {/* Text Section */}
        <div className="flex-1 max-w-7xl mt-5 mx-auto px-4 md:px-8 relative">
          <div className="text-left" data-aos="fade-right">

            <h2 className="text-xl md:text-4xl font-bold text-black dark:text-white">
              Excellence In Consulting
            </h2>
            <p className="text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-2xl mt-2 mx-auto md:mx-0">
              Bizzoons has evolved as a reliable company that provides simple
              and flexible financial advice. For the last 10 years, we have
              tried to provide “Relevant, Reliable, and Relationship” based
              solutions to our customers. To provide the finest registration
              taxation services to customers, the Firm has solid assistance from
              all types of resources. Our organization includes specialists with
              diverse educational backgrounds in commerce, law, and accounting.
              Our registration services include Private Limited Companies, GST,
              Trade Mark, Logo, Non-Governmental Organizations, and Societies.
              Understanding the client’s demand, the client’s Business Model and
              organizational structure, assessing the current state of
              compliance with the law, and establishing the Scope of Our
              Services are all part of our methodology.
            </p>
            <Link href="/about">
              <div className="relative slidein900 cursor-pointer my-4 space-x-2 dark:text-[#000] hover:bg-gray-600 hover:text-[#fff] dark:hover:bg-[#000] dark:hover:text-white text-white items-center z-10 rounded-full bg-[rgb(0,0,0)] dark:bg-white py-2 px-4 ring-1 ring-white/10 inline-flex">
                <span>Explore more</span>
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
        <div data-aos="fade-left" className="relative flex-1 px-7 flex items-center justify-center lg:mb-0 lg:w-1/2 bg-[url('/about.gif')] bg-cover bg-center ">
          <img
            className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
            srcSet="/about1.png"
            sizes="(min-width: 1024px) 50%, 80%"
            width="855"
            height="698"
            loading="lazy"
            alt="Feature Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
