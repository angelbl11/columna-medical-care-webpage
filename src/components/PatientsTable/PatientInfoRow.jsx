import React from "react";
import {
  Email,
  EmailChildContainer,
  EmailContainer,
  PatientName,
  PatientNameChildContainer,
  PatientNameContainer,
  PatientNameDecoration,
  TableData,
  TableRow,
} from "./PatientsTable.styles";

const PatientInfoRow = () => {
  return (
    <TableRow
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        paddingRight: 40,
        marginTop: 15,
        marginBottom: 15,
      }}
    >
      <TableData>
        <PatientNameContainer>
          <PatientNameDecoration />
          <PatientNameChildContainer>
            <PatientName isHeader>Paciente</PatientName>
            <PatientName>Sergio Gabriel Medina Siordia</PatientName>
          </PatientNameChildContainer>
        </PatientNameContainer>
      </TableData>
      <TableData>32 años</TableData>
      <TableData>Masculino</TableData>
      <TableData>
        <EmailContainer>
          <EmailChildContainer>
            <Email>john@ejemplo.com</Email>
          </EmailChildContainer>
        </EmailContainer>
      </TableData>
      <TableData>3323782910</TableData>
    </TableRow>
  );
};

export default PatientInfoRow;
