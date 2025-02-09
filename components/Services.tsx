"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import useVisibleItems from "./hooks/useVisibleItems";

interface Product {
  href: string;
  title: string;
  image: string;
  description: string;
  price?: string;
  isUnderConstruction?: boolean;
}

const products: Product[] = [
  {
    href: "/",
    title: "Private Limited Company",
    image: "/plc.png",
    price: "5999",
    description:
      "Private Limited is the most common company structure for new ventures. The formation of a Private Limited Corporate entity is a smooth process with limited set of documentation and several advantages.",
  },
  {
    href: "/",
    title: "Limited Liability Partnership",
    image: "/llp.png",
    price: "4999",
    description:
      "A limited liability partnership firm is a straightforward business form founded on mutual consent. The benefits of a partnership firm and a corporation are combined in an LLP.",
  },
  {
    href: "/",
    title: "Trademark Registration",
    image: "/tm.png",
    price: "1499",
    description:
      "It is critical to pursue Trademark Registration in order to identify and protect your product or service, as well as your hard-earned brand, from competitors in the market.",
  },
  {
    href: "/",
    title: "PSARA License",
    image: "/psara.png",
    price: "14,999",
    description:
      "For Starting a Security Business in India, it is mandatory to obtain a PSARA License from Home Department. We provide PAN India Service with easy documentation drafting and online submission.",
  },
  {
    href: "/",
    title: "DRUG License",
    image: "/drug.png",
    price: "7999",
    description:
      "Anyone who wants to get into Medical Business needs to get a DRUG License from the respective State Government. We provide PAN India Service with application drafting and online submission.",
  },
  {
    href: "/",
    title: "Startup India",
    image: "/startup.png",
    price: "3999",
    description:
      "It is an Initiative started by the government. In this initiative start-ups and existing business gets various benefits from the government.",
  },
];

const Services: FC = () => {
  const { visibleItems, refs } = useVisibleItems();

  return (
    <div
      id="products"
      className="max-w-7xl mx-auto antialiased py-10 md:py-20 px-8 overflow-hidden"
    >
      {/* <div className="mt-4 text-xs z-40 w-fit bg-white dark:bg-gray-800 text-neutral-700 dark:text-neutral-300 rounded-full shadow-xl px-4 py-0.5 border border-neutral-100 dark:border-gray-700 relative">
        <span>Expert Services</span>
        <div className="absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full"></div>
      </div> */}
      <h1 className="text-2xl md:text-4xl text-neutral-800 dark:text-white mt-4 text-left mb-2 relative z-40">
        Our 100+ Services
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="mt-8 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Our Entire Team has extensive knowledge in every field. As a result,
          we are able to serve our clients with effective solutions to their
          problems.
        </p>
        <Link href="/contact">
          <div className="relative slidein900 cursor-pointer mt-4 space-x-2 text-white items-center z-10 rounded-full bg-black py-2 px-4 ring-1 ring-white/10 inline-flex">
            <span>See all services</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
                opacity="1"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <ul
        role="list"
        className="mx-auto relative z-40 mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {products.map((product, index) => {
          const isVisible = visibleItems.has(index);
          return (
            <li
              key={product.href}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 p-8 relative bg-white dark:bg-gray-800"
            >
              <div className="pointer-events-none">
                <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/10 dark:stroke-white/20"
                  >
                    <defs>
                      <pattern
                        id={`pattern-${product.href}`}
                        width="72"
                        height="56"
                        patternUnits="userSpaceOnUse"
                        x="50%"
                        y="16"
                      >
                        <path d="M.5 56V.5H72" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill={`url(#pattern-${product.href})`}
                    ></rect>
                  </svg>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-gray-700 dark:to-gray-800"
                  style={{
                    maskImage:
                      "radial-gradient(300px at 288px 219px, white, transparent)",
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                  style={{
                    maskImage:
                      "radial-gradient(300px at 288px 219px, white, transparent)",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.1] stroke-black/[0.1] dark:fill-white/[0.2] dark:stroke-white/[0.3]"
                  >
                    <defs>
                      <pattern
                        id={`pattern-overlay-${product.href}`}
                        width="72"
                        height="56"
                        patternUnits="userSpaceOnUse"
                        x="50%"
                        y="16"
                      >
                        <path d="M.5 56V.5H72" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill={`url(#pattern-overlay-${product.href})`}
                    ></rect>
                  </svg>
                </div>
              </div>

              {/* Image positioned in the top right corner */}
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
                className="absolute top-[-35px] right-[-20px] z-20"
                style={{ objectFit: "cover" }}
              />

              <div className="relative z-10">
                {product.isUnderConstruction && (
                  <h1 className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white w-fit px-1 py-0.5 text-xs mt-4">
                    🔥 Best Selling
                  </h1>
                )}
                <h1
                  className={`mt-6 font-semibold text-gray-900 dark:text-gray-100 text-base md:text-2xl mb-2 tracking-wide leading-6 antialiased transition-opacity duration-500 ${
                    isVisible ? "textAnimation" : "opacity-0"
                  }`}
                >
                  {product.title}
                </h1>
                <p
                  className={`mt-2 text-gray-700 dark:text-gray-300 tracking-wide leading-6 antialiased transition-opacity duration-500 ${
                    isVisible ? "textAnimation" : "opacity-0"
                  }`}
                >
                  {product.description}
                </p>

                {/* Pricing Information */}
                <p className="mt-2 text-center mx-5 md:mx-7 text-base text-gray-900 dark:text-gray-100 font-semibold">
                  Starting at Rs {product.price}/-{" "}
                  <span className="text-gray-500">
                    (Applicable taxes and Govt fees extra)
                  </span>
                </p>

                {/* Enquire Now Button */}
                <Link href="/contact">
              <div className="relative slidein900 cursor-pointer my-4 space-x-2 dark:text-[#000] text-white items-center z-10 rounded-full dark:bg-white bg-[rgb(0,0,0)] py-2 px-4 ring-1 ring-white/10 inline-flex">
                <span>Enquire now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    opacity="1"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  ></path>
                </svg>
              </div>
            </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
