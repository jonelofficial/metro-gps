import React from "react";
import { useFonts } from "expo-font";
import fonts from "../config/fonts";
import { View } from "react-native";

function Fonts({ children, style }) {
  const [loaded] = useFonts({
    Khyay: fonts.primary,
  });
  if (!loaded) {
    return null;
  }

  return <View style={style}>{children}</View>;
}

export default Fonts;
