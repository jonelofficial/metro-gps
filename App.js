import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { LogBox } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    try {
      const user = await authStorage.getUser();
      if (user) {
        const json = await JSON.parse(user);
        if (!json) return null;
        setToken(json.jwt);
        setUser(json);
      }
    } catch (e) {
      console.log("ERROR ON RESTORING USER", e);
    } finally {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
