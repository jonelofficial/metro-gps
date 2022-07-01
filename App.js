import { ScrollView } from "react-native";
import Screen from "./app/components/Screen";
import UserDetails from "./app/components/skeleton/UserDetails";
import BottomToast from "./app/components/toast/BottomToast";
import LoginScreen from "./app/screens/LoginScreen";
import ScanScreen from "./app/screens/ScanScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      <ScanScreen />
      {/* <BottomToast /> */}
      {/* <UserDetails /> */}
    </Screen>
  );
}
