import { TextField } from "@mui/material";
import React from "react";
import { ErrorLabel, InputContainer, InputLabel } from "./FormInput.styles";

const FormInput = ({
  label,
  placeholder,
  type,
  field,
  error,
  helperText,
  errorMsg,
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextField
        error={error}
        InputProps={{ disableUnderline: error ? false : true }}
        hiddenLabel
        helperText={helperText}
        margin="dense"
        {...field}
        variant="filled"
        color="#363636"
        placeholder={placeholder}
        type={type}
        style={{
          backgroundColor: "#F5F7FB",
          borderRadius: "10px",
        }}
      />
      {error && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </InputContainer>
  );
};

export default FormInput;
