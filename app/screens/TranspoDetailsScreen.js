import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import Spacer from "../components/Spacer";
import colors from "../config/colors";
import fonts from "../config/fonts";
import { transpoDetailsSchema } from "../config/schema";

function TranspoDetailsScreen({ navigation, route }) {
  // const [camera, showCamera] = useState(false);

  useEffect(() => {
    if (route.params?.image) {
      clearErrors("odometer_image_path");
      setValue("odometer_image_path", route.params.image);
    }
  }, [route.params?.image]);

  const methods = useForm({
    resolver: yupResolver(transpoDetailsSchema),
    mode: "onTouched",
  });

  const {
    formState: { errors },
    control,
    clearErrors,
    setValue,
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Screen style={styles.screen}>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <View style={styles.carDetails}>
          <AppText>Car Details</AppText>
        </View>
        <AppText style={styles.formLabel}>Odo</AppText>
        <AppFormField name="odometer" keyboardType="numeric" />
        <Spacer />
        <AppText style={styles.formLabel}>Odo Picture</AppText>
        <View style={{ display: "none" }}>
          <Controller
            name="odometer_image_path"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <AppTextInput onChangeText={onChange} value={value} />
              </>
            )}
          />
        </View>

        <View style={styles.imageWrapper}>
          {route.params?.image && (
            <Image source={{ uri: route.params?.image }} style={styles.image} />
          )}
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate("AppCamera")}
          >
            <Ionicons
              name={route.params?.image ? "ios-camera-reverse" : "ios-camera"}
              size={40}
            />
          </TouchableOpacity>
        </View>
        {errors.odometer_image_path && (
          <AppText style={styles.error}>
            {errors.odometer_image_path.message}
          </AppText>
        )}

        <Spacer />
        <AppText style={styles.formLabel}>Companion</AppText>
        <AppFormField
          name="companion"
          maxLength={255}
          numberOfLines={4}
          multiline
          style={{ textAlignVertical: "top" }}
        />
        <Spacer />
        <SubmitButton title="Sign In" />
      </FormProvider>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formLabel: {
    marginBottom: 6,
  },
  screen: {
    margin: 15,
  },
  iconWrapper: {
    backgroundColor: colors.light,
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  imageWrapper: {
    flexDirection: "row",
  },
  carDetails: {
    padding: 30,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: colors.danger,
    fontFamily: fonts.primaryName,
    fontSize: 15,
    paddingTop: 10,
  },
});

export default TranspoDetailsScreen;
