import { DownloadButtonStyled } from "./Navbar.styled";

export const DownloadButton = () => {
  return (
    <DownloadButtonStyled
      href={`${process.env.PUBLIC_URL}/Mateusz_Otorowski_EN.pdf`}
      download
    >
      Download CV
    </DownloadButtonStyled>
  );
};
