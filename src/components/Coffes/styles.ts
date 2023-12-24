import { TextBolder } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding-top: 3.2rem;
  max-width: 144rem;
  background: ${props=> props.theme.colors['background']};

  div:first-child {
    max-width: 112rem;
    margin: auto;

    h1 {
      font-size: 3.2rem;
    }
  }
`

export const Wrapper = styled.div`
  max-width: 112rem;
  margin: auto;
  margin-top: 5.4rem;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 3.2rem;
  padding-bottom: 10rem;
`




