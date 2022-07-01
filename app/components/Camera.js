import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

function Camera(props) {
  return (
    <BlurView intensity={100} tint="light" style={styles.container}>
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
        style={styles.iconBackground}
      >
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={30}
          color={colors.white}
        />
      </LinearGradient>
    </BlurView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    alignItems: "center",
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  iconBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: -30,
  },
});
export default Camera;
