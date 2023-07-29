import { Image, StyleSheet, Text, View } from "react-native";

interface RecurrentProps {
  title: string;
  budget: number;
}

export default function CardRecurrent({ title, budget }: RecurrentProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/circulo-usd.png")}
        style={{ width: 60, height: 60, tintColor: '#7A15E4' }}
      />
      <Text style={styles.textCard}>{title}</Text>
      <Text style={styles.textBudget}>R$ {budget}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Regular",
    color: "#e9e9e9",
    marginBottom: 8,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    paddingVertical: 40,
    width: 170,
    marginRight: 20,
    marginLeft: 2,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    marginVertical: 5,
  },
  textCard: {
    color: "#4b4a4a",
    fontFamily: "Roboto-Bold",
    fontWeight: "800",
    marginVertical: 5,
    fontSize: 25,
  },
  textBudget: {
    color: "#fff",
    backgroundColor: '#7A15E4',
    borderRadius: 12,
    fontFamily: "Roboto-Bold",
    fontWeight: "800",
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 25,
    overflow: 'hidden'
  },
});
