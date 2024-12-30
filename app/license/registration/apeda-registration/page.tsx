import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";

const descriptions = [
  "APEDA registration is a mandatory process for any individual or organization involved in the export of scheduled agricultural commodities from India",
  "APEDA Registration is valid for a period of Five years. Once Expired, it needs to be renewed by submitting the necessary documents and paying renewal fees. "
];

const faqs = [
  {
    question: " What are the product categories covered by APEDA?",
    answer:
      "APEDA covers products such as fruits, vegetables, meat and meat products, poultry and poultry products, dairy products, honey, cocoa products, cereals, pulses, and more. The complete list can be found on APEDA's official website.",
  },
  {
    question: "Can a partnership firm register with APEDA?",
    answer:
      "Yes, a partnership firm can register with APEDA. The partnership deed and other necessary documents must be provided during the registration process.",
  },
  {
    question: "Is APEDA registration mandatory? ",
    answer:
      "APEDA registration is mandatory for exporters dealing with agricultural and processed food products covered under APEDA's product categories.",
  },
  {
    question: "Can a foreign company register with APEDA?",
    answer:
      " No, APEDA registration is available only for Indian exporters and Indian companies",
  },
  {
    question: "Can APEDA registration be cancelled or revoked? ",
    answer:
      "Yes, APEDA registration can be cancelled or revoked if the registered member fails to comply with the regulations or commits any violations as specified by APEDA.",
  },
  
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="APEDA registration"
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
                APEDA registration is a mandatory process for any individual or
                organization involved in the export of scheduled agricultural
                commodities from India. Scheduled products refer to specific
                agricultural products mentioned in the APEDA Act, such as
                fruits, vegetables, meat and meat products, poultry and poultry
                products, dairy products, honey, cereals, pulses, and many more.
                APEDA registration is a one-time process, and once obtained, it
                remains valid until it is suspended or cancelled.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                Exporters dealing with agricultural and processed food products
                included in APEDA's product categories need to register with
                APEDA.
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
              <span className="text-[#fd8115]"> APEDA registration </span>
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
                    Market Access and Global Recognition
                  </h1>
                  <p className="mt-3">
                    APEDA registration provides exporters with market access to
                    various countries across the world. Many countries have
                    specific import requirements and regulations for
                    agricultural products, and APEDA plays a crucial role in
                    negotiating and maintaining harmonious trade relations with
                    these countries. With APEDA registration, exporters gain
                    global recognition and credibility, enhancing their chances
                    of tapping into international markets.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Quality Assurance and Standardization
                  </h1>
                  <p className="mt-3">
                    APEDA ensures that the agricultural commodities exported
                    from India meet international quality and safety standards.
                    It formulates guidelines and quality parameters for various
                    products and provides exporters with the necessary
                    assistance and training to comply with these standards.
                    APEDA's emphasis on quality assurance and standardization
                    helps exporters establish a reputation for delivering safe
                    and superior quality products, leading to increased customer
                    trust and loyalty. Market
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Intelligence and Research
                  </h1>
                  <p className="mt-3">
                    APEDA keeps exporters updated with market intelligence,
                    trade statistics, and market research reports. This
                    information assists exporters in understanding market
                    trends, consumer preferences, and demand patterns, enabling
                    them to make informed business decisions. APEDA's market
                    intelligence services act as a valuable resource for
                    exporters to identify new export opportunities and expand
                    their reach in existing markets.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Financial Assistance and Incentives
                  </h1>
                  <p className="mt-3">
                    APEDA promotes and supports exporters by providing various
                    financial assistance schemes and incentives. These schemes
                    include assistance for participation in international trade
                    fairs and exhibitions, reimbursement of expenses for quality
                    certification and product registration, and financial aid
                    for infrastructure development. Such support helps reduce
                    the financial burden on exporters and encourages them to
                    explore new markets and invest in modernizing their
                    production processes.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Brand Promotion and Marketing Initiatives
                  </h1>
                  <p className="mt-3">
                    APEDA undertakes several branding and marketing initiatives
                    to promote Indian agricultural products globally. It
                    organizes trade fairs, buyer-seller meets, and promotional
                    campaigns to showcase Indian agri-products and facilitate
                    networking opportunities between exporters and importers.
                    APEDA's marketing efforts contribute to raising awareness
                    about Indian agricultural products, creating demand, and
                    enhancing their market visibility.
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
              Documentation
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation of
              <span className="text-[#fd8115]">APEDA Registration</span>
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
                    Business Registration Documents such as COI/MOA/AOA
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
                    IEC (Import Export Code) Certificate
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
                    Cancelled Cheque
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
                    Product Information
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
                    Office Address Proof
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
                    Identity and Address Proof of Authorized Representative
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
                    Factory Layout Plan and list of Machinery, if applicable
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

      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
