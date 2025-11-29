import { DownloadButtonStyled } from "./Navbar.styled";

export const DownloadButton = () => {
  return (
    <DownloadButtonStyled href="/CV.pdf" download>
      Download CV
    </DownloadButtonStyled>
  );
};
