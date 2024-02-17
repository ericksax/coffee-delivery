import { TextBolder } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  padding-top: 3.2rem;
  max-width: 144rem;
  background: ${(props) => props.theme.colors["background"]};

  .title {
    max-width: 112rem;
    margin: auto;
    padding: 0 2rem;

    h1 {
      font-size: clamp(1.6rem, 5vw, 3.2rem);
    }
  }
`;

export const Wrapper = styled.section`
  max-width: 112rem;
  margin: auto;
  margin-top: 5.4rem;
  display: grid;
  padding: 0 2rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-auto-flow: dense;
  justify-items: center;
  gap: 3.2rem;
  padding-bottom: 10rem;
`;
