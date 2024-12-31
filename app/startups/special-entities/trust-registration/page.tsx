import CustomFaq from "@/components/Faq/CustomFaq";
import CompanyRegistration from "@/components/Starter/Starter";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata ={
  title:'Trust Registration'
}
const descriptions = [
  "Our Team at Bizzonns helps you in the documentation and end-to-end process of getting a Trust Incorporated.",
  "They also guide you with the After Formation Process of the Trust.",
];

const faqs = [
  {
    question: "What is a Trust Deed?",
    answer:
      "Trust Deed is a legal document that mentions the terms and conditions of the trust. It includes the rights, duties and power of the trustee, beneficiaries.",
  },
  {
    question: "What are the different types of Trust?",
    answer:
      "There are various types of trusts in India, i.e. Public Trusts, Private Trusts, Charitable Trusts and purpose specific trusts.",
  },
  {
    question: "Can Trust Deed be amended?",
    answer:
      "Trust Deed can be amended with the consent of the trustee and the beneficiaries.",
  },
  {
    question: "Can a person be a trustee and a beneficiary in the same trust?",
    answer: "Yes, the trustee and the beneficiary can be the same person.",
  },
];

const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mt-16 bg-[#F5FAFF]">
        <CompanyRegistration
          title="Trust Formation"
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
                In India, trust formation is a legal process through which
                individuals or organizations create a legal entity known as a
                trust to manage and administer assets for the benefit of
                specific individuals, groups, or causes. Trusts are commonly
                established for purposes such as charitable, educational,
                religious, or philanthropic activities. The process of forming a
                trust involves several steps and legal requirements.
              </p>
              <p className="text-sm lg:text-base">
                According to the Indian Trusts Act of 1882, a trust is a duty
                attached to property ownership that results from confidence
                placed in the owner and accepted by him or one he declared and
                accepted, for the benefit of a third party, or of a third party
                and the owner.
              </p>
              <p className="text-sm lg:text-base">
                The “Author of the Trust” is the individual who proclaims or
                repossesses the confidence.
              </p>
              <p className="text-sm lg:text-base">
                The “Trustee” is the individual who accepts the trust.
              </p>
              <p className="text-sm lg:text-base">
                The term “Beneficiary” refers to the one for whose advantage the
                confidence is acknowledged.
              </p>
              <p className="text-sm lg:text-base">
                “Trust Property” or “Trust Money” are the terms used to describe
                the trust’s subject matter.
              </p>
              <p className="text-sm lg:text-base">
                The Trust Deed or Instrument of Trust is the name of the
                document, if any, through which the Trust is established.
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

      <section className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12  lg:my-16">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
              Benefits
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
              Benefits of
              <span className="text-[#fd8115]"> {""}Trust Formation </span>
            </h2>
          </div>
        </div>
      </section>
      <div className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12 lg:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/** Column 1 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Legal Validity
              </h1>
              <p className="mt-3">
              Registered trusts are legally recognized entities. Registration provides authenticity and ensures that the trust is valid under the law. It adds a layer of legitimacy to the trust’s operations and activities.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Tax Benefits</h1>
              <p className="mt-3">
              Depending on the nature of the trust and its activities, registration can provide tax benefits. Charitable and religious trusts, for instance, can apply for tax exemption under sections 12A and 80G of the Income Tax Act, making donations to the trust eligible for tax deductions.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Transparency</h1>
              <p className="mt-3">
              Registration involves disclosing the trust’s objectives, activities, and financial details to the authorities. This transparency can foster trust among beneficiaries, donors, and the public.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Legal Protections</h1>
              <p className="mt-3">
              Registered trusts have a legal framework that outlines their operations and governance. This can offer protection to trustees from legal liabilities arising from their actions as long as they act in accordance with the trust’s objectives and the law.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl flex-1">
              <h1 className="text-xl font-bold">Easy Succession</h1>
              <p className="mt-3">
              Registered trusts can easily add or replace trustees without affecting the continuity of the trust’s operations.
              </p>
            </div>
          </div>

          {/** Column 2 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl mb-5 rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
              Perpetual Existence
              </h1>
              <p className="mt-3">
              A registered trust enjoys perpetual existence. Unlike individuals, trusts don’t have a limited lifespan. This ensures that the trust’s objectives and activities can continue even after the founders or initial trustees are no longer involved.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Credibility and Acceptance
              </h1>
              <p className="mt-3">
              Registered trusts are often perceived as more credible and reliable by stakeholders, donors, and the public. This can lead to increased support and donations for the trust’s activities.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Easy Transfer
              </h1>
              <p className="mt-3">
              Registered trusts can easily transfer or hold property and assets in their name. This simplifies the process of acquiring and managing assets for the trust’s activities.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Recognition for Fundraising
              </h1>
              <p className="mt-3">
              Registered trusts have an advantage when it comes to fundraising. Many donors and funding organizations prefer to support registered trusts because of the legal oversight and accountability they offer.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
              Government Benefits
              </h1>
              <p className="mt-3">
              Depending on the trust’s objectives, it might be eligible for government grants, subsidies, or support, which can aid its activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white dark:bg-gray-900 scroll-mt-20 flex-none mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10  my-5 md:my-0 lg:my-16 ">
        <div className="flex flex-col w-full gap-4 lg:flex-row-reverse">
          {/* Text Section */}
          <div className="relative flex-1 flex flex-col gap-4 text-gray-900 dark:text-white lg:w-1/2 self-center">
            <p className=" max-w-max text-sm rounded-full border border-[#2a2a2a] dark:border-white py-1.5 font-semibold uppercase px-5 text-center">
            Trust Deed
            </p>

            <h2 className="text-[#fd8115] font-poppins text-3xl lg:text-4xl font-semibold">
            Trust Deed
            </h2>
            <div className="font-medium text-gray-600 dark:text-gray-400">
              <p className="text-sm lg:text-base">
              A trust can be created through spoken or written communication, and a trust deed is not necessary. But in some circumstances, a Trust Deed is both preferred and necessary. A written Trust deed is not required but is preferred when there is a public Trust.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2">
            <img
              className="object-contain object-center transition-opacity duration-300 block w-full lg:w-3/4"
              srcSet="/deed.svg"
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
            Advantages
            </p>

            <h2 className="text-[#2a2a2a] dark:text-white font-poppins text-3xl lg:text-4xl font-semibold">
            Advantages of
              <span className="text-[#fd8115]"> {""}Trust Formation </span>
            </h2>
          </div>
        </div>
      </section>
      <div className="relative scroll-mt-20 flex-none mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-4 lg:px-10 my-12 lg:my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/** Column 1 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Charitable Activities
              </h1>
              <p className="mt-3">
              Trusts are commonly formed for charitable, philanthropic, and social welfare purposes. They provide a structured and organized way to contribute to causes such as education, healthcare, poverty alleviation, and community development.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">Perpetual Existence</h1>
              <p className="mt-3">
              Trusts have a perpetual existence, separate from the individuals who created them. This means that even if the founders or initial trustees change or pass away, the trust’s activities can continue as long as they align with its objectives.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl flex-1">
              <h1 className="text-xl font-bold">Recognition for Grants and Funding</h1>
              <p className="mt-3">
              Many governmental and non-governmental organizations prefer to provide grants and funding to registered trusts due to the transparency and accountability associated with their operations.
              </p>
            </div>
          </div>

          {/** Column 2 **/}
          <div className="flex flex-col">
            <div className="p-7 bg-white shadow-xl mb-5 rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
              Legal Recognition
              </h1>
              <p className="mt-3">
              Registered trusts have legal recognition, which lends credibility and authenticity to their activities. This recognition can attract donors, supporters, and beneficiaries who are more likely to engage with a registered entity.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl mb-5 flex-1">
              <h1 className="text-xl font-bold">
              Asset Protection
              </h1>
              <p className="mt-3">
              Trusts offer a level of protection for assets. By transferring assets to the trust, they are separated from the personal assets of the trustees and founders, reducing the risk of personal liability.
              </p>
            </div>
            <div className="p-7 bg-white shadow-xl rounded-2xl flex-1">
              <h1 className="text-xl font-bold">
              Fundraising and Donations
              </h1>
              <p className="mt-3">
              Trusts can conduct fundraising activities and solicit donations more effectively due to their legal recognition and the tax benefits offered to donors.
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
