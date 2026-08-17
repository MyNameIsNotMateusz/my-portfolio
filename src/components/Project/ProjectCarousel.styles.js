import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const CarouselViewport = styled.div`
  position: relative;
  height: auto;
  width: 55%;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const SlidesContainer = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  column-gap: 20px;

  @media (max-width: 1200px) {
    column-gap: 15px;
  }
`;

export const NextButton = styled.button`
  position: relative;
  background-color: #f6f6f6;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  transition: all 0.6s ease;

  svg {
    width: 25px;
    position: absolute;
    display: flex;
    color: #000;
    top: 50%;
    transform: translate(7px, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    cursor: pointer;

    svg {
      transform: translate(10px, -50%);
    }
  }
`;

export const PreviousButton = styled.button`
  position: relative;
  background-color: #f6f6f6;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  transition: all 0.6s ease;

  svg {
    width: 25px;
    position: absolute;
    color: #000;
    top: 50%;
    right: 0;
    transform: translate(-7px, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    cursor: pointer;

    svg {
      transform: translate(-10px, -50%);
    }
  }
`;
