import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
const descriptions = [
  "Forming a subsidiary foreign company in India involves establishing a separate legal entity that is controlled by a foreign parent company. This legal structure allows the parent company to conduct business operations and expand its presence in the Indian market.",
  "Professional Charges start at Rs 35,999/- Onwards",
  "(Duration – 10-15 Days)",
];

const faqs = [
  {
    question: "What is an Indian subsidiary company?",
    answer:
      "An Indian subsidiary company is a separate legal entity established by a foreign parent company in India. The parent company holds the majority of shares and controls the subsidiary's operations.",
  },
  {
    question: "What are the benefits of forming an Indian subsidiary company?",
    answer:
      "Some benefits include market access, local presence, limited liability, operational independence, and protection of parent company assets from subsidiary liabilities.",
  },
  {
    question: "Can the Indian subsidiary company have its own management team?",
    answer:
      "Yes, the Indian subsidiary can have its own management team and board of directors. It operates independently based on the parent company's strategies and corporate governance.",
  },
  {
    question: "Can a foreign company fully own an Indian subsidiary?",
    answer:
      "Yes, a foreign company can fully own an Indian subsidiary. Depending on the industry, there might be restrictions on the level of foreign ownership.",
  },
  {
    question:
      "Can the Indian subsidiary company conduct any business activity?",
    answer:
      "Yes, the subsidiary can engage in various business activities, subject to industry-specific regulations and compliance requirements.",
  },
  {
    question:
      "Can an Indian subsidiary company repatriate profits to the foreign parent company?",
    answer:
      "Yes, subject to applicable taxes and regulations, an Indian subsidiary can repatriate profits to the foreign parent company.",
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
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Subsidiary Company"
          parent="Startup"
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
                An Indian subsidiary company is established to facilitate the
                expansion of a foreign parent company’s operations in the Indian
                market. It enables the parent company to have a local presence,
                engage in business activities, and access opportunities in
                India. It is a type of entity that is controlled or owned by a
                foreign parent company. It operates as a separate legal entity
                in India, in which majority of the Shareholder is the foreign
                company having control over the business operation.
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
              Required Documents
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Required Documents For
              <span className="text-[#fd8115]"> Subsidiary Company </span>
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
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>
                      All the above documents of foreign directors and foreign
                      parent company, need to be apostilled and notarized from
                      the origin country
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
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Benefits
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits Of
              <span className="text-[#fd8115]"> Subsidiary Company </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10 my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-xl font-bold">Limited Liability</h1>
                  <p className="mt-3">
                    Limited Liability means being legally responsible for the
                    debts of the company. Thus, the liability of the members
                    will be limited only to the shares held by them. It means,
                    if the company cannot make its payment towards its debts in
                    the future, then the liability of members will only be to
                    the extent of the number of shares held by them.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Separate Legal Entity
                  </h1>
                  <p className="mt-3">
                    A company is an artificial person created by law; it is
                    considered as a legal person, which means it can enter into
                    contracts and own assets in its own name. Subsidiary Foreign
                    Company acts as a distinct legal entity from the parent
                    company.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-xl font-bold">Perpetual Existence</h1>
                  <p className="mt-3">
                    It means that a private limited can continue indefinitely.
                    The continuation of the business will not get affected by
                    the condition of its owners. Private limited can only be
                    dissolved by the corporation itself or the controlling
                    authority.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Better Accountability</h1>
                  <p className="mt-3">
                    Foreign Subsidiary company accounts are easily available at
                    the Ministry of Corporate Affairs (MCA) Portal. Anyone can
                    access them and this acts as a transparency to their work
                    and this helps in taking better investment decisions for
                    others.
                  </p>
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
            Compliances
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
            Compliances For
              <span className="text-[#fd8115]"> Subsidiary Company </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-2xl lg:text-3xl lg:mb-2 font-semibold">
                First-time Compliance:-
                </h2>
                <p>
                After company incorporation, it needs to comply with the following list of Compliances with MCA –
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
                    <p><strong>Commencement of Business (INC 20A) –</strong> This needs to be filed within 180 days of Company Formation, once the Bank account is opened and the share application money is transferred into that account.</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p><strong>Share Certificate Franking and Stamping –</strong> The company needs to issue a share certificate to all the shareholders and be stamped.</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p><strong>Auditor Appointment – </strong> This Needs to be done within 30 days of Company Formation after holding an Annual General Meeting.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
              srcSet="/compliance.svg"
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
