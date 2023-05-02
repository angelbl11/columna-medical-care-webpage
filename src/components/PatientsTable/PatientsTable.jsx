import { Box } from "@mui/material";
import React from "react";
import PatientInfoRow from "./PatientInfoRow";
import { TableHeading, TableRow } from "./PatientsTable.styles";

const PatientsTable = () => {
  return (
    <Box style={{ marginTop: 22, backgroundColor: "transparent" }}>
      <table style={{ width: "100%" }}>
        <TableRow>
          <TableHeading>NOMBRE(S)</TableHeading>
          <TableHeading>EDAD</TableHeading>
          <TableHeading>SEXO</TableHeading>
          <TableHeading>EMAIL</TableHeading>
          <TableHeading>TELÉFONO</TableHeading>
        </TableRow>
        <PatientInfoRow />
        <PatientInfoRow />
      </table>
    </Box>
  );
};

export default PatientsTable;
