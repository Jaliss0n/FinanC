import * as Font from "expo-font";
import { PaperProvider } from "react-native-paper";
import Welcome from "./pages/Auth/Welcome";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

async function loadFonts() {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

loadFonts();

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}
