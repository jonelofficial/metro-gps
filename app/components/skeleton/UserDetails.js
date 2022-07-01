import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Spacer from "../Spacer";
import SkeletonPlaceholder from "./SkeletonPlaceholder";
import AppHeading from "../AppHeading";
import AppText from "../AppText";
import Screen from "../Screen";
import Fonts from "../Fonts";
import colors from "../../config/colors";

function UserDetails({ title, description }) {
  return (
    <Fonts style={styles.screen}>
      <View style={styles.profilePlaceholder}>
        <Image
          style={styles.image}
          source={require("../../assets/profile.jpg")}
        />
      </View>
      <View style={styles.detailsPlaceholder}>
        <View>
          <AppHeading size="h2" style={styles.title}>
            {title}
          </AppHeading>
        </View>
        <Spacer style={{ height: 6 }} />
        <View>
          <AppText style={styles.description}>{description}</AppText>
        </View>
      </View>
    </Fonts>
  );
}
const styles = StyleSheet.create({
  screen: { flexDirection: "row" },
  profilePlaceholder: {
    width: 57,
    height: 55,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsPlaceholder: {
    marginHorizontal: 15,
  },
  title: { fontFamily: "Khyay", color: colors.primary },
  description: {
    fontFamily: "Khyay",
    color: colors.medium,
    fontSize: 16,
  },
});

export default UserDetails;
