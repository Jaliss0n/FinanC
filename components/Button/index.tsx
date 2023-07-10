import { Button } from "react-native-paper";
import {StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
}

export const ButtonWhite = ({ title,icon,style}: ButtonProps) => {
  return (
    <Button
      icon={icon}
      mode="contained-tonal"
      onPress={() => console.log("Pressed")}
      uppercase
      style={style}
    >
      {title}
    </Button>
  );
};
