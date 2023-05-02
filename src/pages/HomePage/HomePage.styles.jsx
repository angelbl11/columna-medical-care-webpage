import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const UserBarContainer = styled(Box)`
  background-color: #ffff;
  height: 100vh;
  width: 15vh;
  margin: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const UserInfoContainer = styled(Box)`
  height: 100vh;
  width: 80%;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled(Box)`
  text-align: left;
  margin-top: 50px;
  width: 80%;
`;

export const ButtonContainer = styled(Box)`
  text-align: left;
  margin-top: 50px;
  width: 20%;
  width: auto;
`;
