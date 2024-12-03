import React from "react";
import Button from "../atoms/button";
import { Input } from "../atoms/input";
import { CircleButton } from "../atoms/circle-button";

export const Header = () => {
  return (
    <header className="bg-[#ffffff] text-black sticky top-0 z-10 flex justify-between py-4 md:px-20 sm:px-8 px-4 items-center h-[72px] border-b-2 shadow-sm">
      <div className="flex gap-8">
        <div className="flex gap-3 items-center">
          <svg
            className="lg:hidden"
            width="16px"
            height="16px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Icon-Set-Filled"
                transform="translate(-212.000000, -888.000000)"
                fill="#000000"
              >
                <path
                  d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z"
                  id="hamburger"
                ></path>
              </g>
            </g>
          </svg>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/svg/cakap-logo.svg"
            alt="cakap logo"
          />
        </div>
        <nav className="lg:flex hidden gap-3">
          <a href="">Karier</a>
          <a href="">Kursus</a>
          <a href="">Kontak</a>
          <a href="">Bantuan</a>
        </nav>
      </div>
      <div className="border-2 border-black rounded-full px-[2px] flex items-center">
        <Input placeholder="Cari Kursus"/>
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
    </header>
  );
};
