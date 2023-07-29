import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  title: string;
  action?:() => void;
}

export const ButtonGradiant = ({ title, action}: ButtonProps) => {
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
        uppercase={false}
        onPress={action}
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
