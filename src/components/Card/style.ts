import styled from "styled-components";

export const Card = styled.div`
  max-width: 25.6rem;
  max-height: 31rem;
  padding: 2.0rem;
  border-radius: 6px 36px;
  text-align: center;
  background: ${props=> props.theme.colors['base-card']};

  img {
    margin-top: -4rem;
  }

  & > span {
    background: ${props=> props.theme.colors['yellow-light']};
    padding: 4px 8px;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    display: inline-block;
    color: ${props=> props.theme.colors['yellow-dark']}
  }

  span + span {
    margin-left: 0.5rem;
  }
  
  img {
    margin: -4rem auto 0;
    display: block
  }

  & strong {
    margin-top: 1.6rem;
    font-family: 'Baloo 2';
  }

  p {
    margin-top: .8rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${props=> props.theme.colors['base-label']};
  
  }

  strong {
    display: block;
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 4px;
    margin-top: 3.3rem;

      span + span {
      font-size: 24px;
      font-family: 'Baloo 2';
    }
  }
`

export const ButtonCart = styled.button`
  display: flex;
  background: ${(props) => props.theme.colors["purple"]};
  padding: 0.8rem; 
  border: none;
  border-radius: 0.6rem;
  text-align: center;
  color: white;

 
 
`;

export const WrapperQuantityButton = styled.div`
  display: flex;
  margin-left: auto ;
  gap: 8px;
`