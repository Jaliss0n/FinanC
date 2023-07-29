import { Image, StyleSheet, Text, View } from "react-native";

interface CardExpensesProps {
  title: string;
  budget: number;
}

export default function CardExpenses({ title, budget }: CardExpensesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerGroup}>
        <Image
          source={require("../../assets/images/circulo-usd.png")}
          style={styles.iconIMG}
        />
        <Text style={styles.textBudget}>{title}</Text>
      </View>
      <Text style={styles.textBudget}>R$ {budget}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7A15E4",
    borderRadius: 18,
    paddingVertical: 10,
    marginRight: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    marginBottom: 15
  },
  containerGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15
  },
  iconIMG: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  textBudget: {
    color: "#fff",
    fontFamily: "Roboto-Bold",
    fontWeight: "800",
    fontSize: 25,
    marginRight: 15
  },
});
