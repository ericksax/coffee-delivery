import styled from "styled-components";

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  img {
    width: clamp(4rem, 16vw, 6rem);
    height: clamp(4rem, 16vw, 6rem);
  }

  & + div {
    margin-top: 3.2rem;
  }

  button {
    font-size: clamp(1rem, 3vw, 1.2rem);
    padding: clamp(0.4rem, 5vw, 0.5rem);

    svg {
      font-size: clamp(1rem, 3vw, 1.2rem);
    }
  }

  span {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
  }

  span:last-child {
    margin-left: auto;
    font-weight: 700;
    gap: 1rem;
  }

  > div {
    margin-left: clamp(0.4rem, 3vw, 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.35rem;

    div {
      width: clamp(0.5rem, 20vw, 8rem);
      display: flex;
      margin-right: 0.8rem;

      div {
        gap: clamp(0.4rem, 1vw, 0.5rem);
      }
    }
  }
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.colors["base-button"]};
  border: none;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${({ theme }) => theme.colors["purple"]};
  }
`;
