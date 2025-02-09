"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

interface FaqItem {
  question: string;
  answer: string;
}

interface CustomFaqProps {
  faqs: FaqItem[];
}

const CustomFaq: React.FC<CustomFaqProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the active accordion
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Collapse if clicked on active item
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-10 dark:bg-dark lg:pb-[50px] lg:pt-[100px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Any Questions? Answered"
          paragraph="Our FAQ section addresses common inquiries to help you find the information you need quickly. If you have further questions, feel free to reach out!"
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          {faqs.map((item, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2 mb-4">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 px-6 text-lg font-semibold text-gray-900 dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-between"
                >
                  <span>{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6L8 10L12 6"
                    />
                  </svg>
                </button>
                {/* Answer Section */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="py-4 px-6 text-base text-body-color dark:text-dark-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomFaq;
