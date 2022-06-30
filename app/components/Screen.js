import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import fonts from "../config/fonts";

function Screen({ children, style }) {
  const [loaded] = useFonts({
    Khyay: fonts.primary,
  });
  if (!loaded) {
    return null;
  }

  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
