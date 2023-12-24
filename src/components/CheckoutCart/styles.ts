import styled from "styled-components";

export const CartChecoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Card = styled.div`
display: flex;
  width: 100%;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  width: 100%;
  
& + div  {
  margin-top: 3.2rem;
}
  
  span:last-child {
    margin-left: auto;
    font-weight: 700;
  }
  
  > div {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.35rem;
    
    div {
      display: flex;
      margin-right: 0.8rem;
      
      button {
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