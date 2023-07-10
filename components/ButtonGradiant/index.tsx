import { Button } from "react-native-paper";
import {StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  title: string;
}

export const ButtonGradiant = ({ title}: ButtonProps) => {
  return (
    <LinearGradient
      colors={["#7A15E4", "#97148C"]}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        width: '50%',
      }}
    >
      <Button
        mode="contained"
        onPress={() => console.log("Pressed")}
        uppercase={false}
        style={{
            backgroundColor: '#dedede0',
        }}
        labelStyle={{fontFamily: 'Roboto-Bold', fontSize: 20}}
      >
        {title}
      </Button>
    </LinearGradient>
  );
};
