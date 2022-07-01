import { useFormContext } from "react-hook-form";

import AppButton from "../AppButton";

function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit, onSubmit } = useFormContext();
  return (
    <AppButton title={title} onPress={handleSubmit(onSubmit)} {...otherProps} />
  );
}

export default SubmitButton;
