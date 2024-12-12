"use client";

import { useRouter } from "next/navigation";
import { CircleButton } from "../atoms/circle-button";
import { Input } from "../atoms/input";
import { useState } from "react";

export const SearchBar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchInput.trim() || isSearching) return;
    setIsSearching(true);

    try {
      await router.push(
        `/courses?query=${encodeURIComponent(searchInput.trim())}`
      );
    } catch (error) {
      console.error("Failed to navigate:", error);
    } finally {
        setTimeout(() => {
            setIsSearching(false);
        }, 1000)
      
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={`border-2 border-black rounded-full px-[2px] flex items-center ${
        isSearching ? "opacity-50 cursor-wait" : "opacity-100"
      }`}
    >
      <Input
        placeholder="Cari Kursus"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`${
          isSearching ? "bg-gray-100 cursor-not-allowed" : "bg-white"
        }`}
      />
      <CircleButton
        variant="blue"
        onClick={handleSearch}
      >
        {isSearching ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2.4a5.6 5.6 0 105.6 5.6h2.4a8 8 0 01-8 8z"
            ></path>
          </svg>
        ) : (
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </CircleButton>
    </div>
  );
};
