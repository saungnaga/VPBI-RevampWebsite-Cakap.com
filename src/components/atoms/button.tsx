// button

import React from "react";
import { IButtonPropTypes } from "./types/button.types";
import Link from "next/link";

export const Button: React.FC<IButtonPropTypes> = ({
  children,
  disabled = false,
  variant = "white",
  size = "small",
  href,
}) => {
  const baseClasses =
    "inline-flex item-center justify-center rounded-xl focus:outline-none transition duration-300 hover:scale-95 hover:opacity-80";

  const variants = {
    white: "bg-white text-black",
    blue: "bg-[#00ADC6] text-white",
    green: "bg-[#10DC1E] text-black",
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    large: "px-12 py-2 text-2xl",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
    <Link 
      href={disabled ? "#" : href}
      passHref
      onClick={(e) => disabled && e.preventDefault()}
    >
      <a className={classes} aria-disabled={disabled ? "true" : "false"}>
        {children}
      </a>
    </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
