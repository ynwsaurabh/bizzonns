import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'UDYAM Registration'
}
const descriptions = [
  "The MSME sector includes micro, small, and medium-sized enterprises. The classification is based on investment in plant and machinery or equipment and turnover of the enterprises.",
  "A micro enterprise, where the investment in plant and machinery or equipment does not exceed one crore rupees and turnover does not exceed five crore rupees;",
  "A small enterprise, where the investment in plant and machinery or equipment does not exceed ten crore rupees and turnover does not exceed fifty crore rupees; and",
  "A medium enterprise, where the investment in plant and machinery or equipment does not exceed fifty crore rupees and turnover does not exceed two hundred and fifty crore rupees.",
];

const faqs = [
  {
    question: "What is UDYAM registration?",
    answer:
      "UDYAM registration is an online process introduced by the Indian government to register and obtain a unique Udyam Registration Number (URN) for micro, small, and medium enterprises (MSMEs)",
  },
  {
    question: "Who is eligible for UDYAM registration?",
    answer:
      "Any business entity that qualifies as a micro, small, or medium enterprise as per the investment and turnover criteria can apply for UDYAM registration.",
  },
  {
    question: "Is UDYAM registration mandatory for MSMEs? ",
    answer:
      "UDYAM registration is not mandatory but highly recommended for MSMEs to avail of various benefits, schemes, and support offered by the government.",
  },
  {
    question: "Can an individual entrepreneur apply for UDYAM registration?",
    answer:
      "Yes, individual entrepreneurs can apply for UDYAM registration using their Aadhaar card details.",
  },
  {
    question: "Is there any registration fee for UDYAM?",
    answer:
      "No, UDYAM registration is free of cost. There is no registration fee involved.",
  },
  {
    question: "Can I register multiple MSMEs under a single UDYAM registration?",
    answer:
      "No, each MSME should have its separate UDYAM registration and unique Udyam Registration Number (URN). ",
  },
  {
    question: " Is the Udyam Registration Certificate valid for a lifetime? ",
    answer:
      "Yes, the Udyam Registration Certificate is valid for the lifetime of the enterprise and does not require renewal.",
  },
  {
    question: "Can I migrate my existing Udyog Aadhaar registration to UDYAM? ",
    answer:
      "Yes, you can migrate your existing Udyog Aadhaar registration to UDYAM. The migration process is available on the UDYAM registration portal.",
  },
  {
    question: "Can a partnership firm apply for UDYAM registration?",
    answer:
      "Yes, partnership firms, as well as other business entities like proprietorships, LLPs, and private limited companies, can apply for UDYAM registration.",
  },
  {
    question: "Can I update my UDYAM registration details if there are changes in my business?",
    answer:
      "Yes, you can update certain details of your UDYAM registration, such as contact information or bank account details, whenever there are changes in your business.",
  },
  
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="UDYAM (MSME) registration,"
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
              Eligibility
            </p>

            <h2 className="text-[#fd8115] font-poppins text-3xl lg:text-4xl font-semibold">
              Eligibility
            </h2>
            <div className="font-medium text-gray-600 dark:text-gray-400">
              <p className="text-sm lg:text-base">
                Any business entity that falls under the definition of micro,
                small, or medium can apply for UDYAM registration. The
                eligibility criteria are based on investment in plant and
                machinery or equipment and turnover, as mentioned above. Only
                Aadhar is required for UDYAM Registration.
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
              BENEFITS
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits of
              <span className="text-[#fd8115]">
                {" "}
                UDYAM (MSME) registration{" "}
              </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Government Schemes and Incentives
                  </h1>
                  <p className="mt-3">
                    UDYAM registration enables MSMEs to access various
                    government schemes, incentives, subsidies, and support
                    programs. These schemes are specifically designed to promote
                    the growth and development of MSMEs in India.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Collateral-Free Loans
                  </h1>
                  <p className="mt-3">
                    Registered MSMEs can avail of collateral-free loans from
                    banks and financial institutions. UDYAM registration serves
                    as proof of the enterprise's authenticity and
                    creditworthiness, making it easier for MSMEs to secure
                    financial assistance.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Priority Sector Lending</h1>
                  <p className="mt-3">
                    Registered MSMEs are classified under the priority sector by
                    banks, which ensures easy and preferential access to credit
                    facilities and loans.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Protection against Delayed Payments
                  </h1>
                  <p className="mt-3">
                    The Micro, Small, and Medium Enterprises Development (MSMED)
                    Act provides protection to registered MSMEs against delayed
                    payments from buyers. MSMEs can seek legal remedies and
                    claim interest on delayed payments through the Act.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Ease of Doing Business</h1>
                  <p className="mt-3">
                    UDYAM registration simplifies various compliance
                    requirements for MSMEs, making it easier to conduct business
                    operations. It also facilitates participation in government
                    tenders and procurement processes.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Access to Technology and Skill Development
                  </h1>
                  <p className="mt-3">
                    UDYAM-registered MSMEs have increased opportunities to
                    participate in skill development programs and technology
                    upgradation initiatives offered by the government.
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

      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
