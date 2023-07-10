import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { ContainerGradient } from "../ContainerGradient";

export default function ContainerBlanck({children}: {children: React.ReactNode}) {
  return (
    <ContainerGradient>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Image
          source={require("../../assets/images/waveWhite.png")}
          style={styles.wavesImg}
        />
        <View style={styles.blanckArea}>{children}</View>
      </SafeAreaView>
    </ContainerGradient>
  );
}

const styles = StyleSheet.create({
  blanckArea: {
    height: "90%",
    backgroundColor: "#fff",
  },
  wavesImg: {
    width: "100%",
    height: 100,
    marginTop: "10%",
  },
});
