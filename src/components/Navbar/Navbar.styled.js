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
`;

export const LogoStyled = styled.h1`
  font-size: ${fontSizes.large};
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme.text1};

  @media (max-width: 1200px) {
    font-size: ${fontSizes.mediumLarge};
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
`;

export const DownloadButtonStyled = styled.a`
  display: inline-block;
  margin-left: 30px;
  padding: 15px 25px;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text1};
  border-color: ${({ theme }) => theme.borderColor1};
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
`;
