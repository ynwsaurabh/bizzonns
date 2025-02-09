import Faq from "@/components/Faq";
import CustomFaq from "@/components/Faq/CustomFaq";
import Process from "@/components/Process";
import CompanyRegistration from "@/components/Starter/Starter";
import ComparisonTable from "@/components/Table";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trademark",
};
const descriptions = [
  "Register your Trademark & protect your brands, logos, business names, labels, product or service names and domains swiftly with our expert online trademark registration services in India. ",
  "Our senior IP lawyer conducts thorough trademark searches before ™ application.",
  "Stay informed with regular updates throughout the process. TM filing starts from ₹1499 + Govt fees",
];

const faqs = [
  {
    question: "What is a trademark?",
    answer:
      "A trademark is a distinctive marker that distinguishes products or services from competitors. It can include symbols, designs, expressions, or identifiable features associated with a specific brand.",
  },
  {
    question: "Why should I register my trademark?",
    answer:
      "Trademark registration protects your rights to use the mark and provides legal recourse against infringement. It remains valid for ten years, with the option to renew indefinitely.",
  },
  {
    question: "Who can apply for trademark registration in India?",
    answer:
      "Trademark registration India is open to individuals, companies, proprietorship firms, partnerships, LLPs, Indian and foreign companies, trusts, and societies.",
  },
  {
    question: "What are the types of trademark registrations in India?",
    answer:
      "Trademark registration India includes product marks, service marks, collective marks, certification marks, shape marks, pattern marks, and sound marks.",
  },
  {
    question: "How do I choose the correct trademark class?",
    answer:
      "Carefully select the appropriate class that categorizes your goods or services. Common classes include Class 9 (software, electronics), Class 25 (clothing), Class 35 (business management), and Class 41 (education). Our experts can help you select the correct trademark class when register trademark india.",
  },
  {
    question: "Why is a trademark search necessary?",
    answer:
      "A trademark search helps ensure the uniqueness and exclusivity of your brand by identifying pre-existing trademarks in the market. IndiaFilings provides tools and support for this search in the process of trademark registration India.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Trademark Registration"
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
                A trademark is an intellectual property consisting of a
                recognizable sign, design, name, insignia or expression that
                identifies a product or service from a particular source and
                distinguishes it from others. An individual, business
                organization, or any legal entity can own a trademark. It serves
                as a legal tool to differentiate products or services from those
                of other companies, ensuring that consumers can identify the
                origin of what they are purchasing
              </p>
              <p className="text-sm mt-2 lg:text-base">
                In India, you can register diverse items as trademarks. They can
                include brand names, logos, words, slogans, sounds, smells,
                colors, or any unique sign. These trademarks should distinguish
                your goods or services from others. This helps maintain your
                business identity and protect it from misuse.
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
              Important Facts About
              <span className="text-[#fd8115]"> Trademark Registration </span>
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
                    VIENNA Framework for Recording Purposes
                  </h1>
                  <p className="mt-3">
                    It is an essential part of the trademarking process that
                    ensures those trademarks meet certain categories in order
                    for them to submit applications submitted there. Once you
                    file your application; it will receive international
                    classification as part of Vienna codification which means
                    that your request for registration will now appear as - sent
                    for Vienna codification.
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-[19px] font-bold">
                    Analysis of the Trademark
                  </h1>
                  <p className="mt-3">
                    Once the application for Vienna classification is submitted,
                    the Trademark officer will analyze it according to specific
                    protocols and rules. The official may either decide to
                    approve or reject the application based on his discretion.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Trademark Lookup</h1>
                  <p className="mt-3">
                    Before applying for a trademark, we also offer assistance
                    with conducting a searching procedure on similar or
                    identical trademarks under The Trade Marks Act is
                    prohibitive. This trademark search facilitates ease in
                    locating similar sounding registrations. However, trademark
                    examiners handle the connection test
                  </p>
                </div>
                <div className="flex flex-col h-full p-5 bg-white dark:bg-[#000] text-gray-900 dark:text-white shadow-xl rounded-2xl">
                  <h1 className="text-xl font-bold">Trademark Disapproval</h1>
                  <p className="mt-3">
                    If a trademark application gets rejected by the Trademark
                    Examiner, the applicant can respond to the objection by
                    presenting evidence and arguments that support trademark
                    registration. In reaction to this answer, the Examiner may
                    ask for a hearing, allow trademark filing to move forward or
                    reject it altogether.
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
              <span className="text-[#fd8115]"> Trademark Registration </span>
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
                    <p> Documentation of the Applicant</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px]">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Proof of Address and PAN Card</p>
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
                      Certificate of Registration (Since the Applicant Is Not an
                      Individual)
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
                    <p>Brand Name and Logo</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>User Affidavit</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Proof of TM Use</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>MSME / Start-up Recognition</p>
                  </li>
                  <li className="flex items-start gap-[10px] md:text-[18px] ">
                    <img
                      alt="blue tick"
                      className="mt-[3px]"
                      src="/blue-tick.svg"
                      width="20"
                      height="20"
                    />
                    <p>Signed Form TM – 48.</p>
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
              Benefits of
              <span className="text-[#fd8115]">
                {" "}
                {""}Trademark Registration{" "}
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
              <h1 className="text-xl font-bold">Super Business Opportunity</h1>
              <p className="mt-3">
                Registered trademarks help create perception of security,
                quality and trust among customers by promoting their products or
                services under them in question. An identity can be unique
                because it is associated with few other traders.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Legal Protection</h1>
              <p className="mt-3">
                If you or anyone else copies any part of your trademark
                including logo registration, brand name or slogan then the
                registered trademark owner has all rights and can take legal
                actions against them as a result of infringement.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
                Get yourself a Unique Identity
              </h1>
              <p className="mt-3">
                The consumers can only see one item or service by its particular
                name brand . Registering the mark ensures no one else shall use
                it, thus making it a proprietary property of the company.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
                Global Trademark Application
              </h1>
              <p className="mt-3">
                It is permissible to register and file a trademark in India then
                other countries (that are outside India). Besides, foreign
                nationals may also register and file trademarks in India.
              </p>
            </div>
          </div>

          {/** Column 2 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl mb-5 rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
                Are creating intangible assets
              </h1>
              <p className="mt-3">
                If your brand registration becomes famous and successful then
                the mark might become an important facility. A registered mark
                becomes an intangible asset which can be sold, bought, leased or
                even shared for a profit. So both the business and individual
                owner stand to gain from this.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Privileges</h1>
              <p className="mt-3">
                It may be given to the trademark proprietor who has registered
                it with such rights that are exclusive in nature. For all
                available products, one may register the same trademark within
                its category. Having exclusive rights to goods or services
                ensures that no one can use them without authority outside it.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Use of registered symbols</h1>
              <p className="mt-3">
                Once you have filed your application for a trademark, you are
                allowed to use the sign indicating that your trademark is
                registered (®). By using this symbol, it shows that nobody else
                can file a similar application as this is already a registered
                trademark. If someone makes an unauthorized use of his/her
                registered marks, he/she could go to court against the person
                infringing upon her/his legal rights.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Diffrentiate Products</h1>
              <p className="mt-3">
                Branding enables customers to acquire knowledge about items
                quickly. Diverse items develop their own identities, which helps
                them differentiate between each other.
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
