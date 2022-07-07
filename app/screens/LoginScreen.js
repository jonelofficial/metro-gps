import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import Spacer from "../components/Spacer";
import colors from "../config/colors";
import defaultStyle from "../config/styles";
import { loginSchema } from "../config/schema";
import fonts from "../config/fonts";

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleScan = () => {
    console.log("Clicked Scan ID");
    navigation.navigate("ScanScreen");
  };

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const { reset } = methods;
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("DashboardScreen");
    reset();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.titleContainer}>
        <AppHeading style={styles.title}>Login to your</AppHeading>
        <AppHeading style={styles.title}>Account</AppHeading>
      </View>
      <View style={styles.formContainer}>
        <FormProvider {...methods} onSubmit={onSubmit}>
          <AppText style={styles.formLabel}>Username</AppText>
          <AppFormField
            name="username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Spacer />

          <AppText style={styles.formLabel}>Password</AppText>
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password" // for Ios
            secureTextEntry={!showPassword} // password
            secIcon
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <Spacer />

          <View style={styles.scanContainer}>
            <TouchableOpacity onPress={handleScan}>
              <Text style={[defaultStyle.text, styles.scanID]}>Scan ID</Text>
            </TouchableOpacity>
          </View>

          <Spacer />

          <SubmitButton title="Sign In" />
        </FormProvider>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  titleContainer: {
    paddingTop: "15%",
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.primaryName,
    lineHeight: 45,
    fontWeight: "600",
  },
  formContainer: {
    paddingTop: 40,
  },
  formLabel: {
    fontFamily: fonts.primaryName,
    marginBottom: 6,
  },
  input: {
    color: colors.medium,
  },
  scanContainer: {
    alignItems: "flex-end",
  },
  scanID: {
    fontFamily: fonts.primaryName,
    color: colors.primary,
  },
});

export default LoginScreen;
