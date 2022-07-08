import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ScanScreen from "../screens/ScanScreen";
import TranspoDetailsScreen from "../screens/TranspoDetailsScreen";
import DashboardStackNavigator from "./DashboardStackNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: "fade",
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="Scan"
      component={ScanScreen}
      options={{ animation: "slide_from_bottom" }}
    />
    <Stack.Screen name="Dashboard" component={DashboardStackNavigator} />
    <Stack.Screen name="TranspoDetails" component={TranspoDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
