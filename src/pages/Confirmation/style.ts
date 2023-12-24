import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 112rem;
  margin-top: 18.4rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors["base-text"]};

  h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    font-size: 3.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4rem;
  padding: 4rem;
  width: 52.6rem;
  border-radius: 6px 36px;
  gap: 3.2rem;
  position: relative;
  background: white;

  img {
    width: 3.2rem;
  }
`;

export const Infobox = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    line-height: 130%;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BorderGradient = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background: linear-gradient(45deg, #dbac2c, #8047f8);
  border-radius: 6px 36px;
  z-index: -1;
`;
