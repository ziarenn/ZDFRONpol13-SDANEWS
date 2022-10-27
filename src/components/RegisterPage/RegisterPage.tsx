import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const RegisterPage = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterPage;

// JSX:
// Całość ma być obwinięta tagiem <form> (HTML) nadaj mu display flex oraz flexDirection column
// 1. Typography wyśrodkowane, wygląd h2, rozmiar czcionki 1.5rem i textContent Register new account
// 2. TextField type email, placeholder email, w sx'ach display block, mx auto, my .5rem
// 3. TextField type password, placeholder password, w sx'ach display block, mx auto, my .5rem
// 4. TextField type password, placeholder repeat password, w sx'ach display block, mx auto, my .5rem
// 5. Button (z MUI) variant contained, type submit w sx'ach display block i mx auto
