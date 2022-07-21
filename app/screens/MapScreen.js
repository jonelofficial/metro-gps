import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import useLocation from "../hooks/useLocation";

function MapScreen(props) {
  const currentLocation = useLocation();
  return (
    <Screen>
      {currentLocation ? (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={currentLocation}
        >
          <Marker coordinate={currentLocation}></Marker>
        </MapView>
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
});

export default MapScreen;
