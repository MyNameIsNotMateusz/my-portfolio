import { useState, useEffect, useRef } from "react";
import {
  CarouselViewport,
  SlidesContainer,
  CarouselControls,
  PreviousButton,
  NextButton,
} from "./ProjectCarousel.styled";

export const ProjectCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderRef = useRef(null);
  const slidesRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const startAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);

    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev >= slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(autoSlideIntervalRef.current);
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide * slideWidth
        }px)`;
    }
  }, [currentSlide, slideWidth]);

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

    startAutoSlide();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= slides.length - 1 ? 0 : prev + 1
    );

    startAutoSlide();
  };

  return (
    <CarouselViewport ref={sliderRef}>
      <SlidesContainer ref={slidesRef}>
        {slides.map((slide, index) => (
          <img
            key={index}
            className="slider-img"
            src={slide.img}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </SlidesContainer>

      <CarouselControls>
        <PreviousButton onClick={handlePreviousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </PreviousButton>

        <NextButton onClick={handleNextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 1 1 1.06 1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </NextButton>
      </CarouselControls>
    </CarouselViewport>
  );
};