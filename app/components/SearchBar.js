import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import defaultStyle from "../config/styles";
import Fonts from "./Fonts";
import fonts from "../config/fonts";

function SearchBar(props) {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState();

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (event, value) => {
    setDate(value);
    setText(value.toDateString());
    setDatePicker(false);
  };

  const handleClear = () => {
    setText(null);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="ios-search"
            style={styles.searchIcon}
            size={20}
            color={defaultStyle.colors.medium}
          />
          <Fonts style={styles.inputWrapper}>
            <TextInput
              style={[defaultStyle.text, styles.input]}
              placeholder="Search..."
              placeholderTextColor={defaultStyle.colors.light3}
              onChangeText={setText}
              value={text}
            />
          </Fonts>
        </View>

        {text ? (
          <TouchableWithoutFeedback onPress={handleClear}>
            <Ionicons name="ios-close-outline" size={20} style={styles.close} />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={showDatePicker}>
            <Ionicons
              name="ios-calendar-sharp"
              style={styles.dateIcon}
              size={20}
              color={defaultStyle.colors.primary}
            />
          </TouchableWithoutFeedback>
        )}
      </View>

      {datePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    overflow: "hidden",
    width: "85%",
    alignItems: "center",
  },
  input: {
    fontFamily: fonts.primaryName,
  },
  searchIcon: {
    marginRight: 10,
    marginTop: -2,
  },
});

export default SearchBar;
