import { Controller, useFormContext } from "react-hook-form";
import AppTextInput from "../AppTextInput";

function AppFormField({ name, icon, style, ...otherProps }) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            style={style}
            secIcon={icon}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...otherProps}
          />
        )}
      />
    </>
  );
}

export default AppFormField;
