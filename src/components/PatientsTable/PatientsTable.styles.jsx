import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TableRow = styled.tr`
  justify-content: space-between;
  display: flex;
`;

export const TableHeading = styled.th`
  color: #89898d;
  font-weight: 600;
  text-align: left;
  padding: 8px;
`;

export const TableData = styled.td`
  text-align: left;
  align-content: flex-start;
  margin: 12px;
  color: #66697d;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const PatientNameContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  height: auto;
`;

export const PatientNameDecoration = styled(Box)`
  width: 4px;
  height: 40px;
  background-color: #37c35e;
  border-radius: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const PatientNameChildContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 6px;
`;

export const PatientName = styled.span`
  color: ${(props) => (props.isHeader ? "##89898d" : "#363636")};
  font-weight: ${(props) => (props.isHeader ? "600" : "700")};
`;

export const EmailContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EmailChildContainer = styled(Box)`
  background-color: #f6e7ff;
  border-radius: 30px;
  fontweight: 600;
  color: #8200c3;
`;

export const Email = styled.span`
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 12px;
  margin-right: 12px;
`;
