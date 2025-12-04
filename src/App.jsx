import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { FeaturesSection } from "./components/Features/FeaturesSection";
import { ExpertiseSection } from "./components/Expertise/ExpertiseSection";
import { ShowcaseSection } from "./components/Showcase/ShowcaseSection";
import { useRef } from "react";

export const App = () => {
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);

  const scrollToSecondSection = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToThirdSection = () => {
    thirdSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <PageWrapper>
        <Navbar onScroll={scrollToSecondSection} />
        <Hero onScroll={scrollToThirdSection} />
        <FeaturesSection />
        <ExpertiseSection sectionRef={secondSectionRef} />
        <ShowcaseSection sectionRef={thirdSectionRef} />
      </PageWrapper>
    </ThemeProvider>
  );
};
