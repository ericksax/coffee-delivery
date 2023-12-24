import styled from "styled-components";

export const CheckoutFooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.4rem;
  flex-direction: column;

  button {
    margin-top: 2.4rem;
    background: #DBAC2C;
    color: white;
    padding: 1.2rem 0;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }
`

export const ContainerPrices = styled.div`
  display: flex;

  strong {
    font-size: 20px;
    line-height: 130%;
  }

  span {
    line-height: 130%;
    font-size: 14px;
    color: ${({theme})=> theme.colors['base-text']}
  }
  
  div {
    flex: 1;
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
  }

  div:last-child {
    align-items: flex-end;
  }
`