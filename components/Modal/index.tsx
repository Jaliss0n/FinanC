import * as React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Modal, Portal, Button, TextInput, Checkbox } from "react-native-paper";

interface ModalProps {
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export default function ModalCount({
  visible,
  showModal,
  hideModal,
}: ModalProps) {
  const [nameCount, setNameCount] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalStyle}
      >
        <ImageBackground
          source={require("../../assets/images/WavePurple.png")}
          imageStyle={styles.backgroundWave}
        >
          <Text style={styles.titleTop}>Contas</Text>
        </ImageBackground>
        <View style={styles.containerModal}>
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
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 18,
    alignSelf: "center",
  },
  containerModal: {
    padding: 20,
  },
  backgroundWave: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  titleTop: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: "#fff",
    width: "20%",
    marginVertical: 20,
    marginLeft: 20,
  },
  containerChek: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
