"use client";
import React, { FC, useState } from "react";
import { Menus } from "./utils";
import MobMenu from "./MobMenu";
import DesktopMenuBiz from "./DesktopMenu-biz";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="h-16 z-40 text-[15px] fixed inset-0 flex items-center bg-[#18181A] bg-opacity-10 backdrop-blur-md text-white">
      <nav className=" px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-x-3 z-[999] relative">
            <img src="/logo.webp" alt="" className="size-8" />
            <h3 className="text-lg font-semibold">Bizzonns</h3>
          </div>
        </Link>

        <ul className=" gap-x-1 lg:flex lg:items-center hidden">
          {Menus.map((menu: { name: string; gridCols: number }) => (
            <DesktopMenuBiz menu={menu} key={menu.name} />
          ))}
        </ul>
        <div className="flex items-center gap-x-5">
          <Link href="/contact">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center"
            >
              Book Appointment
            </button>
          </Link>
          <div className="lg:hidden">
            <MobMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
