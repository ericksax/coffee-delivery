import styled from "styled-components";

export const ButtonQtd = styled.div`
  background: ${(props) => props.theme.colors["base-button"]};

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;

  border-radius: 6px;
  padding: 8.5px 8px;
  max-width: 7.8rem;

  button {
    border: none;
    display: flex;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;


