import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import AppHeading from "./AppHeading";
import AppText from "./AppText";
import Fonts from "./Fonts";

function Card({ name, image, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.detailsContainer}>
        <Fonts>
          <AppText style={styles.welcome}>Welcome</AppText>
          <AppHeading style={styles.name} size="h1">
            {name}
          </AppHeading>
        </Fonts>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  welcome: {
    fontFamily: fonts.primaryName,
    fontSize: 16,
    color: colors.transparentPrimary,
  },
  name: {
    fontFamily: fonts.primaryName,
    fontSize: 30,
  },
});

export default Card;
