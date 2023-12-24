import styled from "styled-components";


export const Container = styled.div`
  max-width: 144rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9.2rem 16rem;
  background: ${(props) => props.theme.colors["background"]};
 
 

  main {
    margin: 9.2rem auto;
    display: flex;
    width: 100%;
    max-width: 112rem;
    justify-content: space-between;
    align-items: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: space-between;

    p {
      margin-top: 1.6rem;
      font-size: 2.0rem;
    }

    h1 {
      font-family: "Baloo 2";
      font-weight: bold;
      font-size: 4.8rem;
      line-height: 130%;
    }
  }

  .icon-blocks { 
    display: grid;
    max-width: 56.7rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2.0rem;
    margin-top: 6.6rem;

    
    div {
      display: flex;
      align-items: center;

      span {
      font-size: 1.5rem;
    }

      img {
        margin-right: 1.2rem;
      }
    }
  }
`;
