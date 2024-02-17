import styled from "styled-components";

export const Main = styled.div`
  margin: 10.4rem auto;
  display: grid;

  grid-template-columns: clamp(44rem, 50vw, 62rem) clamp(14rem, 30vw, 43rem);
  grid-auto-flow: dense;
  gap: 3.2rem;

  @media screen and (max-width: 975px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  h2 {
    margin-bottom: 1.5rem;
    font-family: "Baloo 2";
    font-size: 18px;
  }

  section {
    > div {
      border-radius: 6px;
      padding: 4rem;
      background: ${(props) => props.theme.colors["base-card"]};
    }

    form {
      margin-top: 3.2rem;

      input {
        width: 100%;
        padding: 12px;
        border: none;
        background: ${(props) => props.theme.colors["base-input"]};
      }

      div + div {
        margin-top: 1.6rem;
      }

      input[name="CEP"] {
        max-width: 20rem;
      }

      @media screen and (max-width: 680px) {
        input[name="CEP"] {
          max-width: 100%;
        }
      }

      .two-columns {
        width: 100%;
        display: flex;
        gap: 1.2rem;

        input:first-child {
          width: 20rem;
        }

        input:last-child {
          display: flex;
          flex: 1;
        }

        @media screen and (max-width: 680px) {
          flex-direction: column;

          input:last-child {
            width: 100%;
          }

          input:first-child {
            width: 100%;
          }
        }
      }

      .three-columns {
        display: flex;
        gap: 1.2rem;

        input:first-child {
          max-width: 20rem;
        }

        input {
          display: flex;
          flex: 1;
        }

        input:last-child {
          max-width: 6rem;
        }

        @media screen and (max-width: 680px) {
          flex-direction: column;

          input:last-child {
            max-width: 100%;
          }

          input:first-child {
            max-width: 100%;
          }
        }
      }
    }

    .payment-information {
      margin-top: 1.2rem;

      .payment-method {
        width: 100%;
        flex: 1;
        margin-top: 3.2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        @media screen and (max-width: 680px) {
          flex-direction: column;
        }

        label {
          svg {
            color: ${(props) => props.theme.colors["purple"]};
            margin-bottom: 2px;
          }

          display: flex;
          align-items: center;
          border: 1px solid transparent;
          flex: 1;
          cursor: pointer;
          gap: 1.2rem;
          border-radius: 0.6rem;
          padding: 16px;
          color: ${(props) => props.theme.colors["base-text"]};
          font-size: 12px;
          background-color: ${(props) => props.theme.colors["base-button"]};
        }

        /* label:nth-child(n + 4) {
          margin-left: 1.2rem;
        } */

        input {
          all: unset;
          display: none;
        }

        input:checked + label {
          background: ${(props) => props.theme.colors["purple-light"]};
          border: 1px solid ${(props) => props.theme.colors["purple"]};
        }
      }
    }
  }
  .coffe-checkout-list {
    section > div {
      border-radius: 6px 44px;
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 144rem;
  background: ${(props) => props.theme.colors["background"]};
`;

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 5.4rem;
  display: grid;
  padding: 0 2rem;

  grid-auto-flow: dense;
  justify-items: center;
  gap: 3.2rem;
`;
