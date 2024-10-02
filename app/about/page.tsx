import About from "@/components/About";
import CoreProcess from "@/components/CoreProcess";
import React from "react";

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
    <div className="mt-10 ">
      <About />
    </div>
      <CoreProcess />
      </div>
  );
};

export default page;
