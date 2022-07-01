import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";

import AppText from "./AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";

function AppButton({
  disabled,
  color = "primary",
  title,
  textStyle,
  onPress,
  style,
  isLoading,
}) {
  const [loaded] = useFonts({
    Khyay: fonts.primary,
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isLoading && "row",
        },
        style,
      ]}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ alignItems: "flex-end" }}
          size="large"
          color={colors.main}
        />
      )}
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
    width: "auto",
  },
});

export default AppButton;
