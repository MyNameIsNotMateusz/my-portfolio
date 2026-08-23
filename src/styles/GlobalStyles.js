import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Plus Jakarta Sans", sans-serif;

    transition:
    background-color 0.3s ease,
    color 0.3s ease,
    fill 0.3s ease,
    box-shadow 0.3s ease;
  }
`;
