'use client'
import React from "react";
import FactCounter from "./FactCounter";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <section className="w-full bg-[url('/cover-bg.jpg')] bg-cover bg-center md:bg-top mt-[65px] p-3">
      <div className="flex items-center max-w-7xl min-h-[40vh] mx-auto  ">
        <div className="flex- flex-col gap-20 items-center justify-between text-center  text-[#29334c] dark:text-white  ">
          <p className="text-3xl font-bold uppercase">
            Your Business {" "}
            <TypeAnimation
            sequence={[
              "Start",
              2000,
              "Growth",
              2000,
              
            ]}
            speed={50} 
            style={{ fontWeight: "bold", display: "inline" }}
            className="text-[#fd8115] uppercase "
            wrapper="span"
            repeat={Infinity} // Loop the animation
          /> is just one-step away
          </p>
          <p className="text-lg lg:text-xl p-3">
            Get Regulatory Assistance to Audit, Advisory, Taxation and also
            Expert Consultation to transform your business. Accelerate your
            start-up business or established enterprise with a technology driven
            platform with all the legal services.
          </p>
          <div className="hidden lg:block">
          <FactCounter />
          </div>
          <Link href="/contact">
            <div className="bg-[#fd8115] uppercase text-white rounded-md shadow-md inline-block p-3 cursor-pointer">
              Book Free Consultation
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;