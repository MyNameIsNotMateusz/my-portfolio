import styled, { keyframes } from "styled-components";
import { fontSizes } from "../../styles/variables";
import { darken } from "polished";

export const SectionWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background1};
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  display: flex;
  padding: 120px 60px;

  @media (max-width: 1200px) {
    padding: 100px 60px;
  }

  @media (max-width: 768px) {
    padding: 80px 40px;
    flex-direction: column;
    row-gap: 50px;
  }

  @media (max-width: 480px) {
    padding: 60px 30px;
    row-gap: 30px;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 1200px) {
    row-gap: 25px;
  }

  @media (max-width: 768px) {
    row-gap: 20px;
  }
`;

export const HeroTitleStyled = styled.h1`
  font-size: ${fontSizes.xxlarge};
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.text1};
  margin: 0;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.xlplus};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.xlarge};
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: ${fontSizes.xlargeMid};
  }
`;

export const HeroSubtitleStyled = styled.h2`
  font-size: ${fontSizes.mediumLarge};
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.text1};
  margin: 0;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.medium};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.small};
    line-height: 1.7;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 20px;

  @media (max-width: 1200px) {
    column-gap: 15px;
  }

  @media (max-width: 768px) {
    column-gap: 10px;
  }

  @media (max-width: 480px) {
    row-gap: 8px;
    flex-direction: column;
  }
`;

export const ResumeButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  font-size: ${fontSizes.medium};
  border-radius: 100px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderColor1};
    background-color: #ffffff;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 768px) {
    padding: 13px 20px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 9px 13px;
  }
`;

export const DemoButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  padding: 15px 25px;
  font-size: ${fontSizes.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.borderColor1};
  border-radius: 100px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  background-color: #ffffff;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;

    @media (max-width: 1200px) {
      width: 22px;
      height: 22px;
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderColor2};
    background-color: ${({ theme }) => theme.primary};
    color: #fff;

    svg {
      fill: #fff;
    }
  }

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 768px) {
    padding: 13px 20px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 9px 13px;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: start;
    min-height: 35px;
  }
`;

const fromLeft = keyframes`
  0% { z-index: 20; opacity: 0; transform: translate(-20px, -6px); }
  20% { z-index: 10; opacity: 1; transform: translate(0, 0); }
  40% { z-index: 9; transform: translate(0, 4px); }
  60% { z-index: 8; transform: translate(0, 8px); }
  80% { z-index: 7; opacity: 1; transform: translate(0, 12px); }
  100% { z-index: 5; transform: translate(0, 30px); opacity: 0; }
`;

const fromRight = keyframes`
  0% { z-index: 20; opacity: 0; transform: translate(20px, -6px); }
  20% { z-index: 10; opacity: 1; transform: translate(0, 0); }
  40% { z-index: 9; transform: translate(0, 4px); }
  60% { z-index: 8; transform: translate(0, 8px); }
  80% { z-index: 7; opacity: 1; transform: translate(0, 12px); }
  100% { z-index: 5; transform: translate(0, 30px); opacity: 0; }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(3);

  @media (max-width: 768px) {
    transform: scale(2);
    margin-right: 10%;
  }

  @media (max-width: 480px) {
    transform: scale(1.5);
  }
`;

export const Box = styled.div`
  position: relative;
  opacity: 0;

  &.box-1 {
    animation: ${fromLeft} 4s infinite;
  }
  &.box-2 {
    animation: ${fromRight} 4s infinite;
    animation-delay: 1s;
  }
  &.box-3 {
    animation: ${fromLeft} 4s infinite;
    animation-delay: 2s;
  }
  &.box-4 {
    animation: ${fromRight} 4s infinite;
    animation-delay: 3s;
  }
`;

export const SideLeft = styled.div`
  position: absolute;
  background-color: ${({ theme }) => darken(0.2, theme.primary)};
  width: 19px;
  height: 5px;
  transform: skew(0deg, -25deg);
  top: 14px;
  left: 10px;
`;

export const SideRight = styled.div`
  position: absolute;
  background-color: ${({ theme }) => darken(0.1, theme.primary)};
  width: 19px;
  height: 5px;
  transform: skew(0deg, 25deg);
  top: 14px;
  left: -9px;
`;

export const SideTop = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.primary};
  width: 20px;
  height: 20px;
  transform: rotate(45deg) skew(-20deg, -20deg);
`;
