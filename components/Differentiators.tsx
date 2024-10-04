"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import useVisibleItems from "./hooks/useVisibleItems";
import AOS from "aos";

interface Product {
  href: string;
  title: string;
  image: string;
  description: string;
  isUnderConstruction?: boolean;
}

const products: Product[] = [
  {
    href: "/about",
    title: "Experienced Team",
    image: "/ET.png",
    description:
      "Bizzonns whole team has extensive knowledge in many sectors. As a result, we can provide our customers with efficient answers to their challenges.",
  },
  {
    href: "/about",
    title: "Perpetual",
    image: "/perpetual.png",
    description:
      "We are open during office hours. Our customers may rely on us 24 hours a day, seven days a week. Anyone with a problem may contact us at any time.",
  },
  {
    href: "/about",
    title: "Customize Service",
    image: "/customize-service.png",
    description:
      "We recognise that each customer has distinct challenges. Thus we give tailored services to all our clients to assist them in addressing their concerns.",
  },
  {
    href: "/about",
    title: "Feedback",
    image: "/feedback.png",
    description:
      "We seek ongoing customer feedback in order to better serve them and maintain long-term partnerships. Every work login at our organisation is tracked by our customer service team.",
  },
  {
    href: "/about",
    title: "Affordable",
    image: "/pricing.png",
    description:
      "Pricing is one of our most appealing characteristics. Bizzonns have total price transparency. We clarify every price involved before accepting work; we never come up with surprises in costs after getting a job",
  },
  {
    href: "/about",
    title: "Online / Offline Customer support",
    image: "/customer-support.png",
    description:
      "We have a specialised customer care staff that handles all concerns quickly and effectively, with a physical and online presence in major Indian cities.",
  },
];

const Differentiators: FC = () => {
  const { visibleItems, refs } = useVisibleItems();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto antialiased py-10 md:py-20 px-8 bg-white dark:bg-gray-900 overflow-hidden">
      <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
        Differentiators
      </span>
      <h1 className="text-2xl md:text-4xl text-center text-neutral-800 dark:text-white mt-4 mb-2 relative z-40">
        Our Key Differentiators
      </h1>
      <ul
        role="list"
        className="mx-auto relative z-40 mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
      >
        {products.map((product, index) => {
          const isVisible = visibleItems.has(index);
          return (
            <li
              key={product.href}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="group relative cursor-pointer overflow-hidden bg-white dark:bg-[#000] rounded-2xl p-6 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
            >
              <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />
              
              <div className="relative z-10 mx-auto max-w-md">
                <div className="flex flex-row text-center w-full">
                <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="h-12 w-12 text-white transition-all"
                  />
                </span>
                <h2 className="w-2/4 md:ml-5 z-10 text-xl font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h2>
                </div>

                <div className="space-y-6 pt-6 text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-white">
                  <p data-aos="fade-down" className="font-medium">{product.description}</p>
                </div>

                <div className="pt-6 text-lg font-semibold leading-7">
                  <Link href={product.href}>
                    <p>
                      <span className="text-purple-500 transition-all duration-500 group-hover:text-white">
                        Explore Details →
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Differentiators;
