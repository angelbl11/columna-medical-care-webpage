import { Grid } from "@mui/material";
import React from "react";
import PatientsTable from "../../components/PatientsTable/PatientsTable";
import UserBarButton from "../../components/UserBarButton/UserBarButton";
import {
  ButtonContainer,
  HeaderContainer,
  TitleContainer,
  UserBarContainer,
  UserInfoContainer,
} from "./HomePage.styles";
import { HeaderPage, SubTitle } from "../../styles";
import ThemeButton from "../../components/ThemeButton";
const HomePage = () => {
  return (
    <Grid container backgroundColor="#F5F7FB">
      <UserBarContainer>
        <UserBarButton />
        <UserBarButton isFilled />
        <UserBarButton />
        <UserBarButton isFilled />
      </UserBarContainer>
      <UserInfoContainer>
        <HeaderContainer>
          <TitleContainer>
            <HeaderPage>Pacientes</HeaderPage>
            <SubTitle> Centro de pacientes activos</SubTitle>
          </TitleContainer>
          <ButtonContainer>
            <ThemeButton btnText={"Nuevo Paciente"} style={{ width: 215 }} />
          </ButtonContainer>
        </HeaderContainer>
        <PatientsTable />
      </UserInfoContainer>
    </Grid>
  );
};

export default HomePage;
