import { Content, ProjectActions, ProjectCard, ProjectCarouselWrapper, ProjectHeader, ProjectSubtitle, ProjectTitle, SectionWrapper, ProjectButton } from "./ProjectSection.styled"
import { ProjectCarousel } from "./ProjectCarousel"

export const ProjectSection = ({ project, sectionRef }) => {
    return (
        <SectionWrapper ref={sectionRef}>
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
                    <ProjectCarouselWrapper>
                        <ProjectCarousel slides={project.slides} />
                    </ProjectCarouselWrapper>
                    <ProjectActions>

                        {project.liveDemoUrl && (
                            <ProjectButton
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                $variant="primary"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>

                                Live Demo
                            </ProjectButton>
                        )}

                        {project.githubUrl && (
                            <ProjectButton
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                $variant="secondary"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>


                                Github
                            </ProjectButton>
                        )}
                    </ProjectActions>
                </ProjectCard>
            </Content>
        </SectionWrapper>
    )
}