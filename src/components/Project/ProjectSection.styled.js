import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background2};
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 2000px;
  padding: 0 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 40px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  width: 100%;
  background-color: ${({ theme }) => theme.background1};
  padding: 35px;
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const ProjectTitle = styled.h2`
  font-size: ${fontSizes.large};
  color: ${({ theme }) => theme.text1};
  width: 100%;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.mediumLarge};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.regular};
  }
`;

export const ProjectSubtitle = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  line-height: 1.6;

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.small};
  }
`;

export const ProjectCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background2};
  padding: 35px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 24px;
  column-gap: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.primary : theme.background2};
  font-size: ${fontSizes.small};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.background2 : theme.primary};
  font-weight: 600;
  transition: all 0.3s ease;

  > svg {
    height: 20px;
    color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.background2 : theme.primary};
  }

  &:hover {
    background-color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.background2 : theme.primary};
    color: ${({ theme, $variant }) =>
      $variant === "primary" ? theme.primary : theme.background2};

    > svg {
      color: ${({ theme, $variant }) =>
        $variant === "primary" ? theme.primary : theme.background2};
    }
  }
`;

export const CarouselViewport = styled.div`
  position: relative;
  height: auto;
  width: 55%;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const SlidesContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
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
  justify-content: center;
  column-gap: 30px;

  @media (max-width: 1200px) {
    column-gap: 15px;
  }
`;

export const CarouselButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;

  svg {
    height: 40px;
    color: ${({ theme }) => theme.primary};
  }
`;
