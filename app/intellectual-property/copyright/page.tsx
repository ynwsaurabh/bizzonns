import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Copyright",
};
const descriptions = [
  "Start using © symbol with our Guaranteed 5-7 Days Filing T&C*.",
  "Transparent process through follow-up and regular updates. Filing your copyright starts from ₹2999 + Govt fees ",
];

const faqs = [
  {
    question: "Can titles or names be copyrighted?",
    answer:
      "A copyright registration does not protect the titles or names, short words, slogans, or any phrases. Only original literary work can get copyright registration.",
  },
  {
    question:
      "What is the difference between Copyright registration and trademark registration?",
    answer:
      "Trademark registration protects the brand name, logo the slogan whereas copyright protection is provided to literary works, music, videos, slogans, and artistic contents.",
  },
  {
    question:
      "Copyright obtained in India is only valid in India or across the world?",
    answer:
      "According to the Berne Convention, copyright obtained in India will get the status of foreign workers and the copyright protection is extended to the countries which are signatories to the Berne Convention.",
  },
  {
    question: "What are the copyright registration fees in India?",
    answer:
      "The copyright registration fees in India vary based on the type of work being registered, such as literary, artistic, musical, or cinematographic works.",
  },
  {
    question: "What are the benefits of copyright registration?",
    answer:
      "The holder can translate, reproduce, adapt, create the work, and also to the right to be credited for his contribution, a right for who can adapt the work to other forms.",
  },
  {
    question: "How long does it take to obtain the copyright registration?",
    answer:
      "A copyright registration can be obtained in around 6-8 months considering factors like objection etc.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Copyright Registration"
          parent="Registration"
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
                Copyright is a type of intellectual property law that protects
                original works of authorship. It gives the creator of a work the
                exclusive right to control how it is used, including the right
                to:
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
                      <p>Reproduce the work (make copies)</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Distribute the work (sell, rent, or lend it)</p>
                    </li>
                    <li className="flex items-start gap-[10px] md:text-[18px]">
                      <img
                        alt="blue tick"
                        className="mt-[3px]"
                        src="/blue-tick.svg"
                        width="20"
                        height="20"
                      />
                      <p>Create derivative works (adapt or modify them)</p>
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
                        Perform the work publicly (play, display, or recite it)
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
                      <p>Display the work publicly (exhibit it)</p>
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

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits of
              <span className="text-[#fd8115]"> Copyright Registration </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative scroll-mt-20 flex-none mx-auto lg:w-[60%] px-4 lg:px-10  my-5 md:my-0 lg:my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Legal Evidence</h1>
                  <p className="mt-3">
                    Registration provides a public record of your copyright
                    ownership, which can serve as strong evidence in case of
                    infringement.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Right to Sue for Infringement
                  </h1>
                  <p className="mt-3">
                    You cannot initiate legal proceedings for copyright
                    infringement in India unless your work is registered.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    Presumption of Ownership
                  </h1>
                  <p className="mt-3">
                    In court, a registered copyright is presumed to be valid,
                    which places the burden of proof on the alleged infringer to
                    demonstrate otherwise.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">
                    International Recognition
                  </h1>
                  <p className="mt-3">
                    While registration is not mandatory for international
                    protection, it can facilitate enforcement of your rights in
                    other countries that have reciprocal copyright agreements
                    with India.
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
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Documentation
              <span className="text-[#fd8115]"> Copyright Registration</span>
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
                      {" "}
                      Name, Address & Nationality of the Candidate – ID proofers
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
                      NOC from the publisher if work published and the publisher
                      is different from the applicant.
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
                      Search Certificate from Trade Mark Office (TM -60) if any
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
                      {" "}
                      NOC from a person whose photograph appears on the work.
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
                    <p>Power of Attorney</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>2 Copies of the work</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p> DD/IPO of Rs. per work (as applicable)</p>
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
                      {" "}
                      NOC from the author if the candidate is different from the
                      author.
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12  lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Advantages of
              <span className="text-[#fd8115]">
                {" "}
                {""}Copyright Registration{" "}
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
              <h1 className="text-xl font-bold">Legal Protection</h1>
              <p className="mt-3">
                Copyright registration serves as prima facie evidence in the
                court of law over ownership of the work. Therefore, copyright
                registration gives the owner legal protection for his/her work.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Branding and Goodwill</h1>
              <p className="mt-3">
                Registered copyright can be used for marketing and creating a
                sense of goodwill and quality in the minds of your customer.
                Registered copyright shows others that you care about your work.
              </p>
            </div>
          </div>

          {/** Column 2 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl mb-5 rounded-2xl flex-1">
              <h1 className="text-xl font-bold">Global Protection</h1>
              <p className="mt-3">
                Works that are copyrighted in many other countries are accorded
                similar privileges here in India. Likewise, works copyright
                registered in India are accorded protection in many foreign
                countries.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
                Restricts Unauthorized Reproduction
              </h1>
              <p className="mt-3">
                Copyright registration will establish that you are serious about
                copyright infringement. This will help impede unauthorized
                reproduction of the work as it provides the owner with a host of
                legal remedies.
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
