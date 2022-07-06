import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import fonts from "../../config/fonts";
import AppText from "../AppText";
import Fonts from "../Fonts";

function ListItem({ name, location, km, hour, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Fonts>
        <View style={styles.container}>
          <View style={styles.detailsContainer}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.location}>{location}</AppText>
          </View>
          <View style={styles.kmDetails}>
            <AppText style={styles.km}>{km}km</AppText>
            <AppText style={styles.kmph}>
              {hour} <AppText style={styles.hr}>/hours</AppText>
            </AppText>
          </View>
        </View>
      </Fonts>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
  name: {
    fontFamily: fonts.primaryName,
    lineHeight: 25,
  },
  location: {
    fontFamily: fonts.primaryName,
    fontSize: 16,
    color: colors.lightMedium,
    lineHeight: 25,
  },
  km: {
    fontFamily: fonts.primaryName,
    textAlign: "right",
    lineHeight: 25,
  },
  kmph: {
    fontFamily: fonts.primaryName,
    color: colors.primary,
    textAlign: "right",
    fontSize: 20,
    lineHeight: 25,
  },
  hr: {
    fontFamily: fonts.primaryName,
    color: colors.lightMedium,
    fontSize: 16,
    lineHeight: 25,
  },
});

export default ListItem;
