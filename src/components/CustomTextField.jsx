import { Box, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ label, inputMode, placeholder, type }) => {
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
        hiddenLabel
        variant="filled"
        placeholder={placeholder}
        inputMode={inputMode}
        type={type}
        style={{ backgroundColor: "#F5F7FB", borderRadius: "10px" }}
      />
    </Box>
  );
};

export default CustomTextField;
