import Faq from "@/components/Faq";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'Sole Proprietorship Registration'
}
const descriptions = [
  "Suitable for a Single person who wants to start a business with the Zero or Minimum Fund.",
  "Bizzonns helps you in selecting the Best Suitable Format for your business by understanding your requirements and needs. It also helps you in getting your Business registered and operational.",
  "Professional fees starting at Rs. 1,500/- Onwards",
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Sole Proprietorship Registration"
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
                Sole Proprietorship is the easiest form of doing business in
                India, as it is not governed by any specific law. It is a
                single-person firm registration, where one person is the owner
                and is personally liable for all debts and liabilities of the
                business. It is owned and run by one natural person and in this,
                there is no legal distinction between the owner and the
                business.
              </p>
              <p className="text-sm lg:text-base">
                Due to its ease of creation, low cost, and minimal compliance
                requirements, sole proprietorship is a simpler type of business.
                For the efficient operation of their firm, sole proprietorships
                are advised to obtain a few of the below-mentioned
                registrations-
              </p>
              <div className="font-medium text-[#606162] dark:text-gray-400">
                <div className="p-5  ">
                  <ul className="flex flex-col gap-4 md:gap-3 max-md:py-5 noListMargin">
                    <li className="flex items-start gap-[10px] md:text-[18px] ">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>GST Registration</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Shop and Establishment Registration</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>MSME/UDYAM Registration</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Professional Tax Registration</p>
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
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Required Documents
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Required Documents For
              <span className="text-[#fd8115]">
                {" "}
                Proprietorship Firm Registration{" "}
              </span>
            </h2>
            <div className="font-medium text-[#606162] dark:text-gray-400">
              <div className="p-5  ">
                <ul className="flex flex-col gap-4 md:gap-3 max-md:py-5 noListMargin">
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Aadhar Card</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>PAN Card/ Driving License/ Voter ID</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Current Bank Account</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Office Address Proof</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p> Nature of Business</p>
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
              Advantages
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Advantages Of
              <span className="text-[#fd8115]">
                {" "}
                Sole Proprietorship Registration{" "}
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
                  <h1 className="text-xl font-bold">
                    Easy to Start and Close Business
                  </h1>
                  <p className="mt-3">
                    Since it does not need to be registered under any specific
                    Act, it is simple to start and close.
                  </p>
                </div>
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">Less Compliance</h1>
                  <p className="mt-3">
                    As it is not governed by any of the Acts, very few
                    compliances need to be adhered to. Thus, it also leads to
                    Lesser Compliance costing.
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl mb-5 rounded-2xl">
                  <h1 className="text-xl font-bold">Taxation Benefit</h1>
                  <p className="mt-3">
                    Proprietorship firms are subject to the same Income Tax
                    Slabs as Individuals. Therefore, there are lower slab rates
                    and benefits that apply to them.
                  </p>
                </div>
                <div className="p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">No Business Name Limits</h1>
                  <p className="mt-3">
                    No restrictions on business names, but entrepreneurs are
                    encouraged to choose original names and register trademarks.
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
              <p className="text-sm lg:text-base">
                A sole proprietorship only needs to file an income tax return
                once a year. Accounts for proprietorships need to be audited if
                their annual revenue exceeds RS 5 crore.
              </p>
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
