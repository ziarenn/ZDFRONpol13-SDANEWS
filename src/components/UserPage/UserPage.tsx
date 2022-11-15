import React from "react";
import { NavbarProps as UserPageProps } from "../../helpers/interfaces";
import { auth } from "../../firebaseConfig";
import { Typography, Button } from "@mui/material";
import { signOut } from "firebase/auth";
const UserPage: React.FC<UserPageProps> = ({ loggedIn }) => {
  return (
    <>
      {loggedIn && auth.currentUser && (
        <>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "2rem",
              my: "1rem",
              borderBottom: " 1px solid #1976d2",
              pb: ".5rem",
            }}
          >
            Your profile
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontSize: "1rem", my: "1rem" }}
          >
            {auth.currentUser.email}
          </Typography>
          <Button
            variant="outlined"
            sx={{ display: "block", mx: "auto", my: "1rem" }}
            onClick={() => signOut(auth)}
          >
            Log out
          </Button>
        </>
      )}
    </>
  );
};

export default UserPage;

// 7. Button (MUI) variant outlined, w sx'ach: display block, mx auto, my 1rem. Po kliknięciu na button, wywołaj funkcję signOut (firebase/auth, przyjmuje jako argument obiekt auth). TextContent: Log out.

// {x && y.z && <h1>123</h1>}
