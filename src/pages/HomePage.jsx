import { Box, Button, Grid } from "@mui/material";
import React from "react";
import PatientsTable from "../components/PatientsTable";
import { ReactComponent as User } from "../assets/user.svg";
const HomePage = () => {
  return (
    <Grid container backgroundColor="#F5F7FB">
      <Grid
        style={{
          backgroundColor: "#ffff",
          height: "100vh",
          width: "15vh",
          margin: 20,
          borderRadius: 30,
        }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Button
          style={{
            width: 30,
            height: 60,
            borderRadius: 8,
            backgroundColor: "#F5F7FB",
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              width: 17,
              height: 3,
              backgroundColor: "#FD8224",
              borderRadius: 50,
            }}
          />
          <User style={{ height: 25, width: 25, marginBottom: 5 }}></User>
        </Button>
        <Button
          style={{
            width: 30,
            height: 60,
            borderRadius: 8,
            backgroundColor: "transparent",
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <User style={{ height: 25, width: 25, marginBottom: 5 }}></User>
        </Button>
        <Button
          style={{
            width: 30,
            height: 60,
            borderRadius: 8,
            backgroundColor: "#F5F7FB",
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            style={{
              width: 17,
              height: 3,
              backgroundColor: "#FD8224",
              borderRadius: 50,
            }}
          />
          <User style={{ height: 25, width: 25, marginBottom: 5 }}></User>
        </Button>
        <Button
          style={{
            width: 30,
            height: 60,
            borderRadius: 8,
            backgroundColor: "transparent",
            marginTop: 12,
            marginBottom: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <User style={{ height: 25, width: 25, marginBottom: 2 }}></User>
        </Button>
      </Grid>
      <Grid
        style={{
          height: "100vh",
          width: "80%",
          flexDirection: "column",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <Box textAlign={"left"} marginTop={5} width={"80%"}>
            <h1 style={{ color: "#363636" }}>Pacientes</h1>
            <text
              style={{ fontWeight: 600, color: "#858585" }}
              fontSize={15}
              fontWeight={600}
            >
              Centro de pacientes activos
            </text>
          </Box>
          <Box textAlign={"left"} marginTop={5} width={"80%"} marginLeft={70}>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "#1B4079",
                height: 60,
                borderRadius: 10,
                marginTop: 20,
                width: "90%",
              }}
            >
              <text style={{ fontWeight: 800, fontSize: 15 }}>
                NUEVO PACIENTE
              </text>
            </Button>
          </Box>
        </Box>
        <PatientsTable />
      </Grid>
    </Grid>
  );
};

export default HomePage;
