import styled from "styled-components";
import { fontSizes } from "../../styles/variables";

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.background1};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  row-gap: 40px;
  max-width: 2000px;
  padding: 60px 60px;

  @media (max-width: 1200px) {
    padding: 50px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 40px;
  }

  @media (max-width: 480px) {
    padding: 30px 30px;
    row-gap: 30px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }

  @media (max-width: 480px) {
    row-gap: 15px;
  }
`;

export const FooterIdentity = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

export const FooterName = styled.p`
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

export const FooterRole = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;

export const FooterActions = styled.div`
  display: flex;
  column-gap: 20px;
  align-self: flex-start;
`;

export const FooterButton = styled.a`
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

export const FooterDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.line};
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: end;
`;

export const FooterCopyright = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.medium};
  color: ${({ theme }) => theme.text2};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: ${fontSizes.small};
  }
`;
