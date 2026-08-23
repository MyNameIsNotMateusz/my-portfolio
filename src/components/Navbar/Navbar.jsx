import { SectionWrapper, Content, NavbarActions } from "./Navbar.styled";
import { Logo } from "./Logo";
import { ScrollButton } from "./ScrollButton";
import { DownloadButton } from "./DownloadButton";

export const Navbar = ({ onScroll, setIsDark }) => {
  return (
    <SectionWrapper>
      <Content>
        <Logo />

        <NavbarActions>
          <ScrollButton onClick={onScroll} />
          <DownloadButton />
        </NavbarActions>
      </Content>
    </SectionWrapper >
  );
};
