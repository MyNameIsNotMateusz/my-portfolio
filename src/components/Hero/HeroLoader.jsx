import {
  LoaderWrapper,
  Box,
  SideLeft,
  SideRight,
  SideTop,
} from "./Hero.styled";

export const HeroLoader = () => {
  return (
    <LoaderWrapper>
      {[1, 2, 3, 4].map((i) => (
        <Box key={i} className={`box box-${i}`}>
          <SideLeft />
          <SideRight />
          <SideTop />
        </Box>
      ))}
    </LoaderWrapper>
  );
};
