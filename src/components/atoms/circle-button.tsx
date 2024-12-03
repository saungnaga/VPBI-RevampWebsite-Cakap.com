import { ICircleButtonPropTypes } from "./types/circle-button.types";

export const CircleButton: React.FC<ICircleButtonPropTypes> = ({
  children,
  variant,
  className = "",
}) => {
  const defaultStyle =
    "p-1 rounded-full flex justify-center items-center";
  const variants = {
    blue: "border border-[#00ADC6] hover:border-[#00ADC6] text-white bg-[#00ADC6] hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
    black:
      "border border-[#000000] hover:border-[#000000] text-white bg-[#000000] hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
  };
  return (
    <button className={`${defaultStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
