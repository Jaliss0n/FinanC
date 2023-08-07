import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function ModalWage() {
  const [nameCount, setNameCount] = React.useState("");
  const [checked, setChecked] = React.useState("first");

  return (
    <>
      <Text>Qual o tipo de Renda?</Text>
      <View style={styles.containerChek}>
        <View style={styles.containerChek}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Renda Fixa</Text>
        </View>
        <View style={styles.containerChek}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Renda Variavel</Text>
        </View>
      </View>

      <View>
        <TextInput
          mode="outlined"
          label="Digite o valor"
          value={nameCount}
          style={{ marginBottom: "10%" }}
          onChangeText={(text) => setNameCount(text)}
        />
      </View>

      <Button buttonColor="#7A15E4" mode="contained">
        Salvar
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  containerChek: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
