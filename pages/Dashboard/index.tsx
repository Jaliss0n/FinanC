import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { ContainerGradient } from "../../components/ContainerGradient";
import CardBudget from "../../components/CardBudget";
import CardRecurrent from "../../components/CardRecurrent";
import CardExpenses from "../../components/CardExpenses";
import FabButton from "../../components/Fab";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Dashboard() {
  return (
    <ContainerGradient>
      <ScrollView>
        <View style={styles.blockWhite} />
        <Image
          source={require("../../assets/images/waveWhiteInvert.png")}
          style={styles.waveImg}
          resizeMode="stretch"
        />
        <View style={styles.container}>
          <View style={styles.containerBudget}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardBudget budget={800} title="Salário Fixo" />
              <CardBudget budget={300} title="Renda Variavel" />
            </ScrollView>
          </View>
          <View style={styles.containerMB}>
            <Text style={styles.title}>Contas Recorrentes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CardRecurrent title="Aluguel" budget={800} />
              <CardRecurrent title="Aluguel" budget={800} />
              <CardRecurrent title="Aluguel" budget={800} />
            </ScrollView>
          </View>
          <View style={styles.containerMB}>
            <Text style={styles.title}>Contas Exporádicas</Text>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
              <CardExpenses title="Agua" budget={900} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <FabButton/>
    </ContainerGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  blockWhite: {
    backgroundColor: "#fff",
    height: windowHeight * 0.05,
  },
  waveImg: {
    width: "100%",
    marginBottom: windowWidth * 0.01,
    height: windowWidth * 0.1,
  },
  containerBudget: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  containerMB: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto-Regular",
    color: "#e9e9e9",
    marginBottom: 8,
    marginTop: 8,
  },
});
