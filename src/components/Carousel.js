import React, { useState } from 'react';
import CarouselItem from './CarouselItem'; // Import CarouselItem component
import { CarouselItems } from '../helpers/CarouselList';

function Carousel() {
    console.log('Carousel component rendered');

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedItemIndex((prevIndex) =>
      prevIndex === 0 ? CarouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedItemIndex((prevIndex) =>
      prevIndex === CarouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      {CarouselItems.map((item, index) => (
        <CarouselItem
          key={index}
          image={item.image}
          name={item.name}
          desc={item.desc}
          active={index == selectedItemIndex}
        />
      ))}

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {CarouselItems.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === selectedItemIndex ? 'bg-black' : 'bg-gray-300'}`}
            aria-current={index === selectedItemIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        {/* Previous arrow SVG */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        {/* Next arrow SVG */}
      </button>
    </div>
  );
}

export default Carousel;
