import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ScanScreen from "../screens/ScanScreen";
import TranspoDetailsScreen from "../screens/TranspoDetailsScreen";
import DashboardStackNavigator from "./DashboardStackNavigator";
import AppCamera from "../components/AppCamera";
import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: "fade",
    }}
  >
    <Stack.Screen name="Dashboard" component={DashboardStackNavigator} />
    <Stack.Screen name="TranspoDetails" component={TranspoDetailsScreen} />
    <Stack.Screen name="AppCamera" component={AppCamera} />
    <Stack.Screen name="Map" component={MapScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
