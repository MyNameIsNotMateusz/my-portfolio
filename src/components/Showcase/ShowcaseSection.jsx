import { useState, useEffect, useRef } from "react";
import {
  SectionWrapper,
  Content,
  SliderWrapper,
  SlideBox,
  ButtonsWrapper,
  SliderButtonRight,
  SliderButtonLeft,
  TextWrapper,
  Text,
} from "./ShowcaseSection.styled";
import dashboard from "../../assets/images/dashboard.png";
import palletCreator from "../../assets/images/palletCreator.png";
import repackPallet from "../../assets/images/repackPallet.png";
import plannedDelivery from "../../assets/images/plannedDelivery.png";
import inbound from "../../assets/images/inbound.png";
import outbound from "../../assets/images/outbound.png";
import recipes from "../../assets/images/recipes.png";

export const ShowcaseSection = ({ sectionRef }) => {
  const slides = [
    {
      img: dashboard,
      text: "Clear main view with navigation, tables in tabs, and quick access to warehouse processes.",
    },
    {
      img: palletCreator,
      text: "Pallet Creator — create new pallets from components coming from the production line.",
    },
    {
      img: repackPallet,
      text: "Repack Pallet — split existing pallets into smaller ones with automatic new IDs.",
    },
    {
      img: plannedDelivery,
      text: "Planned Delivery — plan deliveries to the warehouse with a full list of upcoming items.",
    },
    {
      img: inbound,
      text: "Inbound — receive goods into the warehouse with data validation and create new pallets.",
    },
    {
      img: outbound,
      text: "Outbound — send goods out of the warehouse and prepare pallets for transport.",
    },
    {
      img: recipes,
      text: "Recipes Manager — create recipes combining different components into finished products.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderWrapperRef = useRef(null);
  const slideBoxRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderWrapperRef.current) {
        setSlideWidth(sliderWrapperRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (slideBoxRef.current) {
      slideBoxRef.current.style.transform = `translateX(-${
        index * slideWidth
      }px)`;
    }
  }, [index, slideWidth]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  return (
    <SectionWrapper ref={sectionRef}>
      <Content>
        <SliderWrapper ref={sliderWrapperRef}>
          <SlideBox ref={slideBoxRef}>
            {slides.map((slide, idx) => (
              <img
                key={idx}
                className="slider-img"
                src={slide.img}
                alt={`Slide ${idx + 1}`}
              />
            ))}
          </SlideBox>
        </SliderWrapper>

        <TextWrapper>
          <Text>{slides[index].text}</Text>
        </TextWrapper>

        <ButtonsWrapper>
          <SliderButtonLeft onClick={handlePrev}>
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
          </SliderButtonLeft>

          <SliderButtonRight onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </SliderButtonRight>
        </ButtonsWrapper>
      </Content>
    </SectionWrapper>
  );
};
