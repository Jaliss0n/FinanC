import React from "react";
import { Image, ScrollView, Text, View, Dimensions } from "react-native";
import { ContainerGradient } from "../../components/ContainerGradient";
import CardBudget from "../../components/CardBudget";
import CardRecurrent from "../../components/CardRecurrent";
import CardExpenses from "../../components/CardExpenses";
import FabButton from "../../components/Fab";
import { Avatar, Button } from "react-native-paper";
import styled from "styled-components/native"; // Importando styled-components corretamente
import { useTheme } from "../../ThemeContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Dashboard() {
  const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();

  const BlockWhite = styled(View)`
    background-color: ${theme.colors.surface};
    height: ${windowHeight * 0.05}px;
  `;

  const WaveImg = styled(Image)`
    width: 100%;
    margin-bottom: ${windowWidth * 0.01}px;
    height: ${windowWidth * 0.1}px;
    tintColor: ${theme.colors.surface};
  `;

  const Container = styled(View)`
    flex: 1;
  `;

  const ContainerUser = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 0 10px;
  `;

  const TitleUser = styled(Text)`
    font-family: "Roboto-Bold";
    color: #e9e9e9;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 30px;
  `;

  const ContainerBudget = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  `;

  const ContainerMB = styled(View)`
    margin: 20px 0;
    padding: 0 10px;
  `;

  const Title = styled(Text)`
    font-family: "Roboto-Regular";
    color: #e9e9e9;
    margin-bottom: 8px;
    margin-left: 10px;
    margin-top: 8px;
  `;

  return (
    <ContainerGradient>
      <ScrollView>
        <BlockWhite />
        <WaveImg
          source={require("../../assets/images/waveWhiteInvert.png")}
          resizeMode="stretch"
        />
        <Container>
          <ContainerUser>
            <TitleUser>Ola, username!</TitleUser>
            <Button onPress={toggleThemeType} mode="contained">
              mudar
            </Button>
            <Avatar.Image
              size={50}
              source={require("../../assets/images/avatar.png")}
            />
          </ContainerUser>
          <ContainerBudget>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardBudget budget={800} title="Salário Fixo" />
              <CardBudget budget={300} title="Renda Variavel" />
            </ScrollView>
          </ContainerBudget>
          <View>
            <Title>Contas Recorrentes</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardRecurrent title="Aluguel" budget={800} />
              <CardRecurrent title="Aluguel" budget={800} />
              <CardRecurrent title="Aluguel" budget={800} />
            </ScrollView>
          </View>
          <ContainerMB>
            <Title>Contas Exporádicas</Title>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
            </ScrollView>
          </ContainerMB>
        </Container>
      </ScrollView>
      <FabButton />
    </ContainerGradient>
  );
}
