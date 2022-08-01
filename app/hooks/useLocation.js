import * as Location from "expo-location";
import { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { createLocation } from "../api/LocationsApi";
import AuthContext from "../auth/context";

export default useLocation = () => {
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.009;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const { token } = useContext(AuthContext);

  const [leftLoading, setLeftLoading] = useState(false);
  const [arrivedLoading, setArrivedLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();

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
      console.log("GET LOCATION ERROR: ", error);
    }
  };

  const handleArrived = async () => {
    try {
      setArrivedLoading(true);

      const result = await Location.getCurrentPositionAsync();
      if (result) {
        const res = await Location.reverseGeocodeAsync({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
        });
        const api = await createLocation(
          {
            data: {
              trip_id: 1,
              lat: result.coords.latitude,
              long: result.coords.longitude,
              date: `${result.timestamp}`,
              address: res,
              is_pin: true,
              trip: 1,
            },
          },
          token
        );
        console.log(api);
      }
      setArrivedLoading(false);
    } catch (error) {
      console.log("HANDLE ARRIVED ERROR: ", error);
    }
  };

  const handleLeft = async () => {
    try {
      setLeftLoading(true);

      const result = await Location.getCurrentPositionAsync();

      const res = await Location.reverseGeocodeAsync({
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      });

      const api = await createLocation(
        {
          data: {
            trip_id: 1,
            lat: result.coords.latitude,
            long: result.coords.longitude,
            date: `${result.timestamp}`,
            address: res,
            is_pin: false,
            trip: 1,
          },
        },
        token
      );
      console.log(api);

      setLeftLoading(false);
    } catch (error) {
      console.log("HANDLE LEFT ERROR: ", error);
    }
  };

  useEffect(() => {
    getLocation();
    // setInterval(() => getLocation(), 2000);
  }, []);

  return {
    handleArrived,
    handleLeft,
    currentLocation,
    arrivedLoading,
    leftLoading,
    width,
  };
};
