import { Content, SectionWrapper, HowIWorkHeader, HowIWorkTitle, HowIWorkSubtitle, WorkTimeline, TimelineLine } from "./HowIWorkSection.styled"
import { howIWork } from "../../data/howIWork"
import { HowIWorkItem } from "./HowIWorkItem"

export const HowIWorkSection = ({ sectionRef }) => {
    return (
        <SectionWrapper ref={sectionRef}>
            <Content>
                <HowIWorkHeader>
                    <HowIWorkTitle>More Than Just Code</HowIWorkTitle>
                    <HowIWorkSubtitle>
                        I focus on understanding the product, designing the experience,
                        and building it from the ground up.
                    </HowIWorkSubtitle>
                </HowIWorkHeader>
                <WorkTimeline>
                    <TimelineLine />

                    {howIWork.map((item, index) => (
                        <HowIWorkItem
                            key={index}
                            step={item.step}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </WorkTimeline>
            </Content>
        </SectionWrapper>
    )
}