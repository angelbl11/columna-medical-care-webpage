import { Box } from "@mui/material";
import React from "react";

const PatientInfoComponent = () => {
  return (
    <tr
      style={{
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        paddingRight: 40,
        width: "100%",
        marginTop: 15,
        marginBottom: 15,
      }}
      onClick={() => {
        console.log("Info Paciente");
      }}
    >
      <td
        style={{
          textAlign: "left",
          alignContent: "flex-start",
          padding: 8,
          paddingRight: 0,
          maxWidth: 170,
        }}
      >
        <Box display="flex" flexDirection={"row"} height={"auto"}>
          <Box
            width={4}
            style={{
              backgroundColor: "#37C35E",
              borderRadius: 20,
              marginTop: 12,
              marginBottom: 12,
            }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            style={{ marginTop: 12, marginLeft: 6 }}
          >
            <text style={{ color: "#89898D", fontWeight: 600 }}>Paciente</text>
            <text style={{ color: "#363636", fontWeight: 700 }}>
              Sergio Gabriel Medina Siordia
            </text>
          </Box>
        </Box>
      </td>
      <td
        style={{
          textAlign: "left",
          padding: 8,
          color: "#66697D",
          fontWeight: 700,
          marginTop: 12,
          marginBottom: 12,
          alignContent: "flex-start",
        }}
      >
        32 años
      </td>
      <td
        style={{
          textAlign: "left",
          padding: 8,
          color: "#66697D",
          fontWeight: 700,
        }}
      >
        <td
          style={{
            textAlign: "left",
            padding: 8,
            color: "#66697D",
            fontWeight: 700,
            marginTop: 12,
            marginBottom: 12,
          }}
        >
          Masculino
        </td>
      </td>
      <td
        style={{
          textAlign: "left",
          padding: 8,
          color: "#66697D",
          fontWeight: 700,
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        <Box display="flex" flexDirection={"row"} alignItems={"center"}>
          <Box style={{ backgroundColor: "#F6E7FF", borderRadius: 30 }}>
            <text
              style={{
                fontWeight: 600,
                color: "#8200C3",
                marginTop: 4,
                marginBottom: 4,
                marginLeft: 12,
                marginRight: 12,
              }}
            >
              john@ejemplo.com
            </text>
          </Box>
        </Box>
      </td>
      <td
        style={{
          textAlign: "left",
          padding: 8,
          color: "#66697D",
          fontWeight: 700,
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        3323782910
      </td>
    </tr>
  );
};

export default PatientInfoComponent;
