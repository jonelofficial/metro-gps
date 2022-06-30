import { ScrollView } from "react-native";
import BottomToast from "./app/components/BottomToast";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import ScanScreen from "./app/screens/ScanScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      <WelcomeScreen />
      {/* <LoginScreen /> */}
      {/* <ScanScreen /> */}
      {/* <BottomToast /> */}
    </Screen>
  );
}
