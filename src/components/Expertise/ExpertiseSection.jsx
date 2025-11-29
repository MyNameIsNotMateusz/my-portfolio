import {
  SectionWrapper,
  Content,
  CardsGrid,
  ExpertiseCard,
  ExpertiseTitle,
  ExpertiseSubtitle,
  ExpertiseIconWrapper,
  ExpertiseTextContainer,
} from "./ExpertiseSection.styled";
import wmsIcon from "../../assets/images/wms.png";
import platformIcon from "../../assets/images/platform.png";

export const ExpertiseSection = ({ sectionRef }) => {
  return (
    <SectionWrapper ref={sectionRef}>
      <Content>
        <CardsGrid>
          <ExpertiseCard>
            <ExpertiseTextContainer>
              <ExpertiseTitle>Design, Code, Deploy</ExpertiseTitle>
              <ExpertiseSubtitle>
                My work covers the whole process: I design how the system will
                look and work, build it step by step, connect all parts
                together, and make sure it runs smoothly. I also handle
                deployment and make sure it stays reliable in real use.
              </ExpertiseSubtitle>
            </ExpertiseTextContainer>
          </ExpertiseCard>
          <ExpertiseCard>
            <ExpertiseTextContainer>
              <ExpertiseTitle>Warehouse Managements Systems</ExpertiseTitle>
              <ExpertiseSubtitle>
                I design and build complete WMS frontends used daily in large
                international companies.
                <span>
                  Below is one of the WMS systems I developed from scratch.
                </span>
              </ExpertiseSubtitle>
            </ExpertiseTextContainer>
            <ExpertiseIconWrapper>
              <img src={wmsIcon} alt="WMS Mockup" />
            </ExpertiseIconWrapper>
          </ExpertiseCard>

          <ExpertiseCard>
            <ExpertiseTextContainer>
              <ExpertiseTitle>Websites & Platforms</ExpertiseTitle>
              <ExpertiseSubtitle>
                From basic online presence to advanced platforms with databases
                and analytics.
                <span>
                  Below is one of the platforms I designed and developed.
                </span>
              </ExpertiseSubtitle>
            </ExpertiseTextContainer>

            <ExpertiseIconWrapper>
              <img src={platformIcon} alt="Platform Mockup" />
            </ExpertiseIconWrapper>
          </ExpertiseCard>
        </CardsGrid>
      </Content>
    </SectionWrapper>
  );
};
