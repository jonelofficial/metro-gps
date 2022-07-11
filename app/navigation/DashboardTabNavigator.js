import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanButton from "./ScanButton";
import routes from "./routes";
import DashboardStackNavigator from "./DashboardStackNavigator";
import { KeyboardAvoidingView, Platform } from "react-native";

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    enabled={false}
  >
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="DashboardBottomTab"
        component={DashboardStackNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <ScanButton
              onPress={() => navigation.navigate(routes.DASHBOARD_STACK_SCAN)}
            />
          ),
        })}
      />
    </Tab.Navigator>
  </KeyboardAvoidingView>
);

export default DashboardTabNavigator;
