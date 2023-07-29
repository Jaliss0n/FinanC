import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Dimensions } from "react-native";

export const ContainerGradient = ({children}: {children: React.ReactNode}) =>  {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#7A15E4", "#97148C"]}
    >{children}</LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    height: Dimensions.get('window').height,
    position: "relative",
  },
});
