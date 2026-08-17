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
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 35px;
  border-radius: 16px;
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
