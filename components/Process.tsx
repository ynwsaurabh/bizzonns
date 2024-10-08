"use client";
import React, { useEffect, useRef } from "react";
import "../app/core.css";
interface ProcessItem {
  key: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ProcessProps{
    processItems: ProcessItem[];
}

const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const elementTopInView = (rect.top / windowHeight) * 100;
  const elementBottomInView = (rect.bottom / windowHeight) * 100;

  return elementBottomInView >= 40 && elementTopInView <= 45;
};

const Process: React.FC<ProcessProps> = ({processItems}) => {
  const scrollListRef = useRef<HTMLDivElement>(null);

  const toggleOpacity = (key: number) => {
    const element = scrollListRef.current?.querySelector(
      `div[data-key="${key}"]`
    );
    if (element) {
      element.classList.toggle("opacity-50");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = scrollListRef.current?.querySelectorAll("div[data-key]");
      elements?.forEach((element) => {
        const key = parseInt(element.getAttribute("data-key") || "0", 10);
        if (isElementInViewport(element as HTMLElement)) {
          if (element.classList.contains("opacity-50")) {
            toggleOpacity(key);
          }
        } else {
          if (!element.classList.contains("opacity-50")) {
            toggleOpacity(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[rgb(243 244 246)] bg-opacity-100 dark:bg-gray-900 dark:bg-opacity-100 text-black dark:text-white text-opacity-100 p-6">
      <div className="prome-j59otj">
        <div className="prome-dhhden">
          <h2 className="prome-vnfh11">Process</h2>
          <a href="/about" className="prome-95p069 group">
            <span className="prome-fljove">Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>
        <div
          id="scroll-list"
          className="prome-9gy3o3 middle"
          ref={scrollListRef}
        >
          {processItems.map(({ key, title, description, icon }) => (
            <div
              key={key}
              data-key={key}
              className={`flex flex-row space-x-6 duration-200 sm:space-x-12 opacity-50`}
            >
              <div className="prome-9z8cl7 shadow-custom">
                <div className="prome-n1jjm6 shadow-custom">{icon}</div>
              </div>
              <div className="prome-s1xnrc">
                <div className="prome-gw6dv1">
                  <h3 className="prome-6peno4">{title}</h3>
                  <p className="prome-06f18i">{key + 1}</p>
                </div>
                <p className="prome-otd43m">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
