import { ResumeButtonStyled } from "./Hero.styled";

export const ResumeButton = () => {
  return (
    <ResumeButtonStyled
      href={`${process.env.PUBLIC_URL}/Mateusz_Otorowski_-_Frontend_Developer.pdf`}
      download
    >
      Get my resume now
    </ResumeButtonStyled>
  );
};
