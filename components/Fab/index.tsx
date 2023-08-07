import * as React from "react";
import { FAB, Portal } from "react-native-paper";
import ModalLayout from "../ModalLayoult";
import ModalCount from "../ModalCount";
import ModalWage from "../ModalWage";

export default function FabButton() {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }: { open: boolean }) => setState({ open });
  const { open } = state;

  //Estado do Modal Adicionar Conta
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  //Estado do Modal Adicionar Renda
  const [visibleIncome, setVisibleIncome] = React.useState(false);
  const showModalIncome = () => setVisibleIncome(true);
  const hideModalIncome = () => setVisibleIncome(false);
  
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
            onPress: () => showModalIncome(),
          },
          
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
      <ModalLayout title="Contas" hideModal={hideModal} visible={visible} showModal={showModal}>
        <ModalCount/>
      </ModalLayout>

      <ModalLayout title="Renda" hideModal={hideModalIncome} visible={visibleIncome} showModal={showModalIncome}>
        <ModalWage/>
      </ModalLayout>
    </Portal>
  );
}
