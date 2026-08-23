import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { FeaturesSection } from "./components/Features/FeaturesSection";
//usestate do usuniecia bedzie 
import { useRef, useState } from "react";
import { projects } from "./data/projects";
import { ProjectSection } from "./components/Project/ProjectSection";
import { HowIWorkSection } from "./components/HowIWork/HowIWorkSection";

export const App = () => {
  //do usuniecia bedzie
  const [isDark, setIsDark] = useState(false);

  const projectsSectionRef = useRef(null);
  const howIWorkSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowIWork = () => {
    howIWorkSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />

      <PageWrapper>
        <Navbar
          onScroll={scrollToHowIWork}
          setIsDark={setIsDark}
        />
        <Hero onScroll={scrollToProjects} />
        <FeaturesSection />
        {projects.map((project, index) => (
          <ProjectSection
            key={project.title}
            project={project}
            sectionRef={index === 0 ? projectsSectionRef : null}
          />
        ))}

        <HowIWorkSection sectionRef={howIWorkSectionRef} />
      </PageWrapper>
    </ThemeProvider>
  );
};
