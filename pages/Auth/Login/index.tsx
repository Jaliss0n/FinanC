import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider, IconButton, TextInput } from "react-native-paper";
import styled from "styled-components/native"; // Importando styled-components corretamente
import { ButtonGradiant } from "../../../components/ButtonGradiant";
import ContainerBlanck from "../../../components/ContainerBlank";
import { useNavigation } from "@react-navigation/native";

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 78%;
`;

const LogoImage = styled(Image)`
  width: 50%;
  height: 100px;
`;

const TextSub = styled(Text)`
  color: #6C6666;
  font-family: "Roboto-Regular";
  text-align: center;
  width: 160px;
`;

const IconsContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

export default function Login() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("Dashboard");
  }

  return (
    <ContainerBlanck>
      <Container>
        <LogoImage
          source={require("../../../assets/images/Logo.png")}
        />
        <TextSub>
          Digite as credenciais para continuar.
        </TextSub>
        <View style={{ width: "80%" }}>
          <TextInput
            mode="outlined"
            label="Email"
            value={text}
            style={{ marginBottom: "2%" }}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            mode="outlined"
            label="Senha"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>

        <ButtonGradiant title="Log in" action={openScreen} />

        <IconsContainer>
          <IconButton icon="google" mode="contained" />
          <IconButton icon="facebook" mode="contained" />
        </IconsContainer>

        <Divider bold style={{ width: "40%" }} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <TextSub>
            Não possui uma conta?, clique aqui para criar uma!
          </TextSub>
        </TouchableOpacity>
      </Container>
    </ContainerBlanck>
  );
}
