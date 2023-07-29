import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, IconButton, TextInput } from "react-native-paper";
import { useState } from "react";
import { ButtonGradiant } from "../../../components/ButtonGradiant";
import ContainerBlanck from "../../../components/ContainerBlank";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate("Dashboard");
  }

  return (
    <ContainerBlanck>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.textSub}>
          Digite as credenciais para continuar.
        </Text>
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

        <View style={styles.containerIcons}>
          <IconButton icon="google" mode="contained" />
          <IconButton icon="facebook" mode="contained" />
        </View>

        <Divider bold style={{ width: "40%" }} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textSub}>
            Não possui uma conta?, clique aqui para criar uma!
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
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "78%",
  },
  wavesImg: {
    width: "100%",
    height: 100,
    marginTop: "10%",
  },
  logo: {
    width: "50%",
    height: 100,
  },
  textSub: {
    color: "#6C6666",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    width: 160,
  },
  containerIcons: {
    display: "flex",
    flexDirection: "row",
  },
});
