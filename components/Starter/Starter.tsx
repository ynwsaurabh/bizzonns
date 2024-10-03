import React from "react";
import ContactForm from "./ContactForm";

interface Item {
  href: string;
  text: string;
}

interface CompanyRegistrationProps {
  title: string;
  href: string;
  descriptions: string[];
  parent: string;
}

const CompanyRegistration: React.FC<CompanyRegistrationProps> = ({
  title,
  href,
  descriptions,
  parent,
}) => {
  return (
    <div className="mx-6 md:m-auto md:w-fit bg-[#F5FAFF] max-w-[90%] lg:max-w-[1000px] xl:max-w-[1150px] 2xl:max-w-[1400px] pt-8  pb-6 md:pb-10 relative">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 xl:justify-between">
        <div className="flex flex-col gap-4 md:!gap-6 min-w-0 flex-shrink">
          <div className="text-white">
            <div className="flex gap-2 overflow-hidden">
              <div className="flex gap-3">
                <a
                  className="override-anchor text-[16px] text-black underline underline-offset-2 whitespace-nowrap capitalize"
                  href="/"
                >
                  Home
                </a>
                <span className="text-black">&gt;</span>
              </div>
              <div className="flex gap-3 ">
                <a
                  className="override-anchor text-[16px] text-black underline underline-offset-2 whitespace-nowrap capitalize"
                  href={href}
                >
                  {parent}
                </a>
                <span className="text-black">&gt;</span>
              </div>
              <div className="flex gap-3 overflow-hidden">
                <p className="truncate text-[16px] capitalize font-bold text-black">
                  {title}
                </p>
              </div>
            </div>
          </div>
          <h1 className=" text-[28px] md:text-[36px] font-bold  leading-[1.2] md:leading-[52px]">
            {title}
          </h1>
          <ul className="flex flex-col gap-4 md:gap-3 max-md:py-5 noListMargin">
            {descriptions.map((desc, index) => (
              <li
                key={index}
                className="flex items-start gap-[10px] md:text-[18px] text-[#606162]"
              >
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default CompanyRegistration;
