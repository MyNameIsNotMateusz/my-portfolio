import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background2};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  margin: 0 auto;
  max-width: 2000px;
  padding: 100px 60px;

  @media (max-width: 1200px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 65px 40px;
    row-gap: 40px;
  }

  @media (max-width: 480px) {
    padding: 45px 30px;
    row-gap: 30px;
  }
`;

export const HowIWorkHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const HowIWorkTitle = styled.h2`
  font-size: ${fontSizes.mediumXLarge};
  color: ${({ theme }) => theme.text1};
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.xlargeMid};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.large};
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: ${fontSizes.mediumLarge};
    text-align: start;
  }
`;

export const HowIWorkSubtitle = styled.p`
  font-size: ${fontSizes.medium};
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.text2};

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 768px) {
    line-height: 1.7;
  }
`;

export const WorkTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 35px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.line};

  @media (max-width: 768px) {
    left: 30px;
  }

  @media (max-width: 480px) {
    left: 22px;
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
  width: 50%;
  padding: 32px;
  padding-left: 60px;
  border-radius: 16px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    border: 3px solid white;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
    left: 0;
  }
`;

export const StepLabel = styled.p`
  display: block;
  font-size: ${fontSizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;

export const StepTitle = styled.h3`
  font-size: ${fontSizes.mediumLarge};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text1};
`;

export const StepDescription = styled.p`
  font-size: ${fontSizes.medium};
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.text2};

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;
