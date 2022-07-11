import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function ScanButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        // Background Linear Gradient
        start={[0, 1]}
        end={[1, 0]}
        colors={[
          colors.accent,
          colors.accent,
          colors.secondary,
          colors.primary,
          colors.main,
          colors.main,
        ]}
        style={styles.container}
      >
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={30}
          color={colors.white}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 35,
    bottom: 35,
    // borderColor: colors.white,
    // borderWidth: 10,
    elevation: 2,

    alignItems: "center",
    justifyContent: "center",
  },
});
export default ScanButton;
