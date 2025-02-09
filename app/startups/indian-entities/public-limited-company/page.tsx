import Faq from "@/components/Faq";
import CompanyRegistration from "@/components/Starter/Starter";
import React from "react";
import { Metadata } from "next";
import Process from "@/components/Process";
import CustomFaq from "@/components/Faq/CustomFaq";
import ComplianceTable from "@/components/CompliancesTable";
export const metadata: Metadata = {
  title: "Public Limited Company",
};
const faqs = [
  {
    question: "Can a Public Limited Company trade its shares on the stock exchange?",
    answer:
      "Yes, a public limited company can list its shares on a recognized stock exchange in India, enabling the trading of its shares by the public.",
  },
  {
    question: "Is it possible to convert a Public Limited company to Private Limited?",
    answer:
      "Yes, conversion of a Public Limited to a Private Limited company is possible by following the prescribed procedures mentioned in the Companies Act 2013.",
  },
  {
    question: "Is there a minimum capital required to form a Public Limited Company?",
    answer:
      "Yes, a minimum of 5 Lakhs Capital is required to form a Public Limited Company.",
  },
  {
    question: "Can a Public Limited Company have foreign shareholders or directors?",
    answer:
      "Yes, a Public Limited Company in India can have foreign shareholders and directors subject to compliance with the Foreign Direct Investment (FDI) guidelines and other relevant regulations.",
  },
  {
    question: "Can a Public Limited Company be listed on international stock exchanges?",
    answer:
      "Yes, subject to compliance with the regulations of the respective international stock exchange, a Public Limited Company can be listed on international stock exchanges.",
  },
  {
    question: "What are the tax implications for a Public Limited Company and its shareholders?",
    answer:
      "Public Limited Companies are subject to corporate income tax, while shareholders are liable for tax on dividends and capital gains as per the applicable tax laws.",
  },
  {
    question: "How can I dissolve or wind up a Public Limited Company in India?",
    answer:
      "To dissolve a Public Limited Company, you need to follow the prescribed procedures, including obtaining shareholder approval, appointing a liquidator, settling liabilities, and distributing remaining assets to shareholders.",
  },
];

const descriptions = [
  "A public limited company is a publicly traded entity that offers its shares to the public through a stock exchange or over-the-counter market.",
  "Professional Charges start at Rs 9,999/- Onwards",
  "(Duration – 10-15 Days)",
];

const data = [
  {
    form: "ADT 1",
    dueDate: "Within 15 days of AGM",
    particulars: "For appointment of company auditor (CA).",
  },
  {
    form: "AOC 4",
    dueDate: "Within 30 days of AGM",
    particulars:
      "For financial report to ROC (Balance sheet and Profit/loss statement).",
  },
  {
    form: "MGT 7",
    dueDate: "Within 60 days of AGM",
    particulars:
      "For annual reporting of company to ROC related to share holders and other matters of company.",
  },
  {
    form: "DPT 3",
    dueDate: "30th June",
    particulars: "To report existing loan on Company.",
  },
  {
    form: "DIR 3",
    dueDate: "30th September",
    particulars: "For Director KYC.",
  },
  {
    form: "ITR",
    dueDate: "30th September",
    particulars: "For Income tax return of the company.",
  },
];

