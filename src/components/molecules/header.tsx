import React from "react";
import Button from "../atoms/button";
import { Input } from "../atoms/input";
import { CircleButton } from "../atoms/circle-button";
import HamburgerMenu from "../atoms/hamburgerMenu";

export const Header = () => {
  return (
    <header className="bg-[#ffffff] text-black sticky top-0 z-10 flex justify-between py-4 md:px-20 sm:px-8 px-4 items-center h-[72px] border-b-2 shadow-sm">
      <div className="flex gap-8">
        <div className="flex gap-3 items-center">
          <a href="/">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/svg/cakap-logo.svg"
              alt="cakap logo"
            />
          </a>
        </div>
        <nav className="lg:flex hidden gap-3">
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="">Karier</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="/courses">Kursus</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="">Kontak</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="">Bantuan</a>
        </nav>
      </div>
      <div className="border-2 border-black rounded-full px-[2px] flex items-center">
        <Input placeholder="Cari Kursus" />
        <CircleButton variant="blue">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </CircleButton>
      </div>
      <div className="md:flex gap-2 hidden">
        <Button>Masuk</Button>
        <Button variant="blue">Daftar</Button>
      </div>
      <div className="lg:hidden">
            <HamburgerMenu />
          </div>
    </header>
  );
};
