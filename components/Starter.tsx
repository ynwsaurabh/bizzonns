import Image from "next/image";
import React from "react";

const Starter = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between bg-white px-5 my-5 items-center overflow-hidden ">
        <Image
          src="/pixelgrade.svg"
          width={0}
          height={0}
          alt="pixelgrade"
          className="w-auto h-auto"
          data-aos="fade-right"
        />
        <div className="lg:w-1/2 font-inter" data-aos="fade-left">
          <h1 className="text-gray-900 text-4xl fw-semibold lh-base">
            The unseen of spending three&nbsp; <br />
            years at <span className="text-green-600">Pixelgrade</span>
          </h1>
          <p className="text-gray-500 mt-3 text-base font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
    </div>
  );
};

export default Starter;
