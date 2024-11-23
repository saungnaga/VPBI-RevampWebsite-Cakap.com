// button

import React from "react";
import { IButtonPropTypes } from "./types/button,types";

export const Button: React.FC<IButtonPropTypes> = ({
  label,
  onClick,
  disabled = false,
  variant = "white",
  size = "small",
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

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
