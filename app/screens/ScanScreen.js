import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ViewFinder from "react-native-view-finder";

import Toast from "../components/toast/Toast";
import Screen from "../components/Screen";
import defaultStyle from "../config/styles";

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const { height } = Dimensions.get("screen");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (scanned) {
      slideIn();
    } else {
      slideOut();
    }
  }, [scanned]);

  useEffect(() => {
    if (isLoading) {
      slideIn();
    } else {
      slideOut();
    }
  }, [isLoading]);

  const handleBarCodeScanned = async ({ type, data }) => {
    setIsLoading(true);
    setTimeout(() => {
      setScanned(true);
    }, 2000);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ratio="16:9"
          style={[
            StyleSheet.absoluteFillObject,
            { width: "160%", height: height },
          ]}
        />

        <ViewFinder
          height={250}
          width={250}
          borderLength={50}
          borderRadius={15}
          // loading={!scanned}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => {
              setScanned(false);
              setIsLoading(false);
            }}
          />
        )}
      </View>
      <Animated.View
        style={{
          transform: [{ translateY: fadeAnim }],
        }}
      >
        <Toast
          position="bottom"
          isLoading={!scanned}
          title="Jonel Ignacio"
          description="Software Application Developer"
          navigation={navigation}
        />
        {/* refactor this using useNavigation */}
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: defaultStyle.colors.black },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "60%",
    height: "30%",
    borderColor: defaultStyle.colors.white,
    borderWidth: 10,
    borderRadius: 25,
    position: "absolute",
  },
});

export default ScanScreen;
