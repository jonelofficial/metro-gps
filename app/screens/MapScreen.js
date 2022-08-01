import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useLocation from "../hooks/useLocation";
import Spacer from "../components/Spacer";
import useCompass from "../hooks/useCompass";

function MapScreen(props) {
  const direction = useCompass();

  const {
    handleArrived,
    handleLeft,
    currentLocation,
    arrivedLoading,
    leftLoading,
    width,
  } = useLocation();

  return (
    <Screen>
      {currentLocation ? (
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={currentLocation}
          >
            <Marker
              coordinate={currentLocation}
              title={`Latitude: ${currentLocation.latitude} , Longitude: ${currentLocation.longitude} `}
              rotation={direction}
            >
              <View
                style={{
                  width: width * 0.2,
                  height: width * 0.2,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image
                  source={require("../assets/cars/van.png")}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="center"
                  resizeMethod="resize"
                />
              </View>
            </Marker>
          </MapView>
          <View style={styles.buttonWrapper}>
            <AppButton
              title="Left"
              color={leftLoading ? "light" : "danger"}
              onPress={handleLeft}
              isLoading={leftLoading}
              disabled={leftLoading}
            />
            <Spacer />
            <AppButton
              title="Arrived"
              color={arrivedLoading ? "light" : "success"}
              onPress={handleArrived}
              isLoading={arrivedLoading}
              disabled={arrivedLoading}
            />
          </View>
        </>
      ) : (
        <ActivityIndicator visible={true} />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "50%",
  },
  buttonWrapper: {
    padding: 15,
  },
  car: {
    width: 10,
    height: 10,
  },
});

export default MapScreen;
