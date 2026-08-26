import { SectionWrapper, Content, NavbarActions } from "./Navbar.styled";
import { Logo } from "./Logo";
import { ScrollButton } from "./ScrollButton";
import { DownloadButton } from "./DownloadButton";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({ onScroll, isDark, setIsDark }) => {
  return (
    <SectionWrapper>
      <Content>
        <Logo />

        <NavbarActions>
          <ScrollButton onClick={onScroll} />
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          <DownloadButton />
        </NavbarActions>
      </Content>
    </SectionWrapper >
  );
};
