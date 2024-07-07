"use client";
import { useState, useEffect } from "react";
import useCarouselStore from "../stores/useCarouselStore";
import Image from "next/image";

const Carousel = ({ slides, darkMode }) => {
  const { currentSlide, setCurrentSlide } = useCarouselStore();
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides, setCurrentSlide]);

  return (
    <div
      className={`relative w-full h-[90vh] mt-[11vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] ${
        darkMode ? "bg-gray-600" : "bg-[#F5F7FA]"
      } overflow-hidden `}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-500" //max-w-[1086px] mx-auto
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col-reverse gap-6 sm:gap-0 justify-center items-center sm:flex-row px-3 sm:px-10 md:px-20 lg:px-32 lg:pl-[10rem]"
          >
            <div className="flex flex-col justify-center text-center sm:text-start items-center sm:items-start w-[65%]">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-[#1e272c]">
                {slide.title1}
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mt-0.5 text-[#49A74B]">
                {slide.title2}
              </h1>
              <p
                className={`font-medium ${
                  darkMode ? "text-gray-200" : "text-[#89939E]"
                } text-sm sm:text-base font-medium font-sans mt-2 sm:mt-4`}
              >
                {slide.desc}
              </p>
              <button className="btn bg-[#49A74B] hover:bg-[#237D31] text-sm sm:text-base px-5 py-2 mt-2 sm:mt-5 rounded-md text-white">
                {slide.textBtn}
              </button>
            </div>
            <div className="flex flex-col justify-center items-center w-[60%] sm:w-[35%]">
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-[100%] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? "bg-[#49A74B]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
