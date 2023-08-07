import React from "react";
import { StatusBar, Image, Text } from "react-native";
import { ButtonWhite } from "../../../components/Button";
import { ContainerGradient } from "../../../components/ContainerGradient";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import styled from "styled-components/native"; // Importando styled-components corretamente

const TitleText = styled(Text)`
  font-size: 50px;
  color: #fff;
  font-family: "Roboto-Bold";
  position: absolute;
  width: 60%;
  top: 25%;
  left: 4%;
`;

const PorquinhoImage = styled(Image)`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 1%;
  left: 30%;
`;

const SacoDinheiroImage = styled(Image)`
  width: 280px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 40%;
`;

const NextButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  width: 90%;
  align-self: center;
`;

export default function Welcome() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Login')
  }

  return (
    <ContainerGradient>
      <StatusBar barStyle='default' />
      <PorquinhoImage
        source={require("../../../assets/images/Porquinho.png")}
      />
      <TitleText>
        Vem organizar suas finanças com a gente!
      </TitleText>
      <SacoDinheiroImage
        source={require("../../../assets/images/SacoDinheiro.png")}
      />

      <NextButton
        icon="arrow-right-drop-circle"
        mode="contained-tonal"
        onPress={openScreen}
        uppercase
      >
        Vamos lá!!
      </NextButton>
    </ContainerGradient>
  );
}
