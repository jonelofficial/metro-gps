import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useAddress = (latlong) => {
  const [address, setAddress] = useState();

  const getAddress = async () => {
    try {
      const result = await Location.reverseGeocodeAsync(latlong);
      if (result) {
        setAddress(result);
      }
    } catch (error) {
      console.log("USEADDRESS ERROR: ", error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);
  return address;
};
