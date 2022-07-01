import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import UserDetailsSkeleton from "../skeleton/UserDetailsSkeleton";
import UserDetails from "../skeleton/UserDetails";

function BottomToast({ style, isLoading }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.detailsContainer}>
        {isLoading ? (
          <UserDetailsSkeleton />
        ) : (
          <UserDetails
            title="Jonel Ignacio"
            description="Software Application Developer"
          />
        )}
      </View>
      <AppButton
        isLoading={isLoading}
        title={isLoading ? "LOADING..." : "SIGN IN"}
        textStyle={styles.button}
        disabled={isLoading}
        color={isLoading ? "disablePrimary" : "primary"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  button: {
    fontSize: 16,
  },
});
export default BottomToast;
