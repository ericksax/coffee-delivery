import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { ReactNode } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;

    span:first-child {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${props=> props.theme.colors['base-subtitle']}
    }

    span + span {
      color: ${props=> props.theme.colors['base-text']}
    }
  }
`;

interface IconProps {
  icon: "currencyDolar" | "mapPinLine";
  title: string;
  subtitle: string;
}

export function Subtitle({ icon, title, subtitle }: IconProps) {
  return (
    <Container>
      <span>
        {icon === "mapPinLine" ? (
          <MapPinLine size={22} color="#C47F17" />
        ) : (
          <CurrencyDollar size={20} color="#8047F8" />
        )}
      </span>
      <div>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </Container>
  );
}
