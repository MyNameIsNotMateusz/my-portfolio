import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background2};
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 2000px;
  padding: 0 60px;
  margin-bottom: 20px;
`;

export const CardsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 40px;

  & > :nth-child(1) {
    grid-column: span 2;
  }
`;

export const ExpertiseCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 35px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 35px;
  width: 100%;
`;

export const ExpertiseTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const ExpertiseTitle = styled.h3`
  font-size: ${fontSizes.large};
  color: ${({ theme }) => theme.text1};
  width: 100%;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.mediumLarge};
  }
`;

export const ExpertiseSubtitle = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  line-height: 1.6;
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;

export const ExpertiseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  img {
    height: 300px;

    @media (max-width: 1600px) {
      height: 220px;
    }

    @media (max-width: 1200px) {
      height: 170px;
    }
  }
`;
