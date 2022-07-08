import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

export default useBackHandler = (location, title, message, confirmation) => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert(`${title}`, `${message}`, [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: `${confirmation}`,
          onPress: () => navigation.navigate(location),
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
};
