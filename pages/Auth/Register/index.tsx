import { Image, StyleSheet, Text, View } from "react-native";
import ContainerBlanck from "../../../components/ContainerBlank";
import { Divider, IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import { ButtonGradiant } from "../../../components/ButtonGradiant";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [text, setText] = useState<string>("");
  const navigation = useNavigation();

  return (
    <ContainerBlanck>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/Registrese.png")}
          style={styles.textHeader}
        />
        <Text style={styles.textSub}>Preencha as informações necessarias.</Text>
        <View style={{ width: "80%" }}>
          <TextInput
            mode="outlined"
            label="Nome"
            value={text}
            style={{ marginBottom: "2%" }}
            onChangeText={(text) => setText(text)}
          />
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
            style={{ marginBottom: "2%" }}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <Text style={styles.textSub}>
          Clicando em Registrar, você{" "}
          <Text style={styles.textBold}>concorda</Text> com os nossos{" "}
          <Text style={styles.textBold}>termos de uso</Text>.
        </Text>
        <ButtonGradiant title="Registrar" />
        <Text style={styles.textSub}>ou</Text>
        <View style={styles.containerIcons}>
          <IconButton icon="google" mode="contained" />
          <IconButton icon="facebook" mode="contained" />
        </View>
        <Divider bold style={{ width: "40%" }} />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textSub}>
            Já possui uma conta?, clique{" "}
            <Text style={styles.textBold}>aqui</Text> para fazer login!
          </Text>
        </TouchableOpacity>
      </View>
    </ContainerBlanck>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "79%",
  },
  textHeader: {
    width: 280,
    height: 60,
  },
  textSub: {
    color: "#6C6666",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    width: 180,
  },
  containerIcons: {
    display: "flex",
    flexDirection: "row",
  },
  textBold: {
    fontWeight: "bold",
  },
});
