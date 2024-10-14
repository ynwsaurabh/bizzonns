import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";

const faqs = [
  {
    question: "What is Startup india?",
    answer:
      "Startup India is an initiative launched by the Government of India to promote and support entrepreneurship and innovation in the country. It aims to create a nurturing ecosystem for startups, providing them with various benefits, incentives, and support.",
  },
  {
    question:
      "Can foreign nationals or Non-Resident Indians (NRIs) register a startup under Startup India?",
    answer:
      "Yes, foreign nationals and NRIs can register a startup in India under the Startup India Scheme. However, at least one Indian citizen must be a part of the founding team.",
  },
  {
    question: "Is there any financial support available for startups?",
    answer:
      "Yes, the government has established the Fund of Funds for Startups (FFS) with a corpus of INR 10,000 crores. Startups can raise funds through alternate investment funds (AIFs) supported by FFS. Additionally, startups can explore funding opportunities from venture capitalists, angel investors, and other funding sources.",
  },
  {
    question:
      "Can startups in any sector apply for recognition under Startup India?",
    answer:
      "Yes, startups from all sectors can apply for recognition under the Startup India Scheme. The focus is on promoting innovation and job creation across.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Startup India"
          parent="Registration"
          href="/"
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
                The Startup India Scheme, launched by the Government of India in
                January 2016, is a flagship initiative aimed at promoting and
                supporting entrepreneurship and innovation in the country. The
                scheme seeks to create a conducive ecosystem for startups,
                enabling them to grow, thrive, and contribute to India’s
                economic growth and job creation.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                The primary objective of the Startup India Scheme is to foster a
                culture of entrepreneurship, encourage innovation, and provide a
                nurturing environment for startups to flourish. It focuses on
                simplifying regulatory processes, reducing bureaucratic hurdles,
                and providing various incentives and benefits to startups.
              </p>
              <p className="text-sm mt-2 lg:text-base">
                The Startup India Recognition program was launched as part of
                the larger Startup India Initiative to provide formal
                recognition to eligible startups and facilitate their growth.
                The recognition not only validates the innovative potential of
                startups but also provides them with a host of benefits to
                accelerate their journey.
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
              Objective
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Objective Of
              <span className="text-[#fd8115]"> Startup India </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Promoting Innovation</h1>
                  <p className="mt-3">
                    The program aims to foster a culture of innovation by
                    recognizing and supporting startups that are working on
                    innovative solutions, products, or services.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">Access to Funding</h1>
                  <p className="mt-3">
                    The program facilitates access to various funding
                    mechanisms, including venture capital, angel investments,
                    and government schemes, enabling startups to raise capital
                    for scaling their businesses.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Ease of Doing Business</h1>
                  <p className="mt-3">
                    The recognition process streamlines compliance requirements
                    and provides startups with various benefits and incentives,
                    making it easier for them to operate and grow in India.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Networking and Collaboration
                  </h1>
                  <p className="mt-3">
                    Recognized startups gain access to a vibrant network of
                    entrepreneurs, mentors, industry experts, and investors,
                    fostering collaboration and knowledge-sharing.
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
            Documentation
              <span className="text-[#fd8115]"> Startup India </span>
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
                    <p> Certificate of Incorporation/MOA/AOA</p>
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
                      <strong>Startup Information:</strong> The startup needs to
                      provide basic information about its operations, including
                      the name, address, contact details, and email ID of the
                      startup.
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
                      <strong> Definition of Innovation:</strong> The startup
                      must provide a brief description of its innovative nature,
                      explaining how it differentiates itself from existing
                      solutions, products, or services.
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
                    <p>Financial Statements</p>
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12  lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Benefits
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits of
              <span className="text-[#fd8115]">
                {" "}
                {""}Startup India Recognition{" "}
              </span>
            </h2>
          </div>
        </div>
      </section>
      <div className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12 lg:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/** Column 1 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Tax Exemptions</h1>
              <p className="mt-3">
                Startups recognized under the program are eligible for
                significant tax benefits, including exemption from income tax
                for three consecutive years. This exemption allows startups to
                reinvest their profits into their businesses, driving innovation
                and expansion.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
                Simplified Compliance Requirements
              </h1>
              <p className="mt-3">
                Startups are provided with a simplified regulatory and
                compliance framework, minimizing the bureaucratic hurdles that
                often hamper the growth of new ventures. This streamlined
                process helps startups focus on their core operations and
                reduces the burden of administrative tasks.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Networking and Mentorship</h1>
              <p className="mt-3">
                Recognized startups gain access to a vast network of industry
                experts, successful entrepreneurs, and mentors. This network
                provides valuable guidance, mentoring, and networking
                opportunities, helping startups refine their business strategies
                and navigate challenges effectively.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
                Incubation and Co-Working Spaces
              </h1>
              <p className="mt-3">
                Recognized startups are eligible for various incubation and
                co-working programs established by the government and private
                entities. These programs provide startups with physical
                infrastructure, resources, and a conducive environment for
                ideation, collaboration, and growth.
              </p>
            </div>
          </div>

          {/** Column 2 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl mb-5 rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
                Fast-Track Patent Examination
              </h1>
              <p className="mt-3">
                Recognized startups have the opportunity to expedite the
                examination of their patent applications, reducing the time and
                costs associated with the process. This benefit encourages
                startups to protect their intellectual property and fosters an
                environment of innovation.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Access to Funding</h1>
              <p className="mt-3">
                Startup India recognition opens up avenues for funding, both
                from the government and the private sector. The government has
                launched several funds, such as the Fund of Funds for Startups
                (FFS), to provide financial support to recognized startups.
                Additionally, startups gain visibility among angel investors,
                venture capitalists, and other funding sources, increasing their
                chances of securing investments.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Government Procurement</h1>
              <p className="mt-3">
                Startups are given preference in government procurement
                processes, offering them a significant market opportunity. This
                preferential treatment allows startups to secure government
                contracts, driving their growth and providing a platform to
                showcase their capabilities.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">International Exposure</h1>
              <p className="mt-3">
                Startups recognized under the program get opportunities to
                participate in international conferences, trade fairs, and
                exhibitions. These platforms enable startups to showcase their
                innovations, connect with global stakeholders, and explore
                international markets for expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CustomFaq faqs={faqs} />
    </div>
  );
};

export default page;
