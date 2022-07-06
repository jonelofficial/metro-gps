import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "./app/screens/DashboardScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ScanScreen from "./app/screens/ScanScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import TranspoDetailsScreen from "./app/screens/TranspoDetailsScreen";
import AppCamera from "./app/components/AppCamera";

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen
          name="TranspoDetailsScreen"
          component={TranspoDetailsScreen}
        />
        <Stack.Screen name="AppCamera" component={AppCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
