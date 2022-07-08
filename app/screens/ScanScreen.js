import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ViewFinder from "react-native-view-finder";

import Toast from "../components/toast/Toast";
import Screen from "../components/Screen";
import defaultStyle from "../config/styles";
import routes from "../navigation/routes";
import useBackHandler from "../hooks/useBackHandler";

const initialData = [
  {
    title: "Jonel Ignacio",
    description: "Web Developer",
    targetScreen: routes.DASHBOARD,
  },
  {
    title: "jonel ignacio",
    description: "web developer",
    targetScreen: routes.TRANSPO_DETAILS,
  },
];

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qrData, setQrData] = useState();

  const { height } = Dimensions.get("screen");

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", () =>
  //     navigation.goBack()
  //   );
  //   return () => backHandler.remove();
  // }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setIsLoading(true);
    setQrData(initialData[data]);

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
          loading={isLoading}
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
      {isLoading && (
        <Toast
          data={qrData}
          isLoading={!scanned}
          scanned={scanned}
          showToast={isLoading}
          setScanned={setScanned}
        />
      )}
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
