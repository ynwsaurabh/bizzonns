import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'Limited Liability Company'
}
const faqs = [
  {
    question: "How many Partners are required to incorporate an LLP?",
    answer:
      "To incorporate an LLP, minimum of 2 Partners are required and there is no upper limit on the number of members. The Partners of the LLP must be above age 18 and should have a valid address in India. At least one of the partners of the LLP must be a Resident Indian. Partners of the LLP can be Individuals or Body Corporates. ",
  },
  {
    question: "What is LLP Agreement?",
    answer:
      "LLP Agreement is the written document that defines the rights, duties, and responsibilities of all the Partners towards each other and towards the business. It mentions the Business Activity which an LLP can carry on. It is a deed that gets signed by all the Partners of the LLP, and then the same gets stamped and notarized. ",
  },
  {
    question: "Can a person with Foreign Nationality can become a partner?",
    answer:
      "An NRI can become a partner of an LLP, the only requirement is that he should possess the valid Designated Partner Identification Number (DPIN) issued by the Ministry of Corporate Affairs. But the LLP must have one Indian Resident Partner.",
  },
  {
    question: "Is it possible to convert Partnership Firm into LLP?",
    answer:
      "By following the Provisions laid down in the LLP Act, 2016, an existing Partnership Firm can be easily converted into an LLP. One can convert their Partnership firm to LLP and can avail of all the benefits offered by an LLP to the business.",
  },
  {
    question: "Can LLP raise Funds from the General Public?",
    answer:
      "As LLP is not a Public Company, thus it cannot raise money from the General Public. However, it can raise the funds from Private Investors like Angel Investors, Venture capitalists, Private Equity Firms, etc., as LLP is a Registered Format, unlike a Partnership firm and investors find it attractive to invest in such a business. ",
  },
  {
    question: "Which is better, LLP or Partnership Firm?",
    answer:
      "As compared to Partnership Firm, LLP is a suitable format of business, as in this, the liability of the members is limited to the extent of their capital contribution, and the liability of the LLP doesn’t impact the Personal Property of the Partners. An LLP provides the advantages of both a Partnership Firm and a Company. ",
  },
  {
    question: "What is the Annual Compliance Cost of running an LLP?",
    answer:
      "Running an LLP is pocket friendly, as the number of Annual Compliances is much less than, compared to the Private Limited Company. LLP doesn’t need to hold General Meetings, AGMs or Statutory Meetings, the cost of documentation and procedural requirement is less in the case of an LLP.",
  },
];
const descriptions = [
  "This is the Most Suitable Business Format for Small and Medium Sized Enterprises.",
  "Starting at Rs 3999/- Onwards",
  "(Duration – 10-15 Days)",
];

const processItems = [
  {
    key: 0,
    title: "Digital Signature Certificate (DSC)",
    description:
      "Persons who will be acting as a Partner or Designated Partner of the proposed company, need to apply for DSC. It is issued by the government-affirmed offices. DSC is required to sign and validate all the documents, as the entire process of registration is online.",
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
    title: "Name Search and Approval",
    description:
      "Proposed name availability needs to be preliminary checked on MCA, and then Name Reservation needs to be filed under “RUN -LLP”. ROC will check the name availability on different parameters and then will issue the name approval letter.",
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
    title: "LLP Incorporation",
    description:
      "Form FiLLip needs to be filed for incorporation of LLP along with the DIN allotment and PAN TAN Application. This contains the Address of the Proposed LLP, Business Activities to be carried out, Details of Partners, and the Contribution by Partners.",
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
    title: "Incorporation, PAN & TAN Certificate",
    description:
      "Once Form FiLLip is approved; a Certificate of Incorporation is issued by the Ministry of Corporate Affairs along with the PAN and TAN Card of the LLP.",
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
    key: 4,
    title: "Filing of LLP Agreement",
    description:
      "An LLP Agreement is to be filed in Form No 3 within 30 days of the date of Incorporation. LLP Agreement needs to be printed on Stamp Paper, of the State where the registered office of the LLP is located.",
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
    title: "Opening Bank Current Account",
    description:
      "Persons who will be acting as a Partner or Designated Partner of the proposed company, need to apply for DSC. It is issued by the government-affirmed offices. DSC is required to sign and validate all the documents, as the entire process of registration is online.",
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
          title="Limited Liability Partnership (LLP)"
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
              Limited Liability Partnership, known as LLP is governed under the Limited Liability Partnership Act, 2008. LLP is the most efficient format of business as it has features of both a Partnership Firm and a Private Limited. LLP’s Compliances are less than the Company, leading entrepreneurs to focus on their business without worrying about compliances.  It is the format where the liability of the partners is limited and it has separate and perpetual legal existence.
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
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits Of
              <span className="text-[#fd8115]">
                {" "}
                Limited Liability Partnership (LLP){" "}
              </span>
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
                  <h1 className="text-xl font-bold">Lower Compliance</h1>
                  <p className="mt-3">
                    Annual Compliance of an LLP is less as compared to a Private
                    Limited Company. Thus, the annual charges of LLP Compliances
                    are less than others, making it a cost-effective type of
                    formation.
                  </p>
                </div>
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Easy to Start and Close</h1>
                  <p className="mt-3">
                    The Formation and Closure Process of an LLP is simple and
                    cost-effective, as compared to a Private Limited Company.
                    Thus, it is very effective for those start-ups who are
                    unsure about the future of their business, as it leads to
                    minimum cash outflow.
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
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation For
              <span className="text-[#fd8115]">
                {" "}
                Limited Liability Partnership (LLP){" "}
              </span>
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
                    <p>PAN Card of each partner</p>
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
                      Address Proof of each partner(Aadhar card, Voter id,
                      Passport, DL)
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
                    Latest Residence Proof (Electricity Bill, Gas bill, Mobile Bill)
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
                    <p>Latest Passport Size Photograph of each partner</p>
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
                    <p>
                      Latest Electricity Bill, Water Bill, and Gas bill of the
                      office premises
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
                    <p>NOC from owner/Rent Agreement</p>
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
            <h2 className="text-[#2a2a2a]  dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
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
      <ComparisonTable index={5} />
      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
