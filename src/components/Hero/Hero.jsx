import {
  SectionWrapper,
  Content,
  ButtonsWrapper,
  HeroLeft,
  HeroRight,
} from "./Hero.styled";
import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { ResumeButton } from "./ResumeButton";
import { DemoButton } from "./DemoButton";
import { HeroLoader } from "./HeroLoader";

export const Hero = () => {
  return (
    <SectionWrapper>
      <Content>
        <HeroLeft>
          <HeroTitle />
          <HeroSubtitle />
          <ButtonsWrapper>
            <ResumeButton />
            <DemoButton />
          </ButtonsWrapper>
        </HeroLeft>
        <HeroRight>
          <HeroLoader />
        </HeroRight>
      </Content>
    </SectionWrapper>
  );
};
