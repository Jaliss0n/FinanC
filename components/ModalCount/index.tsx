import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";

export default function ModalCount() {
  const [nameCount, setNameCount] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <View>
        <TextInput
          mode="outlined"
          label="Nome da Conta"
          value={nameCount}
          style={{ marginBottom: "2%" }}
          onChangeText={(text) => setNameCount(text)}
        />

        <TextInput
          mode="outlined"
          label="Valor da Conta"
          value={nameCount}
          style={{ marginBottom: "2%" }}
          onChangeText={(text) => setNameCount(text)}
        />
      </View>
      <Text>Divida recorrente ?</Text>
      <View style={styles.containerChek}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          uncheckedColor="#7A15E4"
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>Sim</Text>
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
    },
  });
  