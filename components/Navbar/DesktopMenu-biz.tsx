"use client";
import { useState, FC, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SubMenu {
  icon?: FC;
  name: string;
  href: string;
}

interface Menu {
  name: string;
  subMenu?: SubMenu[];
  subMenuHeading?: string[];
  gridCols: number;
}

interface DesktopMenuProps {
  menu: Menu;
}

const DesktopMenuBiz: FC<DesktopMenuProps> = ({ menu }) => {
  const [isHover, setHover] = useState<boolean>(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    if (submenuRef.current && !submenuRef.current.matches(":hover")) {
      setHover(false);
    }
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu: boolean = menu.subMenu ? menu.subMenu.length > 0 : false;

  return (
    <motion.li
      className="group/link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={menu.name}
    >
      <span className="flex flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          ref={submenuRef}
          className="absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop-blur-md bg-white dark:bg-[#18181A]"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu?.map((submenu: SubMenu, i: number) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-gray-500">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <div className="flex flex-center gap-x-1a group/menubox">
                    {/* <div>{submenu.icon && <submenu.icon />}</div> */}
                    <div>
                      <Link href={submenu.href}>
                        <h6 className="font-semibold text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
                          {submenu.name}
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenuBiz;
