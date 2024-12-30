import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";

const descriptions = [
  "It is applicable to drug or pharmaceuticals trading, manufacturing and distribution business. Bizzonns have experience of providing service for drug license in most of the States of India like Maharashtra, Karnataka and Delhi. ",
  "Drug license is valid for 5 years of tenure and need to renewed before 60 days of expiry.",
  "Professional Fess Starting at Rs 6,999/- Onwards",
];

const processItems = [
  {
    key: 0,
    title: "Login creation at FDA.",
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
    title: "Online Form filing and documents uploading at FDA.",
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
    title: "Payment of prescribed Govt fees and verification of fees.",
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
    title: "Office premises verification by drug inspector",
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
    title: "Online response to queries raised by inspector.",
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
    question: "What is a drug license? ",
    answer:
      "A drug license is a legal authorization granted by the regulatory authority in India to individuals or entities to carry out activities related to the sale, manufacture, distribution, or storage of drugs and pharmaceuticals.",
  },
  {
    question: "Who is responsible for issuing drug licenses in India?",
    answer:
      "In India, drug licenses are issued by the Central Drugs Standard Control Organization (CDSCO) at the central level and the Food and Drug Administration (FDA) of the concerned state at the state level.",
  },
  {
    question: "What are the different types of drug licenses in India?",
    answer:
      "There are several types of drug licenses, including: Retail Drug License, Wholesale Drug License, Manufacturing Drug License, Loan License, Restricted License.",
  },
  {
    question:
      "What are the eligibility criteria for obtaining a drug license? ",
    answer:
      "The eligibility criteria vary based on the type of drug license. Generally, applicants must: Be an Indian citizen or a registered entity in India., Have adequate premises and facilities as per the requirements., Employ a qualified pharmacist or a competent person as specified.",
  },
  {
    question: "How can I apply for a drug license in India?",
    answer:
      "To apply for a drug license, you need to: 1. Prepare the required documents, such as application forms, site plan, layout, etc., 2.Submit the Online application along with the required fee to the appropriate authority, 3. Undergo inspections and fulfil any additional requirements specified by the authority., 4. Once approved, you will receive the drug license.",
  },
  {
    question: "Is it necessary to renew a drug license?",
    answer:
      "Yes, drug licenses need to be renewed periodically. The duration of the license and the  renewal period is 5 years. It is important to ensure timely renewal to avoid any legal  complications.",
  },
  {
    question: "What are the penalties for operating without a drug license?",
    answer:
      "Operating without a valid drug license is a serious offense and can lead to legal consequences. Penalties may include fines, imprisonment, suspension, cancellation of license, or other actions as prescribed by the relevant drug control authority.",
  },
  {
    question:
      "What is timeline to get the Drug license after successful online application?",
    answer:
      "Complete procedure may take 25 to 30days of time after successful filing of online application and payment verification.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Drug License"
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
                Drug and cosmetic act 1940 regulate the Import, Manufacture,
                Distribution, Storage and Sale of drugs & cosmetic in India.
                Before commencing any commercial activities of drugs and
                cosmetics the business owner should obtain appropriate license
                from the food and drugs administration. The act is applicable to
                storage, transpiration, retail, wholesale, import and
                manufacturing activities of drugs and cosmetics. Business
                entities cannot even transport and store the drugs without
                taking drug license.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                This act includes all types of (Allopathy, Homeopathy, Siddha or
                Unani) Drugs and devices used as medicines for internal or
                external use or in the diagnosis, treatment, Mitigation and for
                prevention of diseases or disorder in human beings or in
                animals.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                Drug license is premise specific license and is required to each
                premises of an business entity where Medicine and medical
                devices are stored.
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Eligibility
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Eligibility for
              <span className="text-[#fd8115]"> Drug License </span>
            </h2>
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
                    <p>
                      Office premise should be more than 10sq/ Mtr or 110 Sq/ft.
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
                      For retail license “registered pharmacist” under state
                      pharmaceutical council is required.
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
                      For wholesale an experienced Competent person is required
                      having education qualification above 12th with 4 years of
                      Job experience or Graduate with 1 hour of job experience
                      in pharmaceuticals field.
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
                      Office premises should be commercial and in case of retail
                      it should be easily accessible by public.
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
                      For retail and wholesale both license at one premises,
                      then office premises should be more than 15sq mtr and
                      Registered Pharmacist is mandatory.
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
                      If office will open all 7 days in week, then minimum two
                      competent person/ registered Pharmacist is required.
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
                      If office will open for 24 hours, then minimum 3
                      pharmacist is required.
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

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Types
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Types of
              <span className="text-[#fd8115]"> Drug Licenses </span>
            </h2>
            <p>
              Drug license is categorised into three categories applicable as
              per the nature of business. Each license has specific requirements
              and rules & regulation also differs. Like retail drug license is
              applicable to those business entities who intends to sale drugs to
              end consumer.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    1. Wholesale drug license
                  </h1>
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
                        It is B2B sales, Whole sellers cannot sale medicine to
                        end consumer directly.
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
                        To get whole sale license business entity need to hire
                        competent person.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    2. Retail drug license{" "}
                  </h1>
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
                        Retailers are allowed to sale medicine to end consumers.
                        To sale medicine retailers requires only doctors’
                        prescription.
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
                      <p>Registered Pharmacist is required</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    3. Manufacturing drug license
                  </h1>
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
                        This license holder can manufacture medicine and can
                        sale medicine to whole seller or retailers both. But
                        cannot sale to end consumers.
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
                        Technical staff is required who have education in field
                        of chemistry
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
                        License issued to a business that manufactures drugs
                        inclusive of allopathic/homoeopathy medicines
                      </p>
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
              <span className="text-[#fd8115]"> Drug License </span>
            </h2>
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
                    <p>
                      Site plan and key plan of office premises (In some states
                      it should be attested by architect)
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
                      Commercial Electricity bill and rent agreement of office
                      premises valid for five years
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
                    <p>Noc from the owner of office premises</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Identity and address proof of applicant</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Company formation documents</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Invoice of cold storage</p>
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
                      Documents of Registered Pharmacist for retail and of
                      Competent person for whole sale
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
      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
        </div>
        <div className="font-medium text-[#606162] dark:text-gray-400">
          <div className="p-5  ">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Registered Pharmacist ( For Retail license)
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
                <p>Certificate of pharmaceutical council of state.</p>
              </li>
              <li className="flex items-start gap-[10px] md:text-[18px]">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>B.Pharma/ D.Pharma certificate/ degree.</p>
              </li>
              <li className="flex items-start gap-[10px] md:text-[18px] ">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>Photo, Pan card and aadhar card</p>
              </li>
              <li className="flex items-start gap-[10px] md:text-[18px] ">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p>Bio data in prescribed format by drug dept</p>
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
                  Applicant can hire registered Pharmacist (Not mandatory for
                  applicant to have the Pharmacy background education
                  qualification)
                </p>
              </li>
            </ul>
          </div>
          <div className="p-5  ">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
              Competent person (For Wholesale licenses)
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
                <p>Education qualification certificate</p>
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
                  Experience certificate in case 12th pass then 4 years and if
                  graduate than 1 years of drug sales and purchase
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
                <p> Photo, Pan card and aadhar card</p>
              </li>
              <li className="flex items-start gap-[10px] md:text-[18px]">
                <img
                  alt="blue tick"
                  className="mt-[3px]"
                  src="/blue-tick.svg"
                  width="20"
                  height="20"
                />
                <p> Applicant can hire competent person</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Process processItems={processItems} />

      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
