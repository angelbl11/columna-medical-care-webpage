import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const InputContainer = styled(Box)`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 25px;
`;

export const InputLabel = styled.span`
  text-align: left;
  margin-bottom: 5px;
  margin-left: 5px;
  color: #363636;
  font-weight: 600;
`;

export const ErrorLabel = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  font-size: 12px;
  color: #c23f38;
`;
