import styled from "styled-components";

export const Container = styled.div`
  max-width: 144rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9.2rem clamp(2.4rem, 5vw, 16rem);
  background: ${(props) => props.theme.colors["background"]};

  @media screen and (max-width: 680px) {
    padding-bottom: 2rem;
  }

  main {
    margin: 9.2rem auto;
    display: flex;

    gap: 6.4rem;

    width: 100%;
    max-width: 112rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      margin-bottom: 0;
    }
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: space-between;
    width: 80%;

    p {
      margin-top: 1.6rem;
      font-size: clamp(1.4rem, 1vw, 2.4rem);
    }

    h1 {
      font-family: "Baloo 2";
      font-weight: bold;
      font-size: clamp(2.4rem, 3vw, 4.8rem);
      line-height: 130%;
    }
  }

  .landImage {
    width: clamp(60%, 40vw, 476px);
  }

  .icon-blocks {
    display: grid;
    max-width: 56.7rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
    margin-top: 6.6rem;
    gap: 1.6rem;

    div {
      display: flex;
      align-items: center;

      span {
        font-size: clamp(1rem, 1vw, 1.4rem);
      }

      img {
        margin-right: 1.2rem;
      }
    }
  }
`;
