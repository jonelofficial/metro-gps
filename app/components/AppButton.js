import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import AppText from "./AppText";

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
          flexDirection: isLoading ? "row" : "column",
        },
        style,
      ]}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute", left: "30%" }}
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
