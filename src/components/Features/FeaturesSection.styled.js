import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background2};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 100px;
  margin: 0 auto;
  max-width: 2000px;
  padding: 120px 60px;

  @media (max-width: 1200px) {
    padding: 100px 60px;
  }

  @media (max-width: 768px) {
    padding: 80px 40px;
    flex-direction: column;
    row-gap: 40px;
  }

  @media (max-width: 480px) {
    padding: 60px 30px;
    row-gap: 30px;
  }
`;

export const FeatureItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 1200px) {
    row-gap: 15px;
  }
`;

export const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.text1};
  }

  @media (max-width: 480px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const FeatureTitle = styled.h3`
  font-weight: 700;
  font-size: ${fontSizes.mediumLarge};
  color: ${({ theme }) => theme.text1};
  margin: 0;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.medium};
  }
`;

export const FeatureSubtitleStyled = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;
