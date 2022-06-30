import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";

function BottomToast(props) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <AppText>Bottom Toast</AppText>
      </View>
      <AppButton title="LOADING..." textStyle={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
    padding: 25,
  },
  detailsContainer: {
    padding: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    fontSize: 16,
  },
});
export default BottomToast;
