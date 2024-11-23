import { ICircleButtonPropTypes } from "./types/circle-button.types";

export const Sosmed: React.FC<ICircleButtonPropTypes> = ({
  icon: Icon,
  variant,
  className = "",
  iconClassName = "",
}) => {
  const defaultStyle =
    "w-10 h-10 rounded-full flex justify-center items-center";
  const variants = {
    blue: "border border-[#00ADC6] hover:border-[#00ADC6] text-white hover:bg-[#00ADC6] hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
    black:
      "border border-[#000000] hover:border-[#000000] text-white hover:bg-[#000000] hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
  };
  return (
    <button className={`${defaultStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon className={iconClassName} />}
    </button>
  );
};
