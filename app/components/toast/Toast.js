import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import useAuth from "../../auth/useAuth";

import colors from "../../config/colors";
import AppButton from "../AppButton";
import UserDetails from "../skeleton/UserDetails";
import UserDetailsSkeleton from "../skeleton/UserDetailsSkeleton";

function Toast({ scanned, showToast, data, setScanned }) {
  const navigation = useNavigation();
  const { logIn } = useAuth();

  const { title, description, targetScreen } = data;

  const handleOnPress = () => {
    // navigation.navigate(targetScreen);
    setScanned(false);
    logIn(data);
  };

  const fadeAnim = useRef(new Animated.Value(300)).current;

  const slideIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  useEffect(() => {
    if (scanned) {
      slideIn();
    } else {
      slideOut();
    }

    if (showToast) {
      slideIn();
    } else {
      slideOut();
    }
  }, [scanned, showToast]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: fadeAnim }],
      }}
    >
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          {scanned ? (
            <UserDetails title={title} description={description} />
          ) : (
            <UserDetailsSkeleton />
          )}
        </View>
        <AppButton
          isLoading={!scanned}
          title={scanned ? "SIGN IN" : "LOADING..."}
          textStyle={styles.button}
          disabled={!scanned}
          color={scanned ? "primary" : "disablePrimary"}
          onPress={scanned ? handleOnPress : null}
        />
      </View>
    </Animated.View>
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
    bottom: 0,
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
