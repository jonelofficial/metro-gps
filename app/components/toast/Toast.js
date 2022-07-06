import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import AppButton from "../AppButton";
import UserDetails from "../skeleton/UserDetails";
import UserDetailsSkeleton from "../skeleton/UserDetailsSkeleton";

function Toast({ isLoading, title, description, position, navigation }) {
  // refactor this using useNavigation
  const handleOnPress = () => {
    navigation.navigate("DashboardScreen");
  };

  return (
    <View style={[styles.container, { [position]: 0 }]}>
      <View style={styles.detailsContainer}>
        {isLoading ? (
          <UserDetailsSkeleton />
        ) : (
          <UserDetails title={title} description={description} />
        )}
      </View>
      <AppButton
        isLoading={isLoading}
        title={isLoading ? "LOADING..." : "SIGN IN"}
        textStyle={styles.button}
        disabled={isLoading}
        color={isLoading ? "disablePrimary" : "primary"}
        onPress={isLoading ? null : handleOnPress}
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
    position: "absolute",
    width: "100%",
  },
  detailsContainer: {
    padding: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  button: {
    fontSize: 18,
  },
});
export default Toast;
