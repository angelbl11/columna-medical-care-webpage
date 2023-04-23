import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Box, Button, Grid, Link, TextField } from "@mui/material";
import CustomTextField from "../components/CustomTextField";
const LoginPage = () => {
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
        <CustomTextField
          label={"Correo electrónico"}
          placeholder={"john@ejemplo.com"}
          inputMode={"email"}
          type="email"
        />
        <CustomTextField
          label={"Contraseña"}
          placeholder={"************"}
          inputMode={"text"}
          type="password"
        />
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
          style={{
            backgroundColor: "#1B4079",
            height: 60,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <text style={{ fontWeight: 800, fontSize: 15 }}>INICIAR SESIÓN</text>
        </Button>
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
