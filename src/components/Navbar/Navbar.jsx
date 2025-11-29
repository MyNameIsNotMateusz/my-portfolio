import { SectionWrapper, Content } from "./Navbar.styled";
import { Logo } from "./Logo";
import { ScrollButton } from "./ScrollButton";
import { DownloadButton } from "./DownloadButton";

export const Navbar = ({ onScroll }) => {
  return (
    <SectionWrapper>
      <Content>
        <Logo />

        <div>
          <ScrollButton onClick={onScroll} />
          <DownloadButton />
        </div>
      </Content>
    </SectionWrapper>
  );
};
