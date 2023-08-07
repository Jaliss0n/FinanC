import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native"; // Importando styled-components corretamente
import { useTheme } from "../../ThemeContext";

interface BudgetProps {
  title: string;
  budget: number;
}

export default function CardBudget({ title, budget }: BudgetProps) {
  const {theme} = useTheme();

  const CardContainer = styled(View)`
    margin: 5px 0;
    margin-right: 20px;
    margin-left: 10px;
    elevation: 10;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    border-radius: 18px;
    padding-vertical: 10px;
    width: 200px;
    background-color: ${theme.colors.accent};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `;

  const CardTextBudget = styled(Text)`
    color: #fff;
    font-family: "Roboto-Bold";
    font-weight: 800;
    font-size: 25px;
  `;

  const CardTitle = styled(Text)`
    font-family: "Roboto-Regular";
    color: #e9e9e9;
    margin-bottom: 8px;
    margin-left: 10px;
  `;

  return (
    <View>
      <CardTitle>{title}</CardTitle>
      <CardContainer>
        <Image
          source={require("../../assets/images/circulo-usd.png")}
          style={{ width: 40, height: 40 }}
        />
        <CardTextBudget>R$ {budget}</CardTextBudget>
      </CardContainer>
    </View>
  );
}
