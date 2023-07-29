import * as React from "react";
import { FAB, Portal } from "react-native-paper";
import ModalCount from "../Modal";

export default function FabButton() {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }: { open: boolean }) => setState({ open });
  const { open } = state;

  //Estado do Modal Adicionar Conta
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        icon={open ? "close" : "plus"}
        actions={[
          {
            icon: "cash-remove",
            label: "Conta",
            onPress: () => showModal(),
          },
          {
            icon: "cash-plus",
            label: "Salario",
            onPress: () => console.log("Pressed email"),
          },
          
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
      <ModalCount hideModal={hideModal} visible={visible} showModal={showModal}/>
    </Portal>
  );
}
