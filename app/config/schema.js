import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

export const transpoDetailsSchema = Yup.object().shape({
  odo: Yup.string().required().label("Odometer"),
  odoPic: Yup.string().required().label("Odometer Picture"),
  companion: Yup.string().required().label("Companion"),
});
