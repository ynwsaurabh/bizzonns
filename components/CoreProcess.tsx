"use client";
import React, { useEffect, useRef } from "react";
import "../app/core.css";
interface ProcessItem {
  key: number;
  title: string;
  description: string;
  icon: JSX.Element; // Accepts an SVG or any JSX element for the icon
}

const processItems: ProcessItem[] = [
  {
    key: 0,
    title: "Client's Requirements",
    description:
      "Gather and clarify the client's needs and expectations for the service or task at hand. This involves understanding their objectives and specific legal issues they are facing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="prome-he15p0"
        viewBox="0 0 24 24"
      >
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" />
        <path d="M12 2v2" stroke="currentColor" />
        <path d="M12 22v-2" stroke="currentColor" />
        <path d="m17 20.66-1-1.73" stroke="currentColor" />
        <path d="M11 10.27 7 3.34" stroke="currentColor" />
        <path d="m20.66 17-1.73-1" stroke="currentColor" />
        <path d="m3.34 7 1.73 1" stroke="currentColor" />
        <path d="M14 12h8" stroke="currentColor" />
        <path d="M2 12h2" stroke="currentColor" />
        <path d="m20.66 7-1.73 1" stroke="currentColor" />
        <path d="m3.34 17 1.73-1" stroke="currentColor" />
        <path d="m17 3.34-1 1.73" stroke="currentColor" />
        <path d="m11 13.73-4 6.93" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: 1,
    title: "Understanding Legalities of The Requirements",
    description:
      "Analyze the legal implications of the client's requirements. Assess the legal implications and compliance of the client's requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="prome-he15p0"
        viewBox="0 0 24 24"
      >
        <path d="M18 22H4a2 2 0 0 1-2-2V6" stroke="currentColor" />
        <path
          d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"
          stroke="currentColor"
        />
        <circle cx="12" cy="8" r="2" stroke="currentColor" />
        <rect width="16" height="16" x="6" y="2" rx="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: 2,
    title: "Consultation to The Client",
    description:
      "At this stage, we outline your project’s structure, focusing on user experience and interface flow, setting a solid foundation for development.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="prome-he15p0"
        viewBox="0 0 24 24"
      >
        <path d="M8 2v4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 2v4" stroke="currentColor" strokeWidth="2" />
        <rect width="18" height="18" x="3" y="4" rx="2" stroke="currentColor" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 14h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M12 14h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M16 14h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" />
        <path d="M16 18h.01" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: 3,
    title: "Collest Requisite Documents and Details",
    description:
      "Provide expert advice and discuss strategies tailored to the client's situation. This may involve reviewing existing documents, requesting additional information, and ensuring all materials are complete and accurate.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="prome-he15p0"
        viewBox="0 0 24 24"
      >
        <polyline points="16 18 22 12 16 6" stroke="currentColor" />
        <polyline points="8 6 2 12 8 18" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: 4,
    title: "Execute the Task",
    description:
      "Implement the agreed-upon legal actions or strategies. This may involve filing documents, representing the client in negotiations, or completing specific legal tasks to achieve the client's objectives. ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="prome-he15p0"
        viewBox="0 0 24 24"
      >
        <path d="M20 6 9 17l-5-5" stroke="currentColor" />
      </svg>
    ),
  },
];

const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const elementTopInView = (rect.top / windowHeight) * 100;
  const elementBottomInView = (rect.bottom / windowHeight) * 100;

  return elementBottomInView >= 40 && elementTopInView <= 45;
};

const CoreProcess: React.FC = () => {
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
    <div className=" text-black dark:text-white text-opacity-100 p-6">
      <div className="prome-j59otj my-24 ">
        <div className="prome-dhhden">
          <h2 className="prome-vnfh11">Our Core Process</h2>
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

export default CoreProcess;
