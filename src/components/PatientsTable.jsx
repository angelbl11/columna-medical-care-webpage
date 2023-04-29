import { Box } from "@mui/material";
import React from "react";
import PatientInfoComponent from "./PatientInfoComponent";

const PatientsTable = () => {
  return (
    <Box style={{ marginTop: 22, backgroundColor: "transparent" }}>
      <table style={{ width: "100%" }}>
        <tr
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <th
            style={{
              color: "#89898D",
              fontWeight: 600,
              textAlign: "left",
              padding: 8,
            }}
          >
            NOMBRE(S)
          </th>
          <th
            style={{
              color: "#89898D",
              fontWeight: 600,
              textAlign: "left",
              padding: 8,
            }}
          >
            EDAD
          </th>
          <th
            style={{
              color: "#89898D",
              fontWeight: 600,
              textAlign: "left",
              padding: 8,
            }}
          >
            SEXO
          </th>
          <th
            style={{
              color: "#89898D",
              fontWeight: 600,
              textAlign: "left",
              padding: 8,
            }}
          >
            EMAIL
          </th>
          <th
            style={{
              color: "#89898D",
              fontWeight: 600,
              textAlign: "left",
              padding: 8,
            }}
          >
            TELÉFONO
          </th>
        </tr>
        <PatientInfoComponent />
        <PatientInfoComponent />
      </table>
    </Box>
  );
};

export default PatientsTable;
