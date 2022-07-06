import { CameraType, Camera } from "expo-camera";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import colors from "../config/colors";

function AppCamera({ navigation, route, style }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(1);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <AppText>No access to camera</AppText>;
  }

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const retakePicture = () => {
    setImage(null);
  };

  const handleFlash = () => {
    if (flash === 1) {
      setFlash(2);
    } else {
      setFlash(1);
    }
  };

  const finalPicture = () => {
    navigation.navigate({
      name: "TranspoDetailsScreen",
      params: { image: image },
      merge: true,
    });
  };

  return (
    <Screen>
      {!image ? (
        <View style={[styles.container, style]}>
          <Camera
            ref={(ref) => setCamera(ref)}
            flashMode={flash}
            style={styles.camera}
            type={type}
            ratio="16:9"
          >
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: colors.light,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 1,
                  }}
                  onPress={takePicture}
                >
                  <Ionicons name="ios-camera" size={40} />
                </TouchableOpacity>
              </View>
              <View style={styles.flash}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor:
                      flash !== 1 ? colors.light : colors.warning,
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 1,
                  }}
                  onPress={handleFlash}
                >
                  <Ionicons
                    name={flash !== 1 ? "ios-flash-off" : "ios-flash"}
                    size={40}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      ) : (
        <>
          <Image source={{ uri: image }} style={{ flex: 1 }} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: colors.success,
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 1,
                }}
                onPress={finalPicture}
              >
                <Ionicons name="ios-checkmark" size={40} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonOk}>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: colors.light,
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 1,
                }}
                onPress={retakePicture}
              >
                <Ionicons name="ios-repeat" size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonOk: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    padding: 20,
  },
  flash: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    padding: 20,
  },
});

export default AppCamera;
