import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

import AppText from "./AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";

function AppButton({ color = "primary", title, textStyle, onPress, style }) {
  const [loaded] = useFonts({
    Khyay: fonts.primary,
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }, style]}
    >
      <AppText style={[styles.text, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 35,
    elevation: 1,
  },
  text: {
    fontFamily: "Khyay",
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },
});

export default AppButton;
