import React, { useState } from "react";
import colab from "../assets/Colab.PNG";
import firstWebsite from "../assets/first-website.png";
import AITag from "../assets/AI-Intro.PNG";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: colab,
      title: "Colab Project",
      text: "Description of the Colab project.",
    },
    {
      image: firstWebsite,
      title: "First Website",
      text: "Description of the first website project.",
    },
    {
      image: AITag,
      title: "AI Tagging",
      text: "Description of the AI tagging project.",
    },
  ];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    const index = activeIndex > 0 ? activeIndex - 1 : slides.length - 1;
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    const index = activeIndex < slides.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(index);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full md:w-1/2 h-auto justify-center mx-auto"
      data-carousel="static"
    >
      <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={slide.image}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      <div className="mt-4 p-4 bg-gray-800 bg-opacity-75 text-white rounded-lg">
        <h2 className="text-lg font-bold">{slides[activeIndex].title}</h2>
        <p>{slides[activeIndex].text}</p>
      </div>
    </div>
  );
}

export default Carousel;
