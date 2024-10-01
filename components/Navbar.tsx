"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NavbarOld() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else if(isOpen){
      setSticky(false);
    }
    else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    // Initialize darkMode based on the current theme
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setDarkMode(darkModeEnabled);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <>
      <nav
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-full px-8 md:px-28 mx-auto py-3 flex justify-between items-center">
          <div className="h-[30px] md:h-[50px] flex items-center w-[100%] justify-between">
            {/* Logo */}
            <div className="flex items-center justify-start h-full">
              <img
                src="/logo.svg"
                className="md:max-w-[160px] h-full md:max-h-[44px] object-contain"
                alt="Logo"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center h-full">
              <ul className=" flex font-bold space-x-5 h-full items-center">
                <li>
                  <a href="/" className="text-black px-4">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-black px-4">
                    About
                  </a>
                </li>
                <li
                  className="w-full h-full flex text-center relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="text-black dark:text-white w-full text-start flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    Our Services
                    <svg
                      className={`w-4 ml-3 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="26px"
                      height="16.043px"
                      viewBox="57 35.171 26 16.043"
                      enable-background="new 57 35.171 26 16.043"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                    >
                      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div
                      className="leading-[3] items-center bg-white text-black mt-2 backdrop-blur absolute w-[350px] rounded-2xl left-0 top-10 shadow-md z-10"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div
                        className=" ml-3 text-black dark:text-white flex flex-col items-start"
                        onMouseEnter={() => setIsSubDropdownOpen(true)}
                      >
                        <Link href="/services/revenue-cycle-management">
                          <span className="flex items-center">
                            <svg
                              className="ast-arrow-svg mr-2" // Added margin for spacing
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="10px"
                              height="10px"
                              viewBox="57 35.171 26 16.043"
                              style={{
                                transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                              }}
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                            </svg>
                            Revenue Cycle Management
                            <svg
                              className={`w-4 h-4 ml-[35px] transition-transform duration-200 ${
                                isSubDropdownOpen ? "rotate-180" : "rotate-0"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              x="0px"
                              y="0px"
                              width="26px"
                              height="16.043px"
                              viewBox="57 35.171 26 16.043"
                              enable-background="new 57 35.171 26 16.043"
                            >
                              <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                            </svg>
                          </span>
                        </Link>
                        {isSubDropdownOpen && (
                          <div className="mt-2 backdrop-blur">
                            <Link
                              href="/services/appointment-scheduling-eligibility-verification"
                              className=" ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Appointment Scheduling & Eligibility
                                Verification
                              </span>
                            </Link>

                            <Link
                              href="/services/prior-authorization-verification"
                              className=" ml-6 block text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Prior Authorization Verification
                              </span>
                            </Link>
                            <Link
                              href="/services/billing-accounts-receivable"
                              className="block ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Billing & Accounts Receivable
                              </span>
                            </Link>
                            <Link
                              href="/services//medical-coding"
                              className="block ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Medical Coding
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/services/payer-solutions"
                        className=" ml-3 block text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Payer Solutions
                        </span>
                      </Link>
                      <Link
                        href="/services/provider-credentialing"
                        className="block ml-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Provider Credentialing
                        </span>
                      </Link>
                      <Link
                        href="/services/patient-billing-collection-support"
                        className="block ml-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Patient Billing & Collection Support
                        </span>
                      </Link>
                    </div>
                  )}
                </li>
                <li>
                  <a href="/contact" className="text-black px-4">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Enquiry Button */}
            <div className="hidden md:flex items-center justify-end h-full">
              <a
                href="/contact"
                className="bg-black text-white rounded-full py-2 px-4 flex items-center"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                </svg>
                <span className="ml-2">Enquire Now</span>
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun h-4 w-4 dark:text-neutral-500 text-neutral-500"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <span className="sr-only">Toggle theme</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="leading-[2.6] items-center">
            <ul className="bg-white dark:bg-black text-black dark:text-white absolute h-auto w-auto min-w-[50%] max-w-[90%] top- rounded-[20px] m-5 p-5 shadow-lg right-0 z-10 items-center flex flex-col justify-evenly list-none">
              <li className="w-full">
                <Link
                  href="/"
                  className="navLink"
                  style={{ cursor: "none" }}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/about"
                  className="navLink"
                  style={{ cursor: "none" }}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li className="w-full relative">
                <button
                  className="text-black dark:text-white w-full text-start flex items-center"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Our Services
                  <svg
                    className={`w-4 h-4 ml-[186px] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="26px"
                    height="16.043px"
                    viewBox="57 35.171 26 16.043"
                    enable-background="new 57 35.171 26 16.043"
                  >
                    <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                  </svg>
                </button>

                {isDropdownOpen && (
                    <div className="mt-2 backdrop-blur">
                      <div
                        className=" ml-3 text-black dark:text-white flex flex-col items-start"
                        onClick={() => setIsSubDropdownOpen(!isSubDropdownOpen)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Revenue Cycle Management
                          <svg
                            className={`w-4 h-4 ml-[35px] transition-transform duration-200 ${
                              isSubDropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="26px"
                            height="16.043px"
                            viewBox="57 35.171 26 16.043"
                            enable-background="new 57 35.171 26 16.043"
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                        </span>
                        {isSubDropdownOpen && (
                          <div className="mt-2 backdrop-blur">
                            <Link
                              href="/services/mustard"
                              className=" ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Revenue Cycle Management
                              </span>
                            </Link>

                            <Link
                              href="/services/mustard"
                              className=" ml-6 block text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Payer Solutions
                              </span>
                            </Link>
                            <Link
                              href="/services/mustard"
                              className="block ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Provider Credentialing
                              </span>
                            </Link>
                            <Link
                              href="/services/mustard"
                              className="block ml-6 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex items-center">
                                <svg
                                  className="ast-arrow-svg mr-2" // Added margin for spacing
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  x="0px"
                                  y="0px"
                                  width="10px"
                                  height="10px"
                                  viewBox="57 35.171 26 16.043"
                                  style={{
                                    transform:
                                      "translate(0, -2px) rotate(270deg)", // Transformation applied
                                  }}
                                >
                                  <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                                </svg>
                                Patient Billing & Collection Support
                              </span>
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/services/mustard"
                        className=" ml-3 block text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Payer Solutions
                        </span>
                      </Link>
                      <Link
                        href="/services/mustard"
                        className="block ml-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Provider Credentialing
                        </span>
                      </Link>
                      <Link
                        href="/services/mustard"
                        className="block ml-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center">
                          <svg
                            className="ast-arrow-svg mr-2" // Added margin for spacing
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0px"
                            y="0px"
                            width="10px"
                            height="10px"
                            viewBox="57 35.171 26 16.043"
                            style={{
                              transform: "translate(0, -2px) rotate(270deg)", // Transformation applied
                            }}
                          >
                            <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
                          </svg>
                          Patient Billing & Collection Support
                        </span>
                      </Link>
                    </div>
                  )}
              </li>
              <li className="w-full">
                <Link
                  href="/contact"
                  className="navLink"
                  style={{ cursor: "none" }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          // <div>
          //   <ul className="bg-white dark:bg-black text-black dark:text-white mt-[56px] absolute h-[81vh] w-[50vw] top-0 right-0 z-10 items-center flex flex-col justify-evenly list-none">
          //   <li>
          //       <Link
          //       href="/"
          //         className="navLink"
          //         style={{ cursor: "none" }}
          //         onClick={() => setIsOpen(false)}
          //       >
          //         Home
          //       </Link>
          //     </li>
          //     <li>
          //       <Link
          //       href="/services"
          //         className="navLink"
          //         style={{ cursor: "none" }}
          //         onClick={() => setIsOpen(false)}
          //       >
          //         services
          //       </Link>
          //     </li>
          //     <li>
          //       <Link
          //       href="/about"
          //         className="navLink"
          //         style={{ cursor: "none" }}
          //         onClick={() => setIsOpen(false)}
          //       >
          //         About
          //       </Link>
          //     </li>
          //     <li>
          //       <Link
          //       href="/contact"
          //         className="navLink"
          //         style={{ cursor: "none" }}
          //         onClick={() => setIsOpen(false)}
          //       >
          //         Contact
          //       </Link>
          //     </li>
          //   </ul>
          //   <div className="bg-white dark:bg-black text-black dark:text-white flex flex-row h-[13vh] justify-evenly absolute p-[2rem] w-[50vw] z-10 top-[87vh] right-0">
          //     <Link
          //       href="https://facebook.com"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300"
          //     >
          //       <FaFacebookF className="h-5 w-5" />
          //     </Link>
          //     <Link
          //       href="https://instagram.com"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-300"
          //     >
          //       <FaInstagram className="h-5 w-5" />
          //     </Link>
          //     <Link
          //       href="https://linkedin.com"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500"
          //     >
          //       <FaLinkedinIn className="h-5 w-5" />
          //     </Link>
          //   </div>
          // </div>
        )}
      </nav>
    </>
  );
}
