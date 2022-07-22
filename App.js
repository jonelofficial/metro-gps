import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import useLocation from "./app/hooks/useLocation";
import MapScreen from "./app/screens/MapScreen";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <MapScreen />
        {/* <UseGryo /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
