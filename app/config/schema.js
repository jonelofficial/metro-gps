import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  identifier: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

export const transpoDetailsSchema = Yup.object().shape({
  odometer: Yup.string().required().label("Odometer"),
  // odometer_image_path: Yup.string().required().label("Odometer Picture"),
  odometer_image_path: Yup.object().required().label("Odometer Picture"),
  companion: Yup.string().required().label("Companion"),
});
