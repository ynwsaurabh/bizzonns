"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Menus } from "./utils";
import Link from "next/link";

const MobMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const [activeHeading, setActiveHeading] = useState<number | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setActiveHeading(null);
  };

  const handleParentClick = (index: number) => {
    if (clicked === index) {
      
      setClicked(null);
      setActiveHeading(null);
    } else {
      setClicked(index);
      setActiveHeading(null); 
    }
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-[calc(100vh-4rem)] bg-white dark:bg-[#18181A] text-black dark:text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu = [], subMenuHeading = [] }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu.length > 0;
            const hasHeadings = subMenuHeading.length > 0;

            return (
              <li key={name}>
                <span
                  className="flex items-center justify-between p-4 hover:bg-gray-300 dark:hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => handleParentClick(i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </span>
                {isClicked && hasSubMenu && (
                  <div className="ml-5">
                    {hasHeadings ? (
                      subMenuHeading.map((heading, headingIndex) => (
                        <div key={heading}>
                          <span
                            className="p-2 w-[17rem] flex items-center capitalize hover:bg-gray-300 dark:hover:bg-white/5 rounded-md gap-x-2 cursor-pointer "
                            onClick={() =>
                              setActiveHeading(
                                activeHeading === headingIndex
                                  ? null
                                  : headingIndex
                              )
                            }
                          >
                            {heading}
                            <ChevronDown
                              className={`ml-auto transition-transform ${
                                activeHeading === headingIndex
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </span>
                          <motion.ul
                            initial="exit"
                            animate={
                              activeHeading === headingIndex ? "enter" : "exit"
                            }
                            variants={subMenuDrawer}
                            className="ml-5 w-[15.5rem]"
                          >
                            {subMenu
                              .filter(
                                (_, index) =>
                                  index % subMenuHeading.length === headingIndex
                              )
                              .map(({ name, icon: Icon, href }) => (
                                <Link key={name} href={href}>
                                  <li
                                    className="p-2 flex items-center hover:bg-gray-300 dark:hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                                    onClick={toggleDrawer}
                                  >
                                    <Icon size={17} />
                                    {name}
                                  </li>
                                </Link>
                              ))}
                          </motion.ul>
                        </div>
                      ))
                    ) : (
                      // Render subMenu directly if no subMenuHeading
                      <motion.ul
                        initial="exit"
                        animate="enter"
                        variants={subMenuDrawer}
                        className="ml-5"
                      >
                        {subMenu.map(({ name, icon: Icon, href }) => (
                          <Link key={name} href={href}>
                            <li
                              className="p-2 flex items-center hover:bg-gray-300 dark:hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                              onClick={toggleDrawer}
                            >
                              <Icon size={17} />
                              {name}
                            </li>
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
