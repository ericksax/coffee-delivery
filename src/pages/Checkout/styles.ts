import styled from "styled-components";

export const Main = styled.div`
  margin: 10.4rem auto;
  display: grid;

  grid-template-columns: clamp(44rem, 50vw, 62rem) clamp(14rem, 30vw, 43rem);
  grid-auto-flow: dense;
  gap: 3.2rem;

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
      }
    }

    .payment-information {
      margin-top: 1.2rem;

      .payment-method {
        width: 100%;
        margin-top: 3.2rem;
        display: flex;

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

        label:nth-child(n + 4) {
          margin-left: 1.2rem;
        }

        input {
          all: unset;
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
  max-width: 144rem;
  background: ${(props) => props.theme.colors["background"]};
`;
