import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.background1};
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;

  @media (max-width: 768px) {
    padding: 15px 40px;
  }

  @media (max-width: 480px) {
    padding: 10px 30px;
  }
`;

export const LogoStyled = styled.h1`
  font-size: ${fontSizes.large};
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};

  @media (max-width: 1200px) {
    font-size: ${fontSizes.mediumLarge};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.medium};
  }
`;

export const ScrollButtonStyled = styled.button`
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text1};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const DownloadButtonStyled = styled.a`
  display: inline-block;
  margin-left: 30px;
  padding: 15px 25px;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text1};
  border-radius: 100px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 700;
  background-color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderColor2};
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 768px) {
    margin-left: 15px;
    font-size: ${fontSizes.small};
    padding: 13px 20px;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    padding: 9px 13px;
  }
`;
