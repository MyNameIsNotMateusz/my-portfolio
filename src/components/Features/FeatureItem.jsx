import {
  FeatureItemWrapper,
  IconWrapper,
  FeatureTitle,
  FeatureSubtitleStyled
} from "./FeaturesSection.styled";

export const FeatureItem = ({ icon, title, subtitle }) => {
  return (
    <FeatureItemWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureSubtitleStyled>{subtitle}</FeatureSubtitleStyled>
    </FeatureItemWrapper>
  );
};
