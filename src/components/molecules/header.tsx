import React, { useState } from "react";
import Button from "../atoms/button";
import HamburgerMenu from "../atoms/hamburgerMenu";
import { SearchBar } from "./searchBar";

export const Header = () => {
  return (
    <header className="bg-[#ffffff] text-black sticky top-0 z-20 flex justify-between py-4 md:px-20 sm:px-8 px-4 items-center h-[72px] border-b-2 shadow-sm">
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
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="/careers">Karier</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="/courses">Kursus</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="/contact">Kontak</a>
          <a className="hover:bg-gray-100 p-1 rounded-xl hover:scale-105" href="/help">Bantuan</a>
        </nav>
      </div>
      <SearchBar />
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
