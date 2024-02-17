import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
     font-size: 62.5%;

     @media (max-width: 1080px) {
      font-size: 57.5%;
    }
  }

  body * {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`;
