import { ResumeButtonStyled } from "./Hero.styled";

export const ResumeButton = () => {
  return (
    <ResumeButtonStyled
      href={`${process.env.PUBLIC_URL}/Mateusz_Otorowski_EN.pdf`}
      download
    >
      Get my resume now
    </ResumeButtonStyled>
  );
};
