import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Dimensions, View } from "react-native";
import { useTheme } from "react-native-paper";
import { styled } from "styled-components";

export const ContainerGradient = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();

  const ViewBase = styled(View)`
    display: flex;
    flex: 1;
    height: ${Dimensions.get("window").height}px;
    position: relative;
    background-color: ${theme.colors.primary};
  `;

  return (
    // <LinearGradient
    //   style={styles.container}
    //   colors={["#7A15E4", "#97148C"]}
    // >{children}</LinearGradient>

    <ViewBase>{children}</ViewBase>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     height: Dimensions.get('window').height,
//     position: "relative",
//     backgroundColor: theme.colors.primary,
//   },
// });
