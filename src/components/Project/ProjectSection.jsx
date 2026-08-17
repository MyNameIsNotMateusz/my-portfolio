import { Content, ProjectCard, ProjectHeader, ProjectSubtitle, ProjectTitle, SectionWrapper } from "./ProjectSection.styled"

export const ProjectSection = ({ project }) => {
    return (
        <SectionWrapper>
            <Content>
                <ProjectCard>
                    <ProjectHeader>
                        <ProjectTitle>
                            {project.title}
                        </ProjectTitle>
                        <ProjectSubtitle>
                            {project.subtitle}
                        </ProjectSubtitle>
                    </ProjectHeader>
                </ProjectCard>
            </Content>
        </SectionWrapper>
    )
}