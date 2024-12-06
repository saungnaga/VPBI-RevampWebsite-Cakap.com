import React, { ReactNode, useState } from "react";
import { CircleButton } from "../atoms/circle-button";
import Image from "next/image";

interface ICarouselPropTypes {
  children: ReactNode;
}

export const Carousel: React.FC<ICarouselPropTypes> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={`relative w-full overflow-hidden`}>
        <div
          className="flex w-full h-full transform transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center"
            >
              {slide}
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <CircleButton
            variant="blue"
            className="bg-opacity-70"
            onClick={handlePrev}
          >
            <Image
              src={"/icons/icon_right_arrow.svg"}
              width={20}
              height={20}
              alt="arrow-right"
            />
          </CircleButton>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <CircleButton
            variant="blue"
            className="bg-opacity-70"
            onClick={handleNext}
          >
            <Image
              src={"/icons/icon_left_arrow.svg"}
              width={20}
              height={20}
              alt="arrow-left"
            />
          </CircleButton>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};
