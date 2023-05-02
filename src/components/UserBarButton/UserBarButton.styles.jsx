import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AvatarButton = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) => (props.isFilled ? "#F5F7FB" : "transparent")};
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarBoxDecoration = styled(Box)`
  width: 17px;
  height: 3px;
  background-color: #fd8224;
  border-radius: 50px;
`;
