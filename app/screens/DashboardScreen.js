import React, { useContext, useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";
import { getImage } from "../api/UserApi";
import AuthContext from "../auth/context";
import AppHeading from "../components/AppHeading";
import Camera from "../components/Camera";
import Card from "../components/Card";
import Fonts from "../components/Fonts";
import ListItem from "../components/list/ListItem";
import ListItemSeperator from "../components/list/ListItemSeperator";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Spacer from "../components/Spacer";
import colors from "../config/colors";
import fonts from "../config/fonts";
import url from "../api/url";

const initialData = [
  {
    id: 1,
    name: "Jonel",
    location: "Ilocos Norte",
    km: "18",
    hour: "164.30",
  },
  {
    id: 2,
    name: "Limay",
    location: "Ilocos Sur",
    km: "17",
    hour: "324.2",
  },
  {
    id: 3,
    name: "Pj",
    location: "La Union",
    km: "16",
    hour: "102",
  },
  {
    id: 4,
    name: "Roy ",
    location: "Pangasinan",
    km: "19",
    hour: "202.10",
  },
  {
    id: 5,
    name: "Vilo",
    location: "Batanes",
    km: "20",
    hour: "400.21",
  },
  {
    id: 6,
    name: "Paco",
    location: "Cagayan",
    km: "14",
    hour: "25.30",
  },
  {
    id: 7,
    name: "Pat",
    location: "Nueva Vizcaya",
    km: "13",
    hour: "140.30",
  },
  {
    id: 8,
    name: "Jp",
    location: "Quirino",
    km: "21",
    hour: "20",
  },
  {
    id: 9,
    name: "Kim",
    location: "Aurora",
    km: "22",
    hour: "512.2",
  },
  {
    id: 10,
    name: "Je",
    location: "Bataan",
    km: "12",
    hour: "412.1",
  },
];

function DashboardScreen() {
  const data = Object.keys(initialData).length;
  const [trips, setTrips] = useState(initialData);
  const [image, setImage] = useState();
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    setImage(`${url.BASEURL}${user.user.profile}`);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      enabled={false}
    >
      <Screen>
        <Card
          image={{ uri: image }}
          name={`${user.user.first_name} ${user.user.last_name}`}
        />
        <SearchBar />
        <Fonts>
          <AppHeading size="h3" style={styles.count}>
            {data > 1
              ? `${data} items`
              : data == 0
              ? `No data found`
              : `${data} item`}
          </AppHeading>
        </Fonts>
        <Spacer />
        {data > 0 && (
          <FlatList
            data={trips}
            keyExtractor={(initialData) => initialData.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                location={item.location}
                km={item.km}
                hour={item.hour}
                onPress={() => console.log("item: ", item)}
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={false}
            onRefresh={() => setTrips(initialData)}
          />
        )}

        <Camera />
      </Screen>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  count: {
    color: colors.lightMedium,
    textAlign: "center",
    fontFamily: fonts.primaryName,
  },
});

export default DashboardScreen;
