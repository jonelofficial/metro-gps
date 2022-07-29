import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ViewFinder from "react-native-view-finder";

import Toast from "../components/toast/Toast";
import Screen from "../components/Screen";
import defaultStyle from "../config/styles";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import { useLogin } from "../api/LoginApi";
import AuthContext from "../auth/context";

// const initialData = [
//   {
//     title: "Jonel Ignacio",
//     description: "Web Developer",
//     targetScreen: routes.DASHBOARD,
//   },
//   {
//     title: "jonel ignacio",
//     description: "web developer",
//     targetScreen: routes.TRANSPO_DETAILS,
//   },
// ];

function ScanScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qrData, setQrData] = useState({
    title: null,
    description: null,
    targetScreen: null,
  });

  const { logIn } = useAuth();

  const { height } = Dimensions.get("screen");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      const json = await JSON.parse(data);
      if (json.vehicle_type && user) {
        // setIsLoading(true);
        // setQrData(initialData[1]);

        // setTimeout(() => {
        //   setScanned(true);
        // }, 2000);
        console.log(json);
      } else if (!user) {
        setIsLoading(true);
        const loginRes = await useLogin(json);
        console.log(loginRes);

        // setQrData(initialData[1]);

        // setTimeout(() => {
        //   setScanned(true);
        // }, 2000);
      } else {
        alert("please login first");
      }
    } catch (e) {
      // logIn(data);
      console.log("SCAN ERROR: ", e);
    }
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
            { width: "170%", height: height },
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