const processItems = [
  {
    key: 0,
    title: "Digital Signature Certificate (DSC)",
    description:
      "Persons who will be acting as a director and shareholders of the proposed company, need to apply for DSC. It is required to sign and validate all the documents.",
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
      "Proposed name needs to be approved by ROC. ROC will check the name availability on different parameters and then will issue the approval letter.",
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
      "Once the name is approved, the application needs to be made for the formation of the Company in Form Spice+ and the same is verified by a professional CA, CS or CMA.",
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
      "Along with Spice+, the MOA & AOA of the Company also need to be filed. A Memorandum of Association (MOA) defines the fundamentals of the company and the Articles of Association (AOA) contains the rules & regulations of the Company.",
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
    title: "PAN & TAN Allotment",
    description:
      "With a certificate of incorporation pan and tan allotment will be made and a soft copy of pan and tan will be received by mail from the Department.",
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
  {
    key: 6,
    title: "Opening Bank Current Account",
    description:
      "After receiving COI and other relevant documents, Private Limited can open the bank’s current account in the name of the Company.",
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
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    ),
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Public Limited Company"
          parent="Startup"
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
                A Public Limited Company is governed by the Companies Act 2013.
                A Public Limited company can issue shares to the public at large
                and raise money from the market. Its Stock can be acquired
                either by Initial Public Offering (IPO) or by stock trading.
                There are strict rules & regulations formulated by the Companies
                Act for Public Limited Companies. Unlike a private limited
                company, which restricts the transfer of shares and limits the
                number of shareholders, a public limited company offers its
                shares to the general public, allowing anyone to become a
                shareholder.
              </p>
              <div className="font-medium text-[#606162] dark:text-gray-400">
                <div className="p-5  ">
                  Basic Requirements to Open Public Limited Company
                  <ul className="flex flex-col gap-4 md:gap-3 max-md:py-5 noListMargin">
                    <li className="flex items-start gap-[10px] md:text-[18px] ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Minimum 7 Shareholders</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Minimum 3 Directors</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Minimum Paid up Capital of Rs 5 Lakhs</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px] text-[#606162]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>
                        Compulsory for a Public Company to add the word
                        “Limited” at the end of its name
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Required Documents For
              <span className="text-[#fd8115]"> Public Limited Company </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  Promoters
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
                    <p>PAN Card of each Director & Shareholder</p>
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
                  <li className="flex items-start gap-[10px] md:text-[18px]">
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
                    <p>
                      Passport Size Photograph of each Director & Shareholder
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  Office Premises
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
                    <p>NOC from Owner /Rent Agreement</p>
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits Of
              <span className="text-[#fd8115]"> Public Limited Company </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-full px-4 lg:px-10 my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-xl font-bold">
                    Transferability and Exit Options
                  </h1>
                  <p className="mt-3">
                    Public limited companies provide better liquidity to
                    shareholders as their shares can be freely traded on stock
                    exchanges. This makes it easier for shareholders to exit
                    their investments by selling their shares to interested
                    buyers.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-[19px] font-bold">
                    Greater Investor Confidence
                  </h1>
                  <p className="mt-3">
                    Public limited companies often enjoy higher investor
                    confidence compared to other forms of business entities.
                    Transparency in financial reporting, regulatory oversight,
                    and the availability of information allows investors to make
                    informed investment decisions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-[19px] font-bold">Access to Capital</h1>
                  <p className="mt-3">
                    Public limited companies have the opportunity to raise
                    significant capital by issuing shares to the public. They
                    can go for initial public offerings (IPOs) or subsequent
                    offerings to raise funds for expansion, research, and
                    development, acquisitions, or other business activities.
                    Public companies often find it easier to attract investments
                    from institutional investors and the general public.ows
                    investors to make informed investment decisions.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Enhanced Governance and Regulatory Compliance
                  </h1>
                  <p className="mt-3">
                    Public limited companies are subject to stricter governance
                    and regulatory requirements. This fosters a culture of
                    transparency, accountability, and ethical practices within
                    the organization. Complying with regulations helps build
                    investor confidence and trust, which can lead to increased
                    investment and business opportunities.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-xl font-bold">Minimum Requirements</h1>
                  <p className="mt-3">
                    A public limited company must have at least seven
                    shareholders, and there is no maximum limit on the number of
                    shareholders. Additionally, it must have a minimum of three
                    directors, with at least one director being a resident of
                    India.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Succession Planning and Perpetual Existence
                  </h1>
                  <p className="mt-3">
                    Public limited companies have perpetual existence, meaning
                    they can continue to operate even if the shareholders
                    change. This provides stability and continuity to the
                    business and facilitates succession planning. Public limited
                    companies can outlast the involvement of their founders and
                    continue to thrive under new leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Process processItems={processItems} />
      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              <span className="text-[#fd8115]"> Compliances </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-2xl lg:text-3xl lg:mb-2 font-semibold">
                  First-time Compliance
                </h2>
                <p className="md:text-[18px] mb-5">
                  After company incorporation, it needs to comply with the
                  following list of Compliances with MCA
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
                    <p>
                      Commencement of Business (INC 20A) - This needs to be
                      filed within 180 days of Company Formation, once the Bank
                      account is opened and the share application money is
                      trans-ferred into that account.
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
                      Share Certificate Franking and Stamping – Company needs to
                      issue a share certificate to all the shareholders and
                      needs to be stamped.
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
                      Auditor Appointment – This Needs to be done within 30 days
                      of Company Formation after holding an Annual General
                      Meeting.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-2xl lg:text-3xl lg:mb-2 font-semibold">
                  Yearly Compliances
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
                      All company Pvt ltd, OPC, Public limited are bound to file
                      ROC and Income Tax compliance after end of each financial
                      year i.e 31st March within prescribed timeline mentioned
                      in Income tax and companies act. Major compliance forms
                      details and due dates are mentioned below:-
                    </p>
                  </li>
                </ul>
                <ComplianceTable data={data} />
                <p className="text-[16px] my-5">
                  <b>Note: </b>Annual general meeting (AGM) need to be held
                  between company officials and Shareholders by and before 6
                  month of the end of each Financial Year.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white w-[98%] lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              <span className="text-[#fd8115]"> Comparision </span>
            </h2>
            <div className="font-medium text-[#2a2a2a] dark:text-gray-400">
              <div className="">
                <h1 className="text-2xl font-bold mb-4">
                  Private Limited Company vs Public Limited Company
                </h1>
                <div className="overflow-x-auto shadow-lg rounded-md">
                  <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                          Private Limited Company
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium">
                          Public Limited Company
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Ownership
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Owned by a small group of shareholders
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Owned by numerous shareholders
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Number of Shareholders
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Limited to a maximum number of shareholders
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Unlimited number of shareholders
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Share Transfer
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Restricted transfer of shares among shareholders
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Freely transferable shares
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Minimum Capital Requirement
                        </td>
                        <td className="px-6 py-3 text-sm">
                          No minimum capital requirement
                        </td>
                        <td className="px-6 py-3 text-sm">
                          The minimum capital requirement may be mandatory
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Public Offering of Shares
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Shares cannot be publicly traded or offered to the
                          public
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Shares can be publicly traded or offered to the public
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Disclosure Requirements
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Less stringent disclosure requirements
                        </td>
                        <td className="px-6 py-3 text-sm">
                          More stringent disclosure requirements
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Board Composition
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Flexible in terms of board composition
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Often requires independent directors on the board
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Decision-Making
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Easier decision-making process among shareholders
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Decision-making involves more shareholder involvement
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Legal Formalities
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Fewer legal formalities
                        </td>
                        <td className="px-6 py-3 text-sm">
                          More legal formalities and regulatory compliance
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-3 text-sm font-medium">
                          Confidentiality
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Information can be kept private and confidential
                        </td>
                        <td className="px-6 py-3 text-sm">
                          Information is subject to public disclosure
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
