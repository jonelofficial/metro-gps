import React from "react";
import { StyleSheet, View } from "react-native";
import Spacer from "../Spacer";
import SkeletonPlaceholder from "./SkeletonPlaceholder";

function UserDetailsSkeleton(props) {
  return (
    <>
      <View style={styles.profilePlaceholder}>
        <SkeletonPlaceholder height={60} />
      </View>
      <View style={styles.detailsPlaceholder}>
        <View style={styles.onePlaceholder}>
          <SkeletonPlaceholder height={12} />
        </View>
        <Spacer style={{ height: 8 }} />
        <View style={styles.threePlaceholder}>
          <View style={styles.one}>
            <SkeletonPlaceholder height={12} />
          </View>
          <View style={styles.two}>
            <SkeletonPlaceholder height={12} />
          </View>
          <View style={styles.three}>
            <SkeletonPlaceholder height={12} />
          </View>
        </View>
        <Spacer style={{ height: 8 }} />
        <View style={styles.twoPlaceholder}>
          <View style={styles.lastOne}>
            <SkeletonPlaceholder height={12} />
          </View>
          <View style={styles.lastTwo}>
            <SkeletonPlaceholder height={12} />
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  profilePlaceholder: {
    width: 57,
    height: 55,
    borderRadius: 12,
    overflow: "hidden",
  },
  detailsPlaceholder: {
    width: "60%",
    marginHorizontal: 15,
  },
  onePlaceholder: {
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  threePlaceholder: {
    flexDirection: "row",
    width: "100%",
  },
  one: {
    width: "20%",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  two: {
    width: "40%",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  three: {
    width: "30%",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  twoPlaceholder: {
    flexDirection: "row",
    width: "100%",
  },
  lastOne: {
    width: "65%",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
  },
  lastTwo: {
    width: "30%",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default UserDetailsSkeleton;
