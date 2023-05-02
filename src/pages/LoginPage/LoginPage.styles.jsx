import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const GridLogoContainer = styled(Grid)`
  background-color: #1b4079;
  height: 100vh;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GridFormContainer = styled(Grid)`
  height: 100vh;
  width: 50%;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
`;
export const HeaderContainer = styled(Box)`
  text-align: center;
  margin-top: 128px;
`;

export const LinksContainer = styled(Box)`
  flex-direction: column;
  display: flex;
  margin: 0 auto;
`;

export const FooterContainer = styled(Box)`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 123px;
`;
