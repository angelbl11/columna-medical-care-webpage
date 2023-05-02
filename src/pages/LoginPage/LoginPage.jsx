import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import FormInput from "../../components/FormInput/FormInput";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  FooterContainer,
  GridFormContainer,
  GridLogoContainer,
  HeaderContainer,
  LinksContainer,
} from "./LoginPage.styles";
import { CustomLink, HeaderPage, SubTitle } from "../../styles";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    navigate("/home", {
      replace: true,
    });
    console.log(data);
  };
  const navigate = useNavigate();
  return (
    <Grid container flexDirection={"row"}>
      <GridLogoContainer>
        <Logo />
      </GridLogoContainer>
      <GridFormContainer>
        <HeaderContainer>
          <HeaderPage>Bievenido de nuevo</HeaderPage>
          <SubTitle>
            Por favor ingrese sus datos para acceder a su cuenta y <br />{" "}
            comenzar a utilizar los servicios de la app
          </SubTitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                field={field}
                label={"Correo electrónico"}
                placeholder={"john@ejemplo.com"}
                type="email"
                error={errors.email}
                errorMsg={"Email requerido"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                field={field}
                label={"Contraseña"}
                placeholder={"************"}
                type="password"
                error={errors.password}
                errorMsg={"Contraseña requerida"}
              />
            )}
          />
          <LinksContainer>
            <CustomLink href="#" underline="none">
              Olvidé mi contraseña
            </CustomLink>
            <ThemeButton btnText={"INICIAR SESIÓN"} type="submit"></ThemeButton>
          </LinksContainer>
        </form>
        <FooterContainer>
          <SubTitle isFooter={true}>
            Al iniciar sesión estas aceptando los términos y condiciones <br />
            de Columna Medical Care.
          </SubTitle>
        </FooterContainer>
      </GridFormContainer>
    </Grid>
  );
};

export default LoginPage;
