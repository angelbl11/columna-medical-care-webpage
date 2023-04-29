import { Box, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  label,
  placeholder,
  type,
  field,
  error,
  helperText,
  errorMsg,
}) => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      margin={"0 auto"}
      flexDirection={"column"}
      marginTop={5}
    >
      <text
        style={{
          textAlign: "left",
          marginBottom: 5,
          marginLeft: 5,
          color: "#363636",
          fontWeight: 600,
        }}
      >
        {label}
      </text>
      <TextField
        error={error}
        InputProps={{ disableUnderline: error ? false : true }}
        hiddenLabel
        helperText={helperText}
        margin="dense"
        {...field}
        variant="filled"
        placeholder={placeholder}
        type={type}
        style={{
          backgroundColor: "#F5F7FB",
          borderRadius: "10px",
        }}
      />
      {error && <text style={{marginLeft: 5, marginTop:2,fontSize: 12, color:"#C23F38"}}>{errorMsg}</text>}
    </Box>
  );
};

export default CustomTextField;
