import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors["background"]};
  width: 100%;
  max-width: 144rem;
  height: 10.4rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 112rem;
    padding: 2rem;

    div {
      display: flex;
      align-items: center;
    }

    .location {
      background: ${(props) => props.theme.colors["purple-light"]};
      border-radius: 0.6rem;
      color: ${(props) => props.theme.colors["purple-dark"]};
      padding: 0.8rem;

      svg {
        margin-right: 0.4rem;
      }
    }

    .cart {
      background: ${(props) => props.theme.colors["yellow-light"]};
      padding: 0.8rem;
      border-radius: 0.6rem;
      margin-left: 1.2rem;
      text-align: center;
      position: relative;
      color: ${(props) => props.theme.colors["yellow-dark"]};

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 2rem;
        width: 2rem;
        background: ${({ theme }) => theme.colors["yellow-dark"]};
        border-radius: 1rem;
        top: -1rem;
        right: -1rem;
        color: white;
        font-size: 12px;
        font-weight: bold;
      }
    }
    @media screen and (max-width: 580px) {
      .location {
        display: none;
      }
    }
  }
`;
