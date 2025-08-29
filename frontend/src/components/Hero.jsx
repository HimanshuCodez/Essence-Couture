import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const slides = [
    "https://wforwoman.com/cdn/shop/files/The_Onam_Edit-banner.jpg?v=1755604463&width=1500",
    "https://wforwoman.com/cdn/shop/files/end_of_season_sale_banner.jpg?v=1749802725&width=1500",
    "https://wishfulbyw.com/cdn/shop/files/banner_copy_4.jpg?v=1749821233&width=1500",
    "https://wishfulbyw.com/cdn/shop/files/banner_6.jpg?v=1730876675&width=1500",
    "https://shopforaurelia.com/cdn/shop/files/Aurelia-01.jpg?v=1746185938&width=1500",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-screen h-[40vh] sm:h-[60vh] lg:h-screen overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          ref={sliderRef}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-screen h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
