import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <img
        style={{
          background:
            "linear-gradient(135deg, rgba(101, 47, 142, 0.88) 0%, rgba(125, 46, 185, 0.45) 100%)",
        }}
        className="absolute  inset-0 w-full h-full object-cover"
        src="/homebg.jpg"
        // style={{ opacity: 0.5 }}
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
        <h1 className="md:text-7xl slidein300 text-3xl lg:text-9xl font-bold text-center relative z-20 dark:text-white text-white">
          Welcome to
        </h1>
        <h1 className="md:text-7xl slidein500 text-3xl lg:text-9xl font-bold text-center relative z-20 dark:text-white text-white">
          Bizzonns
        </h1>
        <div className="relative slidein500 w-full max-w-[12rem] md:max-w-3xl h-16 md:h-32">
          {/* Gradients */}
          <div className="absolute inset-x-4 md:inset-x-12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mr-8 h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-4 md:inset-x-12 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mr-8 h-px w-3/4" />
          <div className="absolute inset-x-6 md:inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent mr-8 h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-6 md:inset-x-24 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent mr-8 h-px w-1/4" />

          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={2000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}

          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
        <p className="max-w-full slidein700 md:max-w-2xl text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-4 lg:mt-8 dark:text-neutral-200 text-white">
          Get Regulatory Assistance to Audit, Advisory, Taxation and also Expert
          Consultation to transform your business. Accelerate your start-up
          business or established enterprise with a technology driven platform
          with all the legal services.
        </p>
        <Link href="/contact">
          <div className="relative  cursor-pointer ml-10 mt-4 flex space-x-2 text-black items-center z-10 rounded-full animate-pulse bg-white py-2 px-4 ring-1 ring-white/10">
            <span>Get in touch</span>
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
