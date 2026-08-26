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

export const LogoStyled = styled.p`
  font-size: ${fontSizes.large};
  font-weight: 700;
  white-space: nowrap;
  color: ${({ theme }) => theme.text1};

  @media (max-width: 1200px) {
    font-size: ${fontSizes.mediumLarge};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.medium};
  }
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media (max-width: 768px) {
    column-gap: 15px;
  }

  @media (max-width: 480px) {
    column-gap: 5px;
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
  padding: 15px 25px;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text1};
  border-radius: 100px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.background2};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text3};
  }

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }

  @media (max-width: 768px) {
    font-size: ${fontSizes.small};
    padding: 13px 20px;
  }

  @media (max-width: 480px) {
    padding: 9px 13px;
  }
`;

export const ThemeToggleStyled = styled.button`
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  > :nth-child(1) {
    width: ${({ $isDark }) => ($isDark ? "20px" : "16px")};
    height: ${({ $isDark }) => ($isDark ? "20px" : "16px")};
    border-radius: 24px;
    border: ${({ $isDark, theme }) =>
      $isDark ? `1px solid ${theme.text1}` : `3px solid ${theme.primary}`};
    background-color: ${({ theme }) => theme.text1};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.4s,
      height 0.4s,
      border 0.4s,
      background-color 0.4s;
    z-index: 10;
  }

  > :nth-child(3) {
    width: ${({ $isDark }) => ($isDark ? "18px" : "4px")};
    height: ${({ $isDark }) => ($isDark ? "18px" : "4px")};
    border-radius: 9px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 2px;
    right: 2px;
    transition:
      width 0.6s,
      height 0.6s;
    transition-delay: 0.08s;
    z-index: 10;
  }

  > :nth-child(2) {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ $isDark }) =>
      $isDark
        ? "translate(-50%, -50%) rotate(-45deg) scale(0.8)"
        : "translate(-50%, -50%)"};
    transition: transform 0.4s;
  }

  > :nth-child(2) span {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.text1};
    position: relative;
  }

  > :nth-child(2) > :nth-child(1) {
    top: calc(50% - 1px);
  }

  > :nth-child(2) > :nth-child(2) {
    top: calc(50% - 3px);
    transform: rotate(90deg);
  }

  > :nth-child(2) > :nth-child(3) {
    top: calc(50% - 5px);
    transform: rotate(45deg);
  }

  > :nth-child(2) > :nth-child(4) {
    top: calc(50% - 7px);
    transform: rotate(-45deg);
  }
`;
