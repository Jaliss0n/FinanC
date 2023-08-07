import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native"; // Importando styled-components corretamente
import { useTheme } from "../../ThemeContext";

interface RecurrentProps {
  title: string;
  budget: number;
}

export default function CardRecurrent({ title, budget }: RecurrentProps) {
  
  const { theme } = useTheme();

  const CardContainer = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.surface};
    border-radius: 18px;
    padding-vertical: 40px;
    width: 170px;
    margin-right: 10px;
    margin-left: 10px;
    elevation: 10;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    margin-vertical: 5px;
  `;
  
  const CardText = styled(Text)`
    color: ${theme.colors.text};
    font-family: "Roboto-Bold";
    font-weight: 800;
    margin-vertical: 5px;
    font-size: 25px;
  `;
  
  const CardBudgetContainer = styled(View)`
    border-radius: 12px;
    overflow: hidden;
  `;

  const CardBudgetText = styled(Text)`
    color: #fff;
    background-color: ${theme.colors.accent};
    font-family: "Roboto-Bold";
    font-weight: 800;
    padding-horizontal: 20px;
    padding-vertical: 5px;
    font-size: 25px;
  `;

  return (
    <CardContainer>
      <Image
        source={require("../../assets/images/circulo-usd.png")}
        style={{ width: 60, height: 60, tintColor: theme.colors.placeholder }}
      />
      <CardText>{title}</CardText>
      <CardBudgetContainer>
        <CardBudgetText>R$ {budget}</CardBudgetText>
      </CardBudgetContainer>
    </CardContainer>
  );
}
