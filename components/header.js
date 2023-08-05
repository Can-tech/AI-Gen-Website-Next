import Link from "next/link";
import { useState } from "react";

import React from "react";

const ModalComponent = () => {
  return (
    <div className="absolute rounded-lg bg-slate-400 top-20 right-0 z-10 md:h-[400px] md:w-[300px] h-[500px] w-[400px]">
      <ul className="list-none flex flex-col gap-6 mt-5 items-center text-whitesmoke-200">
        <li className="relative leading-[22px]">HOME</li>
        <li className="relative leading-[22px]">ABOUT US</li>
        <li className="relative leading-[22px]">OUR AGENTS</li>
        <li className="relative leading-[22px] font-semibold">PROPERTIES</li>
        <li className="relative leading-[22px]">GALLERY</li>
        <li className="relative leading-[22px]">BLOG</li>
        <li className="relative leading-[22px]">CONTACT US</li>
        <li className="relative leading-[22px]">SEARCH</li>
      </ul>
    </div>
  );
};

const Header = ({ hamburger }) => {
  const [modal, setModal] = useState(false);
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[8px]"
        >
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative leading-[22px] font-semibold">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          {!hamburger && (
            <button
              onClick={() => setModal((prev) => !prev)}
              className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex"
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
      {modal && <ModalComponent />}
    </header>
  );
};

export default Header;
