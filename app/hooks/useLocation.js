import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default useLocation = () => {
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.009;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [arrived, setArrived] = useState();
  const [arrivedLoading, setArrivedLoading] = useState(false);
  const [left, setLeft] = useState();
  const [leftLoading, setLeftLoading] = useState(false);
  const [heading, setHeading] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [history, setHistory] = useState([]);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const result = await Location.getCurrentPositionAsync();
      setCurrentLocation({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleArrived = async () => {
    try {
      setArrivedLoading(true);
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const result = await Location.getCurrentPositionAsync();
      if (result) {
        setArrived({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
          date: result.timestamp,
          status: "arrived",
        });
        setArrivedLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeft = async () => {
    try {
      setLeftLoading(true);
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const result = await Location.getCurrentPositionAsync();
      if (result) {
        setLeft({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
          date: result.timestamp,
          status: "left",
        });
        setLeftLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInterval(() => getLocation(), 2000);
  }, []);

  return {
    currentLocation,
    handleArrived,
    arrived,
    arrivedLoading,
    handleLeft,
    left,
    leftLoading,
    heading,
    width,
    height,
    history,
  };
};
