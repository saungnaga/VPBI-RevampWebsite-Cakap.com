// accordion

/**
  
  required data structure!

  [
    {
      id: "1",
      title: "Section 1",
      content: "Content for Section 1",
    }
  ];

 */

"use client";
import React, { useState } from "react";
import { IAccordionPropTypes } from "./types/accordion.types";

export const Accordion: React.FC<IAccordionPropTypes> = ({
  allowMultipleOpen = false,
  items = [
    {
      id: "item1",
      title: "Accordion Item 1",
      content: "This is the content for Accordion Item 1.",
    },
  ],
}) => {
  const [open, setOpen] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    if (allowMultipleOpen) {
      setOpen((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpen((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <>
      {items.map(({ id, title, content }) => (
        <div key={id} className={`rounded `}>
          <button
            className={`w-full flex justify-between items-center p-4 bg-white hover:bg-slate-100 border-b-2 `}
            onClick={() => toggleAccordion(id)}
          >
            <span
              className={`font-semibold text-gray-700 ${
                open.includes(id) && "text-[#00ADC6]"
              } transition-all duration-500`}
            >
              {title}
            </span>
            <span>+</span>
          </button>
          <div
            id={`accordion-content-${id}`}
            className={`overflow-hidden duration-500 ${
              open.includes(id) ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 text-gray-600 text-sm">{content}</div>
          </div>
        </div>
      ))}
    </>
  );
};
