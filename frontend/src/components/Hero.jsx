import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    "https://i.postimg.cc/hvYR997M/Beige-and-Brown-Minimalist-Diwali-Fashion-Sale-Facebook-Ad.png",
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
      <div className="w-screen h-[60vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          ref={sliderRef}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-screen h-full flex-shrink-0 relative">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-contain sm:object-cover"
              />
              <div className="absolute inset-0 flex right-16 flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl md:text-5xl  ">ESSENCE COUTURE</h1>
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
