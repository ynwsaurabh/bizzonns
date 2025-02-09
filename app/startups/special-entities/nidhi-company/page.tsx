import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'NIDHI Company'
}
const descriptions = ["Starting at Rs 24,999 Onwards", "(Takes 15-20 Days)"];

const processItems = [
  {
    key: 0,
    title: "Digital Signature Certificate (DSC)",
    description:
      "Persons who will be acting as a director and shareholders of the proposed company, need to apply for DSC (Digital Signature Certificate). DSC is required to sign and validate all the documents, as the Registration Procedure is completely online.",
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
    title: "Name Approval",
    description:
      "- Proposed name needs to be approved by ROC. ROC will check the name availability on different parameters and then will issue the approval letter.",
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
    title: "Company Incorporation",
    description:
      "- Once the name is approved, the application needs to be made for the formation of the Company in Form Spice+ and the same is verified by a professional CA, CS or CMA.",
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
    title: "Drafting of MOA & AOA",
    description:
      "Along with Spice+, the MOA & AOA of the Company also need to be filed. A Memorandum of Association (MOA) defines the fundamental of the company and the Articles of Association (AOA) contains the rules & regulations of the Company.",
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
    title: "Incorporation Certificate",
    description:
      "After verification of Spice+, Roc will issue the Certificate of Incorporation. Incorporation Certificate gets issued within 3-4 working days.",
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
    title: "PAN and TAN Allotment",
    description:
      "With a certificate of incorporation pan and tan allotment also take place and a soft copy of pan and tan will be received by mail from the Department.",
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
    question: "How many people can form Nidhi Company?",
    answer:
      "Nidhi Company can be formed with a minimum of 3 Directors and 7 Shareholders. This is the minimum requirement to form a Nidhi Company. ",
  },
  {
    question: "Can Nidhi Companies conduct business in another state?",
    answer:
      "A Nidhi Company can only operate in the State where it is registered. Thus, it cannot conduct any activity in another State.",
  },
  {
    question: "What is the Objective of Nidhi Company?",
    answer:
      "Nidhi Company can be incorporated only with the objective of developing the habit of thrift and reserve funds among the members, it can also receive deposits and lend money to its members.",
  },
  {
    question: "Which Governing Body regulates the Nidhi Company?",
    answer:
      "Nidhi Companies are governed by Nidhi Rules, 2014. Nidhi Company is formed as a Public Limited Company by the Ministry of Corporate Affairs. Thus, Nidhi Company needs to comply with the rules of the Companies Act 2013 and Nidhi Rules, 2014.",
  },
  {
    question: "Can Nidhi Company issue loans to anyone?",
    answer:
      "Nidhi Company can issue Loans only to its members, it cannot issue loans to any person other than its members. Nidhi Company activities are restricted only to its members.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Nidhi Company registration"
          parent="license"
          href="/"
          descriptions={descriptions}
        />
      </div>
      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">

            <h2 className="text-[#fd8115] font-poppins text-3xl lg:text-4xl font-semibold">
              Overview
            </h2>
            <div className="font-medium text-gray-600 dark:text-gray-400">
              <p className="text-sm lg:text-base">
                Nidhi Company is a type of NBFC (Non-Banking Financial
                Corporation) with the difference that it is not directly
                regulated by the RBI. RBI has the power to issue directives to
                them related to their deposit acceptance activities. RBI has
                exempted the notified Nidhi’s from the core provisions of the
                RBI Act.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                Section 406 of the Companies Act 2013 and Companies (Nidhi
                Companies) Rules,2014 govern and regulate Nidhi Companies in
                India.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                The objective of incorporating a Nidhi Company is to encourage
                savings amongst its members and cultivate the habit of savings
                and thrift amongst its members, receiving deposits from, and
                lending to its members only for their mutual benefits, which
                complies with the rules made by the Central Government for
                regulation for such class of companies.
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

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Eligibility For
              <span className="text-[#fd8115]">
                {" "}
                Nidhi Company Registration{" "}
              </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  Before Incorporation
                </h2>
                <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>
                      Minimum 7 people – Seven people are required to start a
                      Nidhi Company. They should have a minimum of 3 Directors.
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
                    <p>
                      Minimum Capital – Nidhi Company shall be a Public Company
                      with a minimum capital requirement of Rs 5 Lakhs.
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
                    <p>
                      Issuance of shares of the nominal value of at least Rs 10
                      per share.
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
                    <p>
                      To allot a minimum of 10 equity shares or shares
                      equivalent to Rs 100 to each member.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  After Incorporation
                </h2>
                <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>
                      By end of 01st year, the minimum number of members or
                      shareholders must be 200.
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
                    <p>
                      {" "}
                      Net Owned Fund must be more than 10 lakhs. (Net Owned
                      funds means the aggregate of paid-up equity share capital
                      and free reserves as reduced by accumulated losses and
                      intangible assets)
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
                    <p>
                      {" "}
                      Ratio of Net Owned Funds to deposits should be more than
                      1:2.
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
                    <p>
                      {" "}
                      Unencumbered deposits should exceed 10 % of outstanding
                      deposits.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
              srcSet="/advantages.svg"
              sizes="(min-width: 1024px) 50%, 80%"
              width="855"
              height="698"
              loading="lazy"
              alt="Feature Image"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation For
              <span className="text-[#fd8115]">
                {" "}
                Nidhi Company Registration{" "}
              </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  PROMOTERS
                </h2>
                <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>PAN Card of all members</p>
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
                      Address Proof (Driving License, Passport, Aadhar Card)
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
                    <p>
                      Latest Residence Proof (Electricity Bill, Water Bill, Gas
                      Bill, and Bank Statement)
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
                    <p>Passport Size Photograph of all members</p>
                  </li>
                </ul>
              </div>
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  OFFICE PREMISES
                </h2>
                <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Latest Electricity Bill, Gas Bill of Office Premises</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p> NOC from Owner /Rent Agreement</p>
                  </li>
                </ul>
              </div>
            </div>
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

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
          </div>
        </div>
        <div className="font-medium text-[#606162] dark:text-gray-400">
          <div className="p-5  ">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Acceptance of Deposits
            </h2>
            <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
              <li className="flex items-start gap-[10px] md:text-[18px] ">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>
                  Nidhi can accept Deposits not exceeding 20 times of its Net
                  Owned Funds
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
                <p>
                  Nidhi Company shall be allowed to accept Deposits with the
                  following timeline  Fixed Deposit – 6 to 60 months 
                  Recurring Deposit – 12 to 60 months
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
                <p>
                  Interest rate on FD & RD shall be at par with RBI and on
                  Savings shall be 2% more than the rate allowed by nationalized
                  banks.
                </p>
              </li>
            </ul>
          </div>
          <div className="p-5  ">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Loans Issued
            </h2>
            <p className="md:text-[18px]">
              Nidhi company can issue Loans to its members based on the
              following. Maximum loan to a member can be issued
            </p>
            <ul className="flex flex-col gap-3 max-md:py-5 noListMargin">
              <li className="flex items-start gap-[10px] md:text-[18px] ">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>Total Amount less than 2 Cr – Rs 2 lakhs</p>
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
                  {" "}
                  Total amount of deposit more than 2 but less than 20 Cr – Rs
                  7.5 Lakhs
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
                <p> Total amount of deposit less than 50 Cr – Rs 12 Lakhs</p>
              </li>
              <li className="flex items-start gap-[10px] md:text-[18px]">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p> Total amount of deposit more than 50 Cr – Rs 15 lakhs</p>
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
                  {" "}
                  Interest Charges on any loan given by Nidhi company shall not
                  exceed 7.5% above the highest rate of interest offered on
                  deposits by Nidhi and shall be calculated on reducing balance
                  method.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
