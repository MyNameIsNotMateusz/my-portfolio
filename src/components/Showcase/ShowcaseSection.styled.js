import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background2};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  margin: 0 auto;
  max-width: 2000px;
  padding: 120px 60px 20px 60px;

  @media (max-width: 1200px) {
    row-gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 80px 40px 15px 40px;
  }

  @media (max-width: 480px) {
    padding: 60px 30px 15px 30px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: auto;
  width: 55%;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const SlideBox = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  line-height: 1.6;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  @media (max-width: 1200px) {
    column-gap: 15px;
  }
`;

export const SliderButtonRight = styled.button`
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

export const SliderButtonLeft = styled.button`
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
