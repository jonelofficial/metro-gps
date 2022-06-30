import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import Screen from "../components/Screen";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";
import colors from "../config/colors";
import ViewFinder from "react-native-view-finder";

function ScanScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Type: ${type} Data: ${data}`);

    // setTimeout(() => {
    //   setScanned(false);
    // }, 3000);
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
          loading
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.black },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "60%",
    height: "30%",
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 25,
    position: "absolute",
  },
});

export default ScanScreen;
