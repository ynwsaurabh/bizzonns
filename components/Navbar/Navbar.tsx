"use client";
import React, { FC, useEffect, useState } from "react";
import { Menus } from "./utils";
import MobMenu from "./MobMenu";
import DesktopMenuBiz from "./DesktopMenu-biz";
import Link from "next/link";

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
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
    <header className="h-16 z-50 text-[15px] fixed inset-0 flex items-center bg-white dark:bg-[#18181A] bg-opacity-40 dark:bg-opacity-40 backdrop-blur-md text-black dark:text-white">
      <nav className=" px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-x-3 z-[999] relative">
            <img src="/bizzonnsD.png" alt="" className="w-36 md:w-40 block dark:hidden" />
            <img src="/bizzonns.png" alt="" className="w-36 md:w-40 hidden dark:block" />
            {/* <h3 className="text-lg font-semibold">Bizzoons</h3> */}
          </div>
        </Link>

        <ul className=" gap-x-1 lg:flex lg:items-center hidden">
          {Menus.map((menu: { name: string; gridCols: number }) => (
            <DesktopMenuBiz menu={menu} key={menu.name} />
          ))}
        </ul>
        <div className="flex items-center gap-x-2 md:gap-x-5">
          <div className="flex flex-row-reverse items-center gap-x-2 md:gap-x-5">
          <button
            onClick={toggleTheme}
            className="text-white focus:outline-none"
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
              className="lucide lucide-sun h-4 w-4 text-gray-600 dark:text-white"
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
          <Link href="/contact">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center"
            >
              Request Callback
            </button>
          </Link>
          </div>
          <div className="xl:hidden mt-[8px]">
            <MobMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
