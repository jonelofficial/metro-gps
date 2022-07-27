import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "../components/AppText";
import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.white} size="small" />
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    padding: 5,
    width: "100%",
    height: 35,
    position: "absolute",
    zIndex: 1,
    elevation: 1,
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    color: colors.white,
    paddingLeft: 5,
    fontSize: 16,
  },
});

export default OfflineNotice;
