import Faq from "@/components/Faq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import Testimonials from "@/components/Testimonials";
import React from "react";
const descriptions = [
  "This is the most suitable for startups looking for Investor Funding and Growing Businesses.",
  "Our Team at Bizzonns consists of qualified and vast experienced personnel, who after attending to your requirements, will recommend you the best suitable form for your business.",
  "Professional Charges start at Rs 4,999/- Onwards",
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
          title="Private Limited Company"
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
                Private Limited is a popular and oldest format of business in
                India. It is the most preferred format for start-ups as the
                regulation and law of private limited safeguards the interests
                of promoters, individuals, and the business connected with the
                Company, directly or indirectly. Earlier it was regulated
                through the Companies Act 1956 and now the Companies Act 2013 is
                in practice. Private Limited is a reliable and most favored
                format among angel investors, capital ventures, and other forms
                of investors.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                While opting for a business format, entrepreneurs find it
                difficult to choose the best suitable format as per their
                requirement, whether they should go for Proprietorship,
                Partnership, LLP, or Company. The fact is, that every business
                form has its own advantages and disadvantages. Each business
                form is suitable in its own way, depending upon the requirements
                of the business and other factors. The first step is to opt for
                the most efficient and suitable format before establishing and
                executing any business plan.
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
              Benefits
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits Of
              <span className="text-[#fd8115]"> Private Limited Company </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl mb-5">
                  <h1 className="text-xl font-bold">Limited Liability</h1>
                  <p className="mt-3">
                    In a Limited Liability Partnership (LLP), partners are only
                    liable for debts up to their capital contributions,
                    protecting personal assets. One partner is not accountable
                    for another's actions, unlike in traditional partnerships.
                  </p>
                </div>
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Separate Legal Entity
                  </h1>
                  <p className="mt-3">
                    An LLP Is an artificial person created by law. It is
                    governed under the LLP Act, 2008. Thus, it creates a
                    separate legal identity of itself, from its partners, and
                    provides immunity to the owner’s personal property or assets
                    in case of bankruptcy.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl mb-5 rounded-2xl">
                  <h1 className="text-xl font-bold">Ease in Fund Raising</h1>
                  <p className="mt-3">
                    Investors prefer Private Limited Companies for investing
                    their money, due to high transparency, and ease in transfer
                    of ownership, as compared to others. Private limited can
                    raise funds through Debt and Equity both from investors and
                    financial institutions.
                  </p>
                </div>
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Easy to Incorporate</h1>
                  <p className="mt-3">
                    With the launch of MCA Version 3, now company formation is
                    easy and fast in India. It is 100% online, has Basic KYC
                    Documentation, and with minimum time duration. Closure of
                    the company is also easy and online with minimum
                    documentation.
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

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Documentation
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation For
              <span className="text-[#fd8115]"> Private Limited Company </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl lg:mb-2 font-semibold">
                  Partners
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
                    <p>Longitude and latitude of office address</p>
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
                      Latest Electricity Bill, Gas Bill, Water Bill and Mobile
                      postpaid bill (Any one).
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
                      No Objection Certificate (NOC) from Office address owner
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

      <Process processItems={processItems} />
      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 mb-10">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              COMPARISON
            </p>

            <h2 className="text-[#2a2a2a]  dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Comparison
              <span className="text-[#fd8115]"> Compliances </span>
            </h2>
            <div className="font-medium text-gray-600 dark:text-gray-400">
              <p className="text-sm lg:text-base mt-3 text-center">
                <strong>
                  COMPARISON WITH OTHER FORMATS TO CHOOSE THE BEST SUITABLE FOR
                  YOUR BUSINESS
                </strong>
                <br />
                <strong>
                  LLP vs. Private Limited Company vs. Partnership Firm vs. OPC
                  Company vs. Proprietorship Firm
                </strong>
              </p>
            </div>
            {/* <div className="mt-10">
              <ComparisonTable />
            </div> */}
          </div>
        </div>
      </section>
      <ComparisonTable index={6} />
      <Faq />
    </div>
  );
};

export default page;
