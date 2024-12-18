import React, { useState } from "react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  // Handle next and previous slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full">
      {/* Carousel images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move to the next slide
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className=" flex-shrink-0 w-full h-72 sm:h-[300px] md:h-[400px] "
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-[40%] left-0 flex items-center justify-center   bg-red-300  text-white rounded-full  p-2 hover:bg-red-400 hover:text-white
        h-11 w-11
        "
      >
        <span className="text-2xl flex justify-center text-center">&lt;</span>
      </button>

      {/* Right Button */}
      <button
        onClick={goToNextSlide}
        className="absolute top-[40%] right-0 flex items-center justify-center   bg-red-100  text-white rounded-full  p-2 hover:bg-red-400 hover:text-white h-11 w-11"
      >
        <span className="text-2xl ">&gt;</span>
      </button>

      {/* Carousel indicators (optional) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
