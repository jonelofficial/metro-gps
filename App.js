import { ScrollView } from "react-native";
import Card from "./app/components/Card";
import ListItem from "./app/components/list/ListItem";
import Screen from "./app/components/Screen";
import SearchBar from "./app/components/SearchBar";
import UserDetails from "./app/components/skeleton/UserDetails";
import DashboardScreen from "./app/screens/DashboardScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ScanScreen from "./app/screens/ScanScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ScanScreen /> */}
      <DashboardScreen />
    </>
  );
}
