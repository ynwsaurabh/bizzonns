import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'Food License'
}
const descriptions = [
  "It is applicable to all business into trading, manufacturing and Packaging of Food products",
  "Bizzonns have experience of providing service for Food license in most of the States of India like Maharashtra, Karnataka and Delhi. ",
  "At a time, applicant can apply license from 1 year and maximum up to 5years. License need to renewed 45 days before expiry.",
  "Professional Fess Starting at Rs 1,999/- Onwards",
];

const processItems = [
  {
    key: 0,
    title: "Online login creation at FSSAI.",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      </svg>
    ),
  },
  {
    key: 1,
    title: "Filing of application with documentation.",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    key: 2,
    title: "Fees Payment and verification",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    key: 3,
    title:
      "Document scrutiny at Department level (No physical visit will be done)",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
  },
  {
    key: 4,
    title:
      "Query response (In case discrepancy in documents query will be raised)",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
      </svg>
    ),
  },
  {
    key: 5,
    title: "License Issue/reject.",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="prome-he15p0"
      >
        <path d="M16 10h2" />
        <path d="M16 14h2" />
        <path d="M6.17 15a3 3 0 0 1 5.66 0" />
        <circle cx="9" cy="11" r="2" />
        <rect x="2" y="5" width="20" height="14" rx="2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What is a food license? ",
    answer:
      "A food license, also known as a food business operator (FBO) license, is a legal authorization required to carry out food-related businesses in India. It ensures that the food products or services provided to consumers meet the quality and safety standards set by the Food Safety and Standards Authority of India (FSSAI).",
  },
  {
    question: "Who needs a food license in India?",
    answer:
      "Any individual or entity involved in food-related activities such as manufacturing, processing, packaging, storing, distributing, or selling food products needs to obtain a food license. This includes restaurants, hotels, food processors, caterers, food importers, food transporters, food retailers, and e-commerce food platforms.",
  },
  {
    question: "Is it possible to modify or update a food license?",
    answer:
      "Yes, it is possible to modify or update a food license. In case of any changes in the business operations, contact details, or products, the licensee should inform the FSSAI and apply for modifications or updates to the existing license.",
  },
  {
    question:
      "Are there any specific requirements for labeling food products? ",
    answer:
      "Yes, food products need to adhere to specific labelling requirements as per the Food Safety and Standards (Packaging and Labelling) Regulations. These include information such as the product name, list of ingredients, nutritional information, FSSAI license number, manufacturing and expiry dates, vegetarian/non-vegetarian logo, etc",
  },
  {
    question: " Food license application is online or offline?",
    answer:
      "Food license application is complete online process all documents and form submission is online via FOSCOS site for each state. There is no physical inspection is done by inspector between the license procedure.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Food License"
          parent="license"
          href="/"
          descriptions={descriptions}
        />
      </div>
      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Overview
            </p>

            <h2 className="text-[#fd8115] font-poppins text-3xl lg:text-4xl font-semibold">
              Overview
            </h2>
            <div className="font-medium text-gray-600 dark:text-gray-400">
              <p className="text-sm lg:text-base">
                Food license is issued by Food safety & Standard Authority of
                India (FSSAI) which comes under Ministry of health and family
                welfare. Fssai license is compulsory for all food business small
                or big. All food vendors need to follow the strict guidelines of
                food department failing to which may attract adverse
                consequences.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                Food license is 14-digit license which is mandatory for FBO to
                mention on food package. Food license is categorized into three
                categories depending upon production, turnover and type of
                trading.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
              srcSet="/overview.svg"
              sizes="(min-width: 1024px) 50%, 80%"
              width="855"
              height="698"
              loading="lazy"
              alt="Feature Image"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Types
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Types of
              <span className="text-[#fd8115]"> Food Licenses </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">1. Basic registration</h1>
                  <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                    <li className="flex items-start gap-[10px] md:text-[18px] mt-2 ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>
                        FBO which have turnover below 12 lac Per annum and not
                        selling their product online is eligible for this.
                      </p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px] ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Govt fees is Rs 100/- per year</p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">2. State license </h1>
                  <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                    <li className="flex items-start gap-[10px] md:text-[18px] mt-2 ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>
                        State license is applicable to those FBOs who want to
                        sale in a particular state and their turnover is above
                        12 lac.
                      </p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px] ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Govt fees is Rs 2000/-</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">3. Central license</h1>
                  <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                    <li className="flex items-start gap-[10px] md:text-[18px] mt-2 ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>
                        It is applicable to FBOs who want to do import and
                        export business, E-commerce sale of food and want to
                        sale their products Pan India.
                      </p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px] ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Govt fees is Rs 7500/- per year</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-[50%]">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full"
              srcSet="/advantages.svg"
              sizes="(min-width: 1024px) 50%, 80%"
              width="700"
              height="700"
              loading="lazy"
              alt="Feature Image"
            />
          </div>
        </div>
      </section>

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Documentation
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation of
              <span className="text-[#fd8115]"> Food License </span>
            </h2>
            <p>
              In food license documents requirement depend upon nature of
              business and type of license. There are few common documents which
              are required for all type of food license mentioned below: -
            </p>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Id proof and address proof of applicant</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>
                      Electricity bill and rent agreement of office premises
                    </p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Noc from the owner of premises </p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Declaration of FSMS </p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Business formation documents</p>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Above are the common documents to know more on documents feel free
              to contact us or write us with your exact business activity and
              our team will revert back to you with type of requirement and
              exact documentation.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
              srcSet="/documents.svg"
              sizes="(min-width: 1024px) 50%, 80%"
              width="855"
              height="698"
              loading="lazy"
              alt="Feature Image"
            />
          </div>
        </div>
      </section>
      <Process processItems={processItems} />

      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
