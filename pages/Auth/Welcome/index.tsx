import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text } from "react-native";
import { ButtonWhite } from "../../../components/Button";
import { ContainerGradient } from "../../../components/ContainerGradient";

export default function Welcome() {
  return (
      <ContainerGradient>
        <StatusBar style="auto" />
        <Image
          source={require("../../../assets/images/Porquinho.png")}
          style={styles.porquinho}
        />
        <Text style={styles.titleText}>
          Vem organizar suas finanças com a gente!
        </Text>
        <Image
          source={require("../../../assets/images/SacoDinheiro.png")}
          style={styles.sacoDinheiro}
        />
        <ButtonWhite style={styles.buttonNext} title="Vamos la!!" icon="arrow-right-drop-circle" />
      </ContainerGradient>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "Roboto-Bold",
    position: "absolute",
    width: "60%",
    top: "25%",
    left: "4%",
  },
  porquinho: {
    width: 300,
    height: 300,
    position: "absolute",
    top: "1%",
    left: "30%",
  },
  sacoDinheiro: {
    width: 280,
    height: 280,
    position: "absolute",
    top: "50%",
    left: "40%",
  },
  buttonNext: {
    position: "absolute",
    bottom: "5%",
    width: "90%",
    alignSelf: "center",
  },
});
