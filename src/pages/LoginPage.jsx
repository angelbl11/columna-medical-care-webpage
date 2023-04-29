import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Box, Button, Grid, Link } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
      <Grid
        style={{
          backgroundColor: "#1B4079",
          height: "100vh",
          width: "60vh",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Logo />
      </Grid>
      <Grid
        style={{
          height: "100vh",
          width: "50%",
          flexDirection: "column",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Box textAlign={"center"} marginTop={12}>
          <h1 style={{ color: "#363636" }}>Bievenido de nuevo</h1>
          <text
            style={{ fontWeight: 600, color: "#858585" }}
            fontSize={15}
            fontWeight={600}
          >
            Por favor ingrese sus datos para acceder a su cuenta y <br />{" "}
            comenzar a utilizar los servicios de la app
          </text>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
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
              <CustomTextField
                field={field}
                label={"Contraseña"}
                placeholder={"************"}
                type="password"
                error={errors.password}
                errorMsg={"Contraseña requerida"}
              />
            )}
          />

          <Box flexDirection="column" display="flex" margin="0 auto">
            <Link
              href="#"
              underline="none"
              style={{
                textAlign: "right",
                color: "#1B4079",
                fontWeight: 600,
                marginTop: 20,
              }}
            >
              Olvide mi contraseña
            </Link>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#1B4079",
                height: 60,
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <text style={{ fontWeight: 800, fontSize: 15 }}>
                INICIAR SESIÓN
              </text>
            </Button>
          </Box>
        </form>
        <Box textAlign={"center"} marginTop={5} marginBottom={2}>
          <text
            style={{ fontWeight: 600, color: "#B7B7BC" }}
            fontSize={15}
            fontWeight={600}
          >
            Al iniciar sesión estas aceptando los términos y condiciones <br />
            de Columna Medical Care.
          </text>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
