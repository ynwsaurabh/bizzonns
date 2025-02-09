'use client'
import { useState, FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubMenu {
  icon?: FC;
  name: string;
  desc: string;
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

const DesktopMenu: FC<DesktopMenuProps> = ({ menu }) => {
  const [isHover, toggleHover] = useState<boolean>(false);
  const toggleHoverMenu = (): void => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const hasSubMenu: boolean = menu.subMenu ? menu.subMenu.length > 0 : false;

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className=" flex flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="absolute top-[4.2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop-blur-md bg-white/[0.04]"
          initial="exit"
          animate={isHover ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? 'grid-cols-3'
                : menu.gridCols === 2
                ? 'grid-cols-2'
                : 'grid-cols-1'
            }`}
          >
            {hasSubMenu &&
              menu.subMenu?.map((submenu: SubMenu, i: number) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-[#2a2a2a]">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <div className="flex flex-center gap-x-4 group/menubox">
                    <div className="bg-black dark:bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-gray-500 dark:group-hover/menubox:bg-white text-white dark:group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold text-black dark:text-white">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
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

export default DesktopMenu;