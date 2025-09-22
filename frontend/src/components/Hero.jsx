import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    "https://imgs.search.brave.com/JZLMs1CuNq_UnJiXSoTcJfYXisr13k6VtCcHANJ372o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/ODYvOTIwNy81NzAz/L2ZpbGVzL25hdnJh/dHJpLXNwZWNpYWwu/anBnP3Y9MTc0MzE1/ODA3MQ",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
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
      <div className="w-screen h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          ref={sliderRef}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-screen h-full flex-shrink-0 relative">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
                <h1 className="text-4xl md:text-6xl ">ESSENCE COUTURE</h1>
                <Link to="/collection">
                  <button className="mt-4 px-6 py-2 md:px-8 md:py-3 text-lg border border-white text-white bg-transparent  hover:bg-white hover:text-black transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
