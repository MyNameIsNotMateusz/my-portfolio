import { useState, useEffect, useRef } from "react";
import {
  CarouselViewport,
  SlidesContainer,
  CarouselControls,
  CarouselButton,
} from "./ProjectSection.styled";

export const ProjectCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderRef = useRef(null);
  const slidesRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSlideWidth(sliderRef.current.getBoundingClientRect().width);
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
        <CarouselButton onClick={handlePreviousSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>

        </CarouselButton>

        <CarouselButton onClick={handleNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>

        </CarouselButton>
      </CarouselControls>
    </CarouselViewport>
  );
};