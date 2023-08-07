import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components/native"; // Importando styled-components corretamente
import { useTheme } from "../../ThemeContext";

interface CardExpensesProps {
  title: string;
  budget: number;
}

export default function CardExpenses({ title, budget }: CardExpensesProps) {

  const {theme} = useTheme()
  
  const CardContainer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.accent};  
    border-radius: 18px;
    padding-vertical: 10px;
    margin-right: 10px;
    elevation: 10;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.8;
    margin-bottom: 15px;
  `;
  
  const ContainerGroup = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
  `;
  
  const IconImage = styled(Image)`
    width: 40px;
    height: 40px;
    margin-right: 15px;
  `;
  
  const TextBudget = styled(Text)`
    color: #fff;
    font-family: "Roboto-Bold";
    font-weight: 800;
    font-size: 25px;
    margin-right: 15px;
  `;

  return (
    <CardContainer>
      <ContainerGroup>
        <IconImage
          source={require("../../assets/images/circulo-usd.png")}
        />
        <TextBudget>{title}</TextBudget>
      </ContainerGroup>
      <TextBudget>R$ {budget}</TextBudget>
    </CardContainer>
  );
}
